function setRectangles() {

    $('.image').css('background-size', $('body').width().toString() + 'px auto');
    $('.image.two').css('background-position', '50% -' + ($('body').height() * (1 / 3)).toString() + 'px');
    $('.image.three').css('background-position', '50% -' + ($('body').height() * (2 / 3)).toString() + 'px');

    var translate1 = getTranslate('.image.one');
    var translate2 = getTranslate('.image.two');
    var translate3 = getTranslate('.image.three');

    animate('.image.one', 'left', translate1, 1050, 800);
    animate('.image.two', 'right', translate2, 1150, 900);
    animate('.image.three', 'left', translate3, 1100, 850);
}

function animate(selector, property, translate, animationTime, centerTime) {

    var initialAnimation = {};
    var finalAnimation = {};

    initialAnimation[property] = translate + 'px'
    finalAnimation[property] = '200%';

    $(selector).animate(initialAnimation, animationTime, 'easeOutQuint', function (e) {
        var self = $(this);
        self
            .delay(centerTime)
            .animate(finalAnimation, animationTime, 'easeInQuint', function (e) { })
    })
}

function getTranslate(selector) {
    var offset = $(selector).offset();
    var width = $(selector).width();
    var centerX = offset.left + width / 2;

    var centerWindow = ($('body').width() / 2);

    return centerWindow - (width / 2);
}

$(document).ready(setRectangles);
$(window).resize(setRectangles);