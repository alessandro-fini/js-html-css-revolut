$(document).ready(function(){

    $('.with-dropdown').hover(function(){

        $(this).children('.dropdown-menu').toggleClass('active');

        $(this).find('.ico-down').toggle();

        $(this).find('.ico-up').toggle();

        $(this).children('a').toggleClass('black');

    });

});
