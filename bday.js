var countDownDate = new Date("nov 4, 2021 00:00:01").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;
if (distance <= 0) {
  clearInterval(x);
  $('#modal').modal('show');
  $('.fade').css('animation-fill-mode','backwards')
  $('.time').css('display','none');
  $('.bday').css('display','block');
  $('.m').css('display','flex');
  $('.m').css('margin','1.6rem auto');
  $('.heart').css('margin','.5rem auto');
  $('.heart').css('margin-bottom','2.3rem');
  $('.photosection').css('display','block');
  $(window).scroll(function(){
    var scrl=$(this).scrollTop();
    if(scrl>2){
      $('.toy-train').css({
        'transform':'translate(0,'+scrl/1.17+'%) scale(1.3)'
      });
    }
   if(scrl>$('.birthday-card').offset().top-($(window).height()/1.2))
   {
     $('.birthday-card').css({
       'transform':'translate(0,'+scrl/16+'%)'
     });
     $('.caketxt').css({
       'transform':'translate(0,'+scrl/13+'%)'
     });
   }
   if(scrl>$('.textfrperson').offset().top-($(window).height()/.7))
   {
     $('.p').addClass('trans-in');
   }
  })
}
}, 1000);
function playsong(){
    var audio=new Audio('hbd_bbich.mp3');
    audio.play();
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
$('body').mousemove(
  function myFunction() {
  var div = document.getElementById("lbubble");
  var x= (event.clientX*100/window.innerWidth)/1.2+"%";
  var y= (event.clientY*100/window.innerHeight)/1.4+"%";
  document.getElementById('lefteye').style.left=x;
  document.getElementById('lefteye').style.transform='translate(-'+x+')';
  var div = document.getElementById("rbubble");
  document.getElementById('righteye').style.left=x;
  document.getElementById('righteye').style.transform='translate(-'+x+')';
}
);
var cnt=window.localStorage.getItem('count');
if(cnt>20)
{
  $('.lbubble,.rbubble').css('top','58px');
  $('.mouth').addClass('mouth1');
  $('.face-text').html('hey papaa niku m paniledha <br> nannu chustu kurchunnav');
}
