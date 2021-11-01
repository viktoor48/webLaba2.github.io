"use strict"

$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

var login_btn = document.getElementsByClassName('login');
var registration_btn = document.getElementsByClassName('registration');

var form = document.getElementsByClassName('form');
var popup_inner = document.getElementsByClassName('popups_inner');

registration_btn[0].onclick = function (){
    form[0].classList.add('open');
    popup_inner[0].classList.add('open');
}