var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var selectNo = document.querySelector('.modal__action--negative')

// console.dir(backdrop);
console.log(selectNo);

/** Add event listener **/
// Loop through the array
for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    })
}

/** Closes modal if click NO **/
backdrop.addEventListener('click', closeModal);
selectNo.addEventListener('click', closeModal);

function closeModal() {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}