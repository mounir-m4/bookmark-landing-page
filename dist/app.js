// change tabs on click
function Tabs() {
	const bindAll = () => {
		const menuElements = document.querySelectorAll('[data-tab]');
		menuElements.forEach((element) => {
			element.addEventListener('click', change, false);
		});
	};

	const clear = () => {
		const menuElements = document.querySelectorAll('[data-tab]');
		menuElements.forEach((element) => {
			element.classList.remove('active');
			const id = element.getAttribute('data-tab');
			document.getElementById(id).classList.remove('active');
		});
	};
	const change = (e) => {
		clear();
		e.target.classList.add('active');
		const id = e.currentTarget.getAttribute('data-tab');
		document.getElementById(id).classList.add('active');
	};
	bindAll();
}

// init all functions inside tab
const connectTabs = new Tabs();

//faq
const toggleFaq = document.querySelectorAll('.toggle-faq');
toggleFaq.forEach((faq) => {
	faq.addEventListener('click', () => {
		faq.classList.toggle('active');
	});
});

//validate input email
const form = document.querySelector('.form-action');
const input = document.querySelector('.form-control');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	if (validateEmail(input.value)) {
		input.parentElement.classList.remove('error');
	} else {
		input.parentElement.classList.add('error');
	}
});

//fuctions to validate inputs
const validateEmail = (email) => {
	const regex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regex.test(String(email).toLowerCase());
};

// hamburger menu
const menu = document.querySelector('.hamburger');
const btn = document.querySelector('.hamburger-btn');
const list = document.querySelector('.nav-links');
let menuOpen = false;
menu.addEventListener('click', () => {
	if (!menuOpen) {
		btn.classList.add('open');
		list.classList.remove('nav-links');
		list.classList.add('menu-mobile');
		menuOpen = true;
	} else {
		btn.classList.remove('open');
		list.classList.add('nav-links');
		list.classList.remove('menu-mobile');
		menuOpen = false;
	}
});

// When the user scrolls the page, show sticky menu
window.onscroll = () => {
	const header = document.querySelector('.main-nav');
	const sticky = header.offsetTop;
	if (window.pageYOffset > sticky) {
		header.classList.add('sticky');
	} else {
		header.classList.remove('sticky');
	}
};
