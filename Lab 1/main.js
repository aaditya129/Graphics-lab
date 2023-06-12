window.onload = function() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    // Display the resolution of the display system
    console.log("Display resolution: " + window.innerWidth + "x" + window.innerHeight);

    // Set the fill color to the flag's color
    context.fillStyle = '#dc143c'; // Crimson for the inside of the flag

    // Draw the two triangles of the flag
    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(200, 200);
    context.lineTo(100, 200);
    context.closePath();
    context.fill();

    context.beginPath();
    context.moveTo(100, 200);
    context.lineTo(200, 300);
    context.lineTo(100, 300);
    context.closePath();
    context.fill();

    // Add the sun and moon symbols to the flag
    context.fillStyle = 'white'; // Blue for the sun and moon symbols

    context.beginPath();
    context.arc(125, 150, 25, 0, Math.PI * 2, false); // Full circle for the sun in the upper triangle
    context.fill();

    context.beginPath();
    context.arc(125, 250, 25, 0, Math.PI, false); // Half circle for the moon in the lower triangle
    context.arc(125, 250, 20, 0, Math.PI, true); // Smaller half circle to make the moon crescent shaped
    context.fill();

    // Draw the border of the flag
    context.lineWidth = 10;
    context.strokeStyle = '#003893'; // Blue for the border
    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(200, 200);
    context.lineTo(100, 200);
    context.lineTo(100, 100);
    context.moveTo(100, 200);
    context.lineTo(200, 300);
    context.lineTo(100, 300);
    context.lineTo(100, 200);
    context.stroke();
}
