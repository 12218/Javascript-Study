var btn = document.querySelector('.block');
var angel = 30;
btn.addEventListener('click', function(){
    // console.log('button');
    // console.log(btn);
    btn.style.transform = 'translate(-50%, -50%) rotate(' + angel + 'deg)';
    if (angel == 330) {
        angel = 0;
    }
    else {
        angel += 30;
    }
});