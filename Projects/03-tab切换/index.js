var tabs = document.querySelector('.tab_list').querySelectorAll('li');
var contents = document.querySelector('.tab_content').querySelectorAll('div');
for (let i = 0; i < tabs.length; i++) {
    if (tabs[i].getAttribute('class') != 'current') {
        contents[i].style.display = 'none';
    }
}

for (let i = 0; i < tabs.length; i++) {
    tabs[i].onclick = function() {
        for (let j = 0; j < tabs.length; j++) {
            tabs[j].removeAttribute('class');
            contents[j].style.display = 'none';
        }
        tabs[i].setAttribute('class', 'current');
        contents[i].style.display = 'block';
    }
}