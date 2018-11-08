$(document).ready(function() {
    // run function on initial page load
    interactions();
    variables();
 
    // run function on resize of the window
    $(window).resize(function() {
   
    });
 
    // run function on scroll
    $(window).scroll(function() {
 
    });
});
// link to mouse events https://api.jquery.com/category/events/mouse-events/
function interactions() {
    $('#first').mouseover(function(){
        $( this ).css('cursor','crosshair');
        console.log('clicked');
    });
    $('#click').click(function(){
        $( '.hidden' ).toggleClass('pointer');
        console.log('clicked');
    });
    $('#doubleclick').dblclick(function(){
        $( this ).css('cursor','help');
        console.log('hovered');
    });
    $('#fourth').mouseover(function(){
        $( '.hidden2' ).toggleClass('pointer');
        console.log('clicked');
    });





    $('.jqHover').click(function(){
        $('.number4').toggleClass('moveITR');
        console.log('hovered');
    });
    $('.key').click(function() {
        $('h1').toggleClass('typeMove');
    });
}
 
function variables() {
    var h1H = $('h1').height();
    var wH = $(window).height();
    console.log(h1H);
}