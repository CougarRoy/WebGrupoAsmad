$(window).scroll(function(event) {
  var scrollLeft = $(window).scrollLeft();
  var scrollTop = $(window).scrollTop();
 
  if(scrollTop >= 60){
    document.getElementById('navbar-asmad').style.backgroundColor='#fff';
    document.getElementById('navbar-asmad').style.paddingBottom='0';
    document.getElementById('navbar-asmad').style.paddingTop='0';
    document.getElementById('text-logo').style.color='black';
  }

 if(scrollTop < 60){
    document.getElementById('navbar-asmad').style.backgroundColor='#0000';
    document.getElementById('navbar-asmad').style.paddingBottom='1rem';
    document.getElementById('navbar-asmad').style.paddingTop='1rem';
    document.getElementById('text-logo').style.color='white';
  }

});