/*
  Assignment to create a site for Egyptian party
*/



// Changes happen to Navigation
  // Open Nav
  $("#open-nav > span").click(function () {
    $("#navigation").animate({ left: "0%" }, 1000);
    $("#navigation").css('position' , 'fixed');
  });

  // Close Nav
  $("#close-icon").click(function () {
    $("#navigation").animate({ left: "-19%" }, 1000);
    $("#navigation").css('position' , 'relative');
  });



// Start Details Sections Toggle
  // Toggle Sections
  $("#details p:first").css("display", "block");
  $("#details h3").click(function () {
    $(this).next().slideToggle(500);
    $("#details p").not($(this).next()).slideUp(500);
  });



// Display the difference between the current and previous time (the invitation)
function displayDifference() {
  
  // Start Date
  let eventDate = new Date(2018, 12, 17),
    currentDate = new Date();

  // Start Time
  let eventTime = eventDate.getTime(),
    currentTime = currentDate.getTime();

  // Calc Time
  let calc = currentTime - eventTime;

  let secs  = Math.floor(calc / 1000),
      mins  = Math.floor(secs / 60),
      hours = Math.floor(mins / 60),
      days  = Math.floor(hours / 24) - 30;

  hours %= 24;
  mins  %= 60;
  secs  %= 60;

  // Catch ELE
  let getDays  = document.getElementById("getDays"),
      getHours = document.getElementById("getHours"),
      getMins  = document.getElementById("getMins"),
      getSecs  = document.getElementById("getSecs");

  getDays.innerHTML  = days + " D";
  getHours.innerHTML = hours + " h";
  getMins.innerHTML  = mins + " m";
  getSecs.innerHTML  = secs + " s";
  // console.log(days + ":" + hours + ":" + mins + ":" + secs);
}
setInterval(displayDifference, 1000);



// var int = 100;

// $("textarea").keydown(function(){
//   var charLength = $(this).val().Length,
//       calcLength = int - charLength;
      
//   if(calcLength <= 0)
//   {
//     // var hintArea = Number(document.getElementById('hint').value);
//     // hintArea.innerHTML = "You have exceeded the character limit";
//     $("#hint").html("<span>You have exceeded the character limit</span>")
//   }
//   else
//   {
//     // var hintArea = Number(document.getElementById('hint').value);
//     // hintArea.innerHTML = calcLength;
//     $("#hint").html(calcLength);
//   }
// });



var myText = document.getElementById("myText"),
    mySpan = document.getElementById("descArea");

$(function () {
  var maxText = $("textarea").attr("maxlength");
  $("textarea").keyup(function () {
    var textLength = $(this).val().length,
      remChars = maxText - textLength;

    $(mySpan).html(remChars);

    if ($(mySpan).html() <= 0) {
      $(mySpan).html("You have exceeded the allowed number of characters");
    }
  });
});





let detailsOffset     = $('#details').offset().top,
    displayTimeOffset = $('#displayTime').offset().top,
    joinOffset        = $('#join').offset().top;

$("#links li:nth-child(1)").click(function(){
  $("html,body").animate({scrollTop:0} , 1000);
  console.log("Home")
});


$("#links li:nth-child(2)").click(function(){
  $("html,body").animate({scrollTop:displayTimeOffset} , 1000);
  console.log('Event Time');
});


$("#links li:nth-child(3)").click(function(){
  $("html,body").animate({scrollTop:detailsOffset} , 1000)
  console.log('Details');
});


$("#links li:nth-child(4)").click(function(){
  $("html,body").animate({scrollTop:joinOffset} , 1000);
  console.log('JOIN');
});


$(window).scroll(function(){
  let wScroll = $(window).scrollTop();
  // console.log(wScroll);
  if(wScroll > detailsOffset){
    $("#btnUp").fadeIn();
  }
  else{
    $("#btnUp").fadeOut();
  }
});

$("#btnUp").click(()=>{
  $("html,body").animate({scrollTop:0} , 1000)
})



























