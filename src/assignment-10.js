window.addEventListener('load', (event) => {
    $('.p').text("I changed this text and css styles with jQuery!!");
    $('.p').css({
        'color': 'blue',
        'font-size': '2em'
    });

    $('.hide').css({ 'display': 'none' });
    $('.hide').css({ 'display': 'block' });
    $('.faded').css({ 'display': 'none '});
    $('.faded').fadeIn(3000);
    $('.faded').fadeOut(3000);
    $('.toggle').css({ 'display': 'none' });
    $('.toggle').toggle();
    $('.remove').removeClass('remove');
    $('.add').addClass('hello');
    $('.change-attribute').attr('href', 'https://www.wikipedia.org/');
    $('.animate').animate({
        opacity: 0.5,
        width: '300px'
    }, 3000, () => {
        console.log('Completed animation (Callback function)');
    });
    $('.animate-2').animate({ left: '+=300px' }, 3000);
    $('#accordion').accordion();
    $('#slider').slider();
    $('#datepicker').datepicker();
});