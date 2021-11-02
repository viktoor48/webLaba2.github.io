"use strict"

$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.header_link.registration').click(function(event) {
        $('#popup_reg, .form_registration').addClass('open');
        $('body').addClass('lock');
    });
    $('.close_popup').click(function () {
        $('#popup_reg, .form_registration').removeClass('open');
        $('body').removeClass('lock');
    });

    $('.header_link.enter').click(function(event) {
        $('#popup_enter, .form_enter').addClass('open');
        $('body').addClass('lock');
    });
    $('.close_popup').click(function () {
        $('#popup_enter, .form_enter').removeClass('open');
        $('body').removeClass('lock');
    });
});

/*
var login_btn = document.getElementsByClassName('login');
var registration_btn = document.getElementsByClassName('registration');

var form = document.getElementsByClassName('form');
var popup_inner = document.getElementsByClassName('popups_inner');

registration_btn[0].onclick = function (){
    form[0].classList.add('open');
    popup_inner[0].classList.add('open');
}*/
