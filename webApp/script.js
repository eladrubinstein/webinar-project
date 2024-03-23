let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open')
}

//     scrolling up and down navbar

let lastScrollTop = 0; // Store the last scroll position
const navbar = document.querySelector('header'); // Select the navbar

window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  // Check if the current scroll is greater than the last scroll position (scrolling down)
  if (currentScroll > lastScrollTop) {
    navbar.classList.add('header-hidden');
  } else {
    // Scrolling up
    navbar.classList.remove('header-hidden');
  }
  // Update lastScrollTop
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);
