export function drawEllipse(ctx, x_centre, y_centre, rx, ry) {
    let x = 0, y = ry;
    ctx.fillStyle = 'green';
    // Initial decision parameter of region 1
    let d1 = (ry * ry) - (rx * rx * ry) + (0.25 * rx * rx);
    let dx = 2 * ry * ry * x;
    let dy = 2 * rx * rx * y;
  
    // For region 1
    while (dx < dy) {
        // Print points based on 4-way symmetry
        ctx.fillRect(x + x_centre, y + y_centre, 1, 1);
        ctx.fillRect(-x + x_centre, y + y_centre, 1, 1);
        ctx.fillRect(x + x_centre, -y + y_centre, 1, 1);
        ctx.fillRect(-x + x_centre, -y + y_centre, 1, 1);

        // Checking and updating parameter value based on algorithm
        if (d1 < 0) {
            x++;
            dx = dx + (2 * ry * ry);
            d1 = d1 + dx + (ry * ry);
        } else {
            x++;
            y--;
            dx = dx + (2 * ry * ry);
            dy = dy - (2 * rx * rx);
            d1 = d1 + dx - dy + (ry * ry);
        }
    }

    // Decision parameter of region 2
    let d2 = ((ry * ry) * ((x + 0.5) * (x + 0.5))) + ((rx * rx) * ((y - 1) * (y - 1))) - (rx * rx * ry * ry);

    // Plotting points of region 2
    while (y >= 0) {
        // Printing points based on 4-way symmetry
        ctx.fillRect(x + x_centre, y + y_centre, 1, 1);
        ctx.fillRect(-x + x_centre, y + y_centre, 1, 1);
        ctx.fillRect(x + x_centre, -y + y_centre, 1, 1);
        ctx.fillRect(-x + x_centre, -y + y_centre, 1, 1);

        // Checking and updating parameter value based on algorithm
        if (d2 > 0) {
            y--;
            dy = dy - (2 * rx * rx);
            d2 = d2 + (rx * rx) - dy;
        } else {
            y--;
            x++;
            dx = dx + (2 * ry * ry);
            dy = dy - (2 * rx * rx);
            d2 = d2 + dx - dy + (rx * rx);
        }
    }
}
