function toggleItem(element) {
    var items = document.querySelectorAll('.item');
    var container = document.querySelector('.accordion-container');

    var activeIndex = -1;
    items.forEach(function(item, index) {
        if (item === element) {
            activeIndex = index;
        }
        item.classList.toggle('active', item === element);
    });

    if (activeIndex > 1) {
        container.style.transform = 'translateX(-' + (activeIndex - 1) * 100 + 'px)';
    } else {
        container.style.transform = 'translateX(0)';
    }
}
