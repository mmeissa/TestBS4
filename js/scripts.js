$(document).ready(function(){
     $("#mycarousel").carousel( { interval: 2000 } );
    // $("#carousel-pause").click(function(){
    //     $("#mycarousel").carousel('pause');
    // });
    // $("#carousel-play").click(function(){
    //     $("#mycarousel").carousel('cycle');
    // });

    $("#carousel-button").click(function(){
       if ($("#carousel-button").children("span").hasClass('fa-pause')) {
           $("#mycarousel").carousel('pause');
           $("#carousel-button").children("span").removeClass('fa-pause');
           $("#carousel-button").children("span").addClass('fa-play');
       }
       else if ($("#carousel-button").children("span").hasClass('fa-play')){
           $("#mycarousel").carousel('cycle');
           $("#carousel-button").children("span").removeClass('fa-play');
           $("#carousel-button").children("span").addClass('fa-pause');
       }
   });

// Task 2 show hide the modals
//I used toggle paramter instead of modal paramter so that in case the displayed modal
//dose not have a way to hide itself, clicking the button or link again will hide the modal

   $("#show-login").click(function () {
     $('#loginModal').modal('toggle');
   });

   $("#show-reserve").click(function () {
     $('#reserveform').modal('toggle');
   });


});
