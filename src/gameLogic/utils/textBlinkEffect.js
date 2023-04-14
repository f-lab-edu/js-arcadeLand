export default function (ctx, text, fontsize, color, x, y) {
    ctx.font = `bold ${fontsize}px VT323`;
    let blinkFlag = false;
    const drawBlinkIntervalId = setInterval(() => {
        if (!blinkFlag) {
            ctx.strokeStyle = 'black';
            ctx.strokeText(text, x, y);
            console.log(color);
            ctx.fillStyle = color;
            ctx.fillText(text, x, y);
            blinkFlag = true;
        }
    }, 400);
    const removeBlinkIntervalId = setInterval(() => {
        blinkFlag = false;
        ctx.clearRect(x, y - fontsize, ctx.measureText(text).width, fontsize + fontsize * 0.2);
    }, 800);
    return [drawBlinkIntervalId, removeBlinkIntervalId];
}
