// Page Header Animations

var $homeHeroLabel = $('.page-header .label'),
    $homeHeroTitle = $('.page-header .title'),
    $homeHeroText = $('.page-header .text'),
    $homeHeroImg1 = $('.page-header .image-container li:first-child'),
    $homeHeroImg2 = $('.page-header .image-container li:nth-child(2)'),
    $homeHeroImg3 = $('.page-header .image-container li:nth-child(3)'),
    $homeHeroImg4 = $('.page-header .image-container li:last-child'),
    activeClass = 'is-visible';

var itemIsVisible = function(item, time) {
  setTimeout(function() {
    item.addClass(activeClass);
  }, time);
};

itemIsVisible($homeHeroLabel, 1750);
itemIsVisible($homeHeroTitle, 2000);
itemIsVisible($homeHeroText, 2250);
itemIsVisible($homeHeroImg1, 1000);
itemIsVisible($homeHeroImg2, 1250);
itemIsVisible($homeHeroImg3, 1500);
itemIsVisible($homeHeroImg4, 1750);
