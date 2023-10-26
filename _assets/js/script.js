
var menuMobile = document.querySelector('#navbarNavDropdown');
function handleMenuMobile() {
  menuMobile.addEventListener('click', function () {
    this.classList.toggle('.collapse');
  })
};

