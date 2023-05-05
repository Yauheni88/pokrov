const tabs = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabs.forEach(function (item) {
    item.addEventListener('click', function () {
        tabs.forEach(function (tab) {
            tab.classList.remove('active');
        })
        this.classList.add('active');

        const contentBox = document.querySelector('#' + this.dataset.tab);
        
        contentBoxes.forEach(function (item) {
            item.classList.add('hidden');
            contentBox.classList.remove('hidden');
            contentBox.classList.add('active');
        })
    })
})