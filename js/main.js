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

// ===============================================
// ======== akkardion ========
class ItcAccordion {
	constructor(target, config) {
	  this._el = typeof target === 'string' ? document.querySelector(target) : target;
	  const defaultConfig = {
		 alwaysOpen: true
	  };
	  this._config = Object.assign(defaultConfig, config);
	  this.addEventListener();
	}
	addEventListener() {
	  this._el.addEventListener('click', (e) => {
		 const elHeader = e.target.closest('.accordion__header');
		 if (!elHeader) {
			return;
		 }
		 if (!this._config.alwaysOpen) {
			const elOpenItem = this._el.querySelector('.accordion__item_show');
			if (elOpenItem) {
			  elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('accordion__item_show') : null;
			}
		 }
		 elHeader.parentElement.classList.toggle('accordion__item_show');
	  });
	}
 }

 new ItcAccordion('#accordion-1');
// ======== akkardion / ========

new WOW().init();