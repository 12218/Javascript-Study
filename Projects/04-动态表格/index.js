var items = document.querySelectorAll('.content');

for (let i = 0; i < items.length; i++) {
    let delete_button = items[i].querySelectorAll('td')[2];
    delete_button.style.cursor = 'pointer';
    console.log(delete_button);
    delete_button.onclick = function() {
        delete_button.parentNode.remove();
    }
}