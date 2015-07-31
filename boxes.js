$( document ).ready(function() {
// alert( "Ready for DOM manipulation!" );

// // Find the secretBox on the page. Set the background color to white. Add an h1 tag that says, "secret box!"
// $("#secretBox").append('<h1>Secret Box!</h1>').css({"color" :"black", "background-color":"white"});

// // Find all child divs of the first row. Set the class for each div to boxType3.


// Make the last box in the last row disappear.
$(".boxType1:eq(5)").css("visibility", "hidden");

// // Change all red boxes to white.
// $(".boxType1").css("background-color", "white");

// // Get the first two divs in the second row. Take away all styling from the divs.
// $(".boxType2:eq(1)").removeAttr("style").css("background-color", "rgb(255,255,153)");

// $(".boxType3:eq(1)").removeAttr("style").css("background-color", "rgb(255,255,153)");

// // Get all divs inside the container that are not row divs and are not the secret box div. Set the width of the divs to 2 pixels.
// $('div:not(#container, .row, #secretBox)').css("width", "2px");

// // Add an on click handler to the container div. Console log the x and y position of the click.
$('#container').on("click", function(e){
  console.log(e.pageX + ' , ' + e.pageY);
  });

// // Add links inside all red box divs that take the user to galvanize. Then add an on click handler that alerts the user that you can never leave the page. Make sure the user won't leave the page after the alert!
// $('.boxType1').append('<a href ="www.galvanize.com">Galvanize</a>')

// $('.boxType1').on("click", function(e){
//   e.preventDefault();
//   alert("You can never leave this page!");});

// // For all box divs, add a click handler that adds an image of a cute puppy to the box. If the image is clicked again, remove the cute puppy.

$('.box').on("click", function(){
  if($(this).html() === ("")){
    $(this).html("<img src = 'https://31.media.tumblr.com/avatar_195a5541e46f_128.png'/>");}
    else{ $(this).html("");}
  });

// // Write a click handler on the conatainer div. The click handler should turn the container background to black and the background of the original div that was clicked to white. If the user original div that was clicked happened to be the container div, change the background of the container div to lime green. You should not use any selectors for this exercise. You can do it completely with what is given to you in the event callback.

$("#container").click(function(event) {
  if($("#container").is(event.target)) {
     $("#container").css("background", "limegreen");
  } else {
    $("#container").css("background", "black");
    $(event.target).css("background", "white");
  }
});

});
