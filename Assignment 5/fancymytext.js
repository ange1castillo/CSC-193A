function makeBigger() {
    var textArea = document.getElementById('textInput');
    textArea.style.fontSize = '24pt';
}

function fancify() {
    var textArea = document.getElementById('textInput');
    var boringRadio = document.getElementById('boringButton');

    if (boringRadio.checked) {
        textArea.style.fontWeight = 'normal';
        textArea.style.textDecoration = 'none';
        textArea.style.color = 'black';
    } else {
        textArea.style.fontWeight = 'bold';
        textArea.style.textDecoration = 'underline';
        textArea.style.color = 'blue';
    }
}

function moo() {
    var textArea = document.getElementById('textInput');
    textArea.value = textArea.value.toUpperCase();
    textArea.value = textArea.value.replace(/(\.)(\s|$)/g, '-Moo$2');
}
