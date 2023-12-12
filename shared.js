var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var selectNo = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector('.main-nav__item--cta');

// console.dir(backdrop.style['background-image']);
// console.log(selectNo);


/** Add event listener **/
// Loop through the array
for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // modal.className = "open"; // This will ovewrite the complete class list
        modal.classList.add('open');
        backdrop.style.display = "block";
        setTimeout(function () {
            backdrop.classList.add("open");
        }, 10)
    })
}

/** Closes modal if click NO **/
backdrop.addEventListener('click', function () {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});

if (selectNo) {
    selectNo.addEventListener('click', closeModal);
}


/** Toggle btn event listener **/
toggleButton.addEventListener('click', function () {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.style.display = "block";
    setTimeout(function () {
        backdrop.classList.add("open");
    }, 10)
});


/****** Functions *****/
function closeModal() {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove("open");
    setTimeout(function () {
        backdrop.style.display = "none";
    }, 200)
}