const burger = document.querySelector('.header__burger');
burger.addEventListener('click',function(){
	let header_all_active_class = [
		$('.header__burger'),
		$('.header__menu'),
		$('body'),
	]
	header_all_active_class.forEach(addActiveClass =>{
		addActiveClass.toggleClass('active');
	})
})