const questions = document.querySelectorAll(".accordion__question");
// const arrows = document.querySelectorAll('.charitypage__person-question-arrow');

questions.forEach( function (item) {
    item.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('active');
        this.lastElementChild.classList.toggle('active');
    })
})