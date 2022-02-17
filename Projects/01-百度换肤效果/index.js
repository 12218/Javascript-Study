var imgs = document.querySelector('.content').querySelectorAll('div');
for (var i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function() {
        console.log(i);
    }
}

var images = document.querySelector('.content');