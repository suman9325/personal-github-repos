function showHide(showDiv, hideDiv){
    $(showDiv).show();
    $(hideDiv).hide();
    $(showDiv).find('input[type=text]').focus();
}