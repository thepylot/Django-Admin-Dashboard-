



// message js
$('#flashMessage').hide();
$('.icazealbutton').click( function() {

$('#flashMessage').slideDown().delay(3000).slideUp();

})
// percentage table day js

// Status Color

function status () {

    $('.status').each(function() {
        if($(this).find('span').text() == 'tesdiq olundu'){
            $(this).find('.circle').css('color', 'green');
        }
        if($(this).find('span').text() == 'tesdiq olunmayib'){
            $(this).find('.circle').css('color', 'red');
        }
    });



   }



status();



