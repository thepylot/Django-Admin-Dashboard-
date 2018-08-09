// message js
$('#flashMessage').hide();
$('.icazealbutton').click( function() {

$('#flashMessage').slideDown().delay(3000).slideUp();

})
// percentage table day js



function status () {
    
        if ($('td').text() == 'tesdiq olundu') {
            $('#circle').css('color', 'green');
        }
   
}
status();
