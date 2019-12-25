var cn = myForm.cardNumber;
var cd = myForm.date;

for (var i in ['input']) {
    cn.addEventListener('input', formatCardCode, false);
}
function formatCardCode() {
    var cardCode = this.value.replace(/[^\d]/g, '').substring(0,16);
    cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
    this.value = cardCode;
}

for (var i in ['input', 'change', 'blur', 'keyup']) {
    cd.addEventListener('input', formatDate, false);
}
function formatDate() {
    var cardDate = this.value.replace(/[^\d]/g, '').substring(0,4);
    cardDate = cardDate != '' ? cardDate.match(/.{1,2}/g).join('/') : '';
    this.value = cardDate;
}