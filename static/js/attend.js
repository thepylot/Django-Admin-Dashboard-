
alert('hey');
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
// select td elements and dates parse string to int
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

   // End dates - strat dates
function datediff () {
    var datediff = 0;
    for (var i = 0; i < enddates.length; i++) {
        datediff = enddates[i] - startdates[i];
        diffdates.push(Number(datediff));





    }





}
datediff();

//sum of elemts in diff array
function sumOfDiff () {
    var sumOfDiffs = diffdates.reduce((a, b) => a + b, 0);
    document.getElementById("counter").innerHTML = sumOfDiffs;



    return sumOfDiffs;

}
sumOfDiff();

// total
function total () {

    var totalDay = $('#total').text();
    console.log(totalDay);
}
























