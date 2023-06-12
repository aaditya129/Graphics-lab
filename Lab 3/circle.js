export function drawCircle(ctx, x_centre, y_centre, r) {
    let x = r, y = 0;
    ctx.fillStyle = 'red';
    // Printing the initial point on the axes after translation
    ctx.fillRect(x + x_centre, y + y_centre, 1, 1);

    // When radius is zero, only a single point will be printed
    if (r > 0) {
        ctx.fillRect(x + x_centre, -y + y_centre, 1, 1);
        ctx.fillRect(y + x_centre, x + y_centre, 1, 1);
        ctx.fillRect(-y + x_centre, x + y_centre, 1, 1);
    }
  
    let P = 1 - r;
    while (x > y) {
        y++;
        
        // Mid-point inside or on the perimeter
        if (P <= 0)
            P = P + 2*y + 1;
        // Mid-point outside the perimeter
        else {
            x--;
            P = P + 2*y - 2*x + 1;
        }
        
        // All the perimeter points have already been printed
        if (x < y)
            break;
        
        ctx.fillRect(x + x_centre, y + y_centre, 1, 1);
        ctx.fillRect(-x + x_centre, y + y_centre, 1, 1);
        ctx.fillRect(x + x_centre, -y + y_centre, 1, 1);
        ctx.fillRect(-x + x_centre, -y + y_centre, 1, 1);
        
        // Only print if not at the same point
        if (x != y) {
            ctx.fillRect(y + x_centre, x + y_centre, 1, 1);
            ctx.fillRect(-y + x_centre, x + y_centre, 1, 1);
            ctx.fillRect(y + x_centre, -x + y_centre, 1, 1);
            ctx.fillRect(-y + x_centre, -x + y_centre, 1, 1);
        }
    }
}
