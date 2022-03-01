function send() {
    var input_box = document.getElementById('text01');
    var button = document.querySelector('button');
    button.addEventListener('click', function() {
        input_box.value = '';
        var times = 5;
        var timer = window.setInterval(function() {
            button.innerHTML = 'Please wait for ' + times.toString() + ' seconds';
            button.disabled = true;
            if (times == 0) {
                window.clearInterval(timer);
                button.innerHTML = 'Click Me';
                button.disabled = false;
            }
            times -= 1;
        }, 1000);
    })
}

send();