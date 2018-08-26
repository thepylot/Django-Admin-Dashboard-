
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
    var donutPercent = Number($('.donut-percent').text().replace('%',''));

    donutPercent = (sumOfDiffs * 100) / 20;
    var x = document.getElementById("per1").getAttribute("stroke-dasharray").charAt(0)+document.getElementById("per1").getAttribute("stroke-dasharray").charAt(1);
    x = donutPercent;
    Number(document.getElementById("per1").getAttribute("stroke-dasharray").charAt(0)+document.getElementById("per1").getAttribute("stroke-dasharray").charAt(1));
    var y = Number(document.getElementById("per1").getAttribute("stroke-dasharray").charAt(3)+document.getElementById("per1").getAttribute("stroke-dasharray").charAt(4))
    y = 100 - donutPercent;
    var dasharray = x + ' ' +y;

    document.getElementById('per1').setAttribute('stroke-dasharray', dasharray);



     $('#flashMessage').hide();
    if (sumOfDiffs >= 20) {

       $('#flashMessage').slideDown().delay(3000).slideUp();
       donutPercent = 100;
       sumOfDiffs = 20;
       document.getElementById("counter").innerHTML = sumOfDiffs;

}

     document.getElementById("donutPercentage").innerHTML = donutPercent + '%' ;

    return sumOfDiffs;

}
sumOfDiff();

// total
function total () {

    var totalDay = Number($('#total').text());



}
total();



// donut percentage line

//console.log(y);




// donutpercent var x olacaq

//va y 100 den donut percent cxilacaq
//document get elemnt id ile inner htmlle kececek





























