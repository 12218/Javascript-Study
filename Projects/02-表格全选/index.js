console.log('123');

var checkbox_all = document.querySelector('.ck-all');
var checkboxs = document.querySelectorAll('.checkbox-items');
checkbox_all.onclick = function() {
    if (checkbox_all.checked) {
        for (let i = 0; i < checkboxs.length; i++) {
            checkboxs[i].checked = true;
        }
    }
    else {
        for (let i = 0; i < checkboxs.length; i++) {
            checkboxs[i].checked = false;
        }
    }
}