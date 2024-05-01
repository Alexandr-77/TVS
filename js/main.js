// 
// ================================================== 
let burger = document.querySelector('.burger');
let nav = document.querySelector('.header__mobil');
let liHeader = document.querySelectorAll('.header__list-li');

burger.addEventListener('click', rotateBurger); 

for(let i = 0; i < liHeader.length; i++ ) {
	if (window.innerWidth < 990 ) {
		liHeader[i].addEventListener('click', rotateBurger);
	}
}


function rotateBurger() { 
  burger.classList.toggle('burger-active');

  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}


// ======== swiper ========

const swiper = new Swiper('.swiper', {
	// Optional parameters
	autoplay: 500,
	slidesPerView: 2.8,
	spaceBetween: 100,
	centeredSlides: true, 
	loop: true,
	// If we need pagination
	pagination: {
	el: '.swiper-pagination',
	},
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},

});
// ======== swiper / ========



// ========= slyder slick ==========
$('.slyder__box').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	infinite: true,
	arrow: true,
	dots: true,
	autoplay: true,
	autoplaySpeed: 3000,
	responsive: [
		{
		  breakpoint: 1400,
		  settings: {
			 slidesToShow: 2,
			 slidesToScroll: 1,
			 infinite: true,
			 dots: true
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			 slidesToShow: 1,
			 slidesToScroll: 1
		  }
		}
	 ]
 });


// отправка формы =============>
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо. Ваша заявка была отправлена.");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
// ============================
// ===============================================

new WOW().init();