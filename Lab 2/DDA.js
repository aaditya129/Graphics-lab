export function drawLineDDA(ctx, x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    let steps = Math.abs(dx) > Math.abs(dy) ? Math.abs(dx) : Math.abs(dy);

    let Xinc = dx / steps;
    let Yinc = dy / steps;

    let X = x1;
    let Y = y1;

    for (let i = 0; i <= steps; i++) {
        ctx.fillRect(Math.round(X), Math.round(Y), 1, 1); // fill in the pixel at (X, Y)
        X += Xinc;
        Y += Yinc;
    }
}
