export default function graidentText(ctx, x, y, text, outlineColor, color) {
    ctx.strokeStyle = outlineColor;
    ctx.strokeText(text, x, y);
    const gradient = ctx.createLinearGradient(x, y - 40, ctx.measureText(text).width, y);
    gradient.addColorStop(0, 'white');
    gradient.addColorStop(1, color);
    ctx.fillStyle = gradient;
    ctx.fillText(text, x, y);
}
