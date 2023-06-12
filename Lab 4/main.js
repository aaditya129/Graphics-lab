window.onload = function() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    var rectangle = new Rectangle(100, 100, 200, 100);
    rectangle.draw(context);

    var translateButton = document.getElementById('translateButton');
    translateButton.onclick = function() {
        var translate = new Translate(100, 50);
        translate.apply(rectangle);

        context.clearRect(0, 0, canvas.width, canvas.height);
        rectangle.draw(context);
    }
}
