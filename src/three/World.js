import router from '../core/Router';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import sceneBackground from '../../resource/space.jpg';
import floorTexture from '../../resource/floorTexture.jpg';

export default class World {
    constructor(parent) {
        this.parent = parent;
        this.#Init();
    }
    #Init() {
        this.#setRenderer();
        this.#loadManage();
        this.#setScene();
        this.#setCamera();
        this.#setLight();
        this.#set3DObject();
        this.#setRayCaster();
        this.#loadCharacter();
        this.#setEvent();
        this.#thirdPersonCamera();
    }

    #setRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            canvas: this.parent.querySelector('#world'),
        });
        this.renderer.shadowMap.enabled = true;
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    #setScene() {
        this.scene = new THREE.Scene();
        this.textureLoader = new THREE.TextureLoader();
        this.scene.background = this.textureLoader.load(sceneBackground);
    }
    #setCamera() {
        const fov = 75;
        const aspect = window.innerWidth / window.innerHeight;
        const near = 0.1;
        const far = 1000;
        this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        this.camera.position.set(0, 10, 10);
        this.scene.add(this.camera);
    }
    #setLight() {
        this.ambientLight = new THREE.AmbientLight(0x333333);
        this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        this.directionalLight.position.set(-100, 100, 0);
        this.directionalLight.castShadow = true;
        this.scene.add(this.ambientLight);
        this.scene.add(this.directionalLight);
    }
    #loadManage() {
        this.loadManager = new THREE.LoadingManager();
        const progressbar = this.parent.querySelector('#progressbar');
        const progressbarContainer = this.parent.querySelector('.progress-bar-container');
        this.loadManager.onProgress = function (url, loaded, total) {
            progressbar.value = (loaded / total) * 100;
        };
        this.loadManager.onLoad = () => {
            progressbarContainer.style.display = 'none';
            this.#animate();
        };
    }
    #set3DObject() {
        //바닥
        const planeGeometry = new THREE.PlaneGeometry(100, 100);
        const texture = this.textureLoader.load(floorTexture);
        const planeMaterial = new THREE.MeshStandardMaterial({ map: texture });
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(2, 2);
        this.plane = new THREE.Mesh(planeGeometry, planeMaterial);
        this.plane.receiveShadow = true;
        this.plane.rotation.x = -0.5 * Math.PI;
        this.plane.position.set(10, 0, 0);
        this.scene.add(this.plane);
        //오락기
        const gameMachinePositions = [
            [10, 0, 0],
            [20, 0, 0],
            [30, 0, 0],
            [40, 0, 0],
        ];
        this.gltfLoader = new GLTFLoader(this.loadManager);
        this.gltfLoader.load('./scene.gltf', (target) => {
            const gameMachine = target.scene;
            const machineCounter = 4;
            gameMachine.scale.setScalar(0.08);
            for (let machineIndex = 0; machineIndex < machineCounter; machineIndex++) {
                const copiedMachine = new THREE.Object3D();
                copiedMachine.copy(gameMachine);
                copiedMachine.traverse((e) => {
                    if (e.isMesh) {
                        e.castShadow = true;
                        switch (machineIndex) {
                            case 0:
                                e.name = 'snakeGame';
                                break;
                            case 1:
                                e.name = 'tetris';
                                break;
                            case 2:
                                e.name = 'ballGame';
                                break;
                            case 3:
                                e.name = 'gallug';
                                break;
                        }
                    }
                });
                const [x, y, z] = gameMachinePositions[machineIndex];
                copiedMachine.position.set(x, y, z);
                copiedMachine.rotation.y = Math.PI;
                this.scene.add(copiedMachine);
            }
        });
    }
    #loadCharacter() {
        this.animations = {};
        this.speed = 0;
        this.move = { forward: false, backward: false, left: false, right: false };
        this.clock = new THREE.Clock();
        const fbxLoader = new FBXLoader(this.loadManager);
        fbxLoader.load('./Ch09_nonPBR.fbx', (target) => {
            this.character = target;
            this.character.scale.setScalar(0.05);
            this.character.traverse((e) => {
                if (e.isMesh) e.castShadow = true;
            });
            this.character.position.set(10, 0, -30);
            this.scene.add(this.character);
            this.mixer = new THREE.AnimationMixer(this.character);
            const animationLoad = (name, ani) => {
                const clip = ani.animations[0];
                const action = this.mixer.clipAction(clip);
                this.animations[name] = { clip, action };
            };

            fbxLoader.load('./Walking.fbx', (ani) => animationLoad('walk', ani));
            fbxLoader.load('./Idle.fbx', (ani) => {
                animationLoad('idle', ani);
                this.animations.idle.action.play();
            });
        });
    }
    #thirdPersonCamera() {
        const calculateNextPosition = () => {
            const cameraDefaultPosition = new THREE.Vector3(0, 15, -20);
            cameraDefaultPosition.applyQuaternion(this.character.quaternion);
            cameraDefaultPosition.add(this.character.position);
            return cameraDefaultPosition;
        };
        const calculateNextLookAt = () => {
            const cameraDefaultLookat = new THREE.Vector3(0, 5, 50);
            cameraDefaultLookat.applyQuaternion(this.character.quaternion);
            cameraDefaultLookat.add(this.character.position);
            return cameraDefaultLookat;
        };
        this.cameraUpdate = () => {
            const cameraNextPosition = calculateNextPosition();
            const cameraNextLookat = calculateNextLookAt();
            this.camera.position.copy(cameraNextPosition);
            this.camera.lookAt(cameraNextLookat);
        };
    }
    #setRayCaster() {
        this.mouseLocation = new THREE.Vector2();
        this.rayCaster = new THREE.Raycaster();
    }
    #animate() {
        this.mixer.update(this.clock.getDelta());
        this.speed = 0;
        this.cameraUpdate();
        if (this.move.forward || this.move.backward) {
            this.move.forward ? (this.speed = 0.2) : (this.speed -= 0.2);
        }
        if (this.move.left) {
            this.character.rotateY(0.05);
        } else if (this.move.right) {
            this.character.rotateY(-0.05);
        }
        this.character.translateZ(this.speed);
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(() => this.#animate());
    }

    #setEvent() {
        const resizeEventCallback = (event) => {
            const { innerWidth, innerHeight } = event.target;
            this.camera.aspect = innerWidth / innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(innerWidth, innerHeight);
        };
        const clickEventCallback = (e) => {
            this.mouseLocation.x = (e.clientX / window.innerWidth) * 2 - 1;
            this.mouseLocation.y = -(e.clientY / window.innerHeight) * 2 + 1;
            this.rayCaster.setFromCamera(this.mouseLocation, this.camera);
            const intersects = this.rayCaster.intersectObjects(this.scene.children);
            for (let i = 0; i < intersects.length; i++) {
                switch (intersects[i].object.name) {
                    case 'snakeGame':
                        router.push('Snake');
                        this.clearEvent();
                        return;
                    case 'tetris':
                        router.push('Tetris');
                        this.clearEvent();
                        return;
                    case 'ballGame':
                        router.push('Ball');
                        this.clearEvent();
                        return;
                    case 'gallug':
                        router.push('Galagu');
                        this.clearEvent();
                        return;
                }
            }
        };

        const keyHandler = (e) => {
            const boolean = e.type != 'keyup';
            switch (e.key) {
                case 'ArrowLeft':
                    this.move.left = boolean;
                    break;
                case 'ArrowUp':
                    this.move.forward = boolean;
                    if (boolean) {
                        this.animations.walk.action.play();
                        break;
                    }
                    this.mixer.stopAllAction();
                    this.animations.idle.action.play();
                    break;
                case 'ArrowRight':
                    this.move.right = boolean;
                    break;
                case 'ArrowDown':
                    this.move.backward = boolean;
                    if (boolean) {
                        this.animations.walk.action.play();
                        break;
                    }
                    this.mixer.stopAllAction();
                    this.animations.idle.action.play();
                    break;
            }
        };

        this.events = [];
        const addEvent = (type, target, callback) => {
            this.events.push({ type, target, callback });
            target.addEventListener(type, callback);
        };
        addEvent('resize', window, resizeEventCallback);
        addEvent('click', document, clickEventCallback);
        addEvent('keydown', document, keyHandler);
        addEvent('keyup', document, keyHandler);
    }

    clearEvent() {
        this.events.forEach(({ type, target, callback }) => {
            target.removeEventListener(type, callback);
        });
    }
}
