



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
  var enddates = [];
  var startdates = [];
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


var sum = 0;
for(var i=0; i< enddates.length; i++) {
    sum = enddates[i]-startdates[i];
    console.log(sum);
}






