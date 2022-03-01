var seconds = window.prompt('Please enter a num: ');
// var seconds = 123;

var timer = window.setInterval(count_down, 1000);

function count_down() {

    if (seconds == 0) {
        window.clearInterval(timer);
    }

    let a = seconds % 10;
    let b = parseInt(seconds / 10) % 10;
    let c = parseInt(seconds / 100) % 10;

    console.log(a, b, c)

    var num_blocks = document.querySelector('.clock').querySelectorAll('div');

    num_blocks[0].innerHTML = c;
    num_blocks[1].innerHTML = b;
    num_blocks[2].innerHTML = a;

    seconds -= 1;
}

