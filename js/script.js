$(function(){

     //Close mobile nav on link click
     

     var navMobile = $('.navbar-collapse');

     $('.navbar-collapse').on('click', 'a', null, function () {
         $('.navbar-collapse').collapse('hide');
     })
    
});