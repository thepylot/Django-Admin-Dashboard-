// message js
$('#flashMessage').hide();
$('.icazealbutton').click( function() {

$('#flashMessage').slideDown().delay(3000).slideUp();

});
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

  var enddates = [];
  var startdates = [];
  var diffdates = [];
  $('.end').each(function () {
        var endsecond = $(this).text().charAt(2);
        var endfirst =$(this).text().charAt(1);
        var dateend = endfirst + endsecond;
        return  enddates.push(Number(dateend));


    });
   $('.start').each(function enddate () {
        var startsecond = $(this).text().charAt(2);
        var startfirst =$(this).text().charAt(1);
        var datestart = startfirst + startsecond;
        return startdates.push(Number(datestart));


    });
function datediff () {
    var datediff = 0;
    for (var i = 0; i < enddates.length; i++) {
        datediff = enddates[i] - startdates[i];
        diffdates.push(Number(datediff));





    }





}
datediff();
var sumOfDiff = diffdates.reduce((a, b) => a + b, 0);

console.log(sumOfDiff);

























