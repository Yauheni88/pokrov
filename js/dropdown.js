//------------ 1 dropdownmenu -----------------//
const dropBtnFirst = document.querySelector('[data-drop="drop-1"]');
const arrow1 = document.querySelector('.header__menu-arrow1');
const dropDownContent1 = document.getElementById('drop-1');

const toggleDropdown = function () {
    dropDownContent1.classList.toggle("show");
    arrow1.classList.toggle("arrow");
  };

  dropBtnFirst.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});

document.documentElement.addEventListener("click", function () {
    if (dropDownContent1.classList.contains("show")) {
      toggleDropdown();
    }
  });


//------------ 2 dropdownmenu -----------------//
const dropBtnSecond = document.querySelector('[data-drop="drop-2"]');
const arrow2 = document.querySelector('.header__menu-arrow2');
const dropDownContent2 = document.getElementById('drop-2');

const toggleDropdown2 = function () {
    dropDownContent2.classList.toggle("show");
    arrow2.classList.toggle("arrow");
  };

  dropBtnSecond.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown2();
});

document.documentElement.addEventListener("click", function () {
    if (dropDownContent2.classList.contains("show")) {
      toggleDropdown2();
    }
  });