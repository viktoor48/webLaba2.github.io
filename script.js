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

/*Валидация формы входа начало*/
const enterForm = document.getElementById('form-enter-id');
const enterFormLogin = enterForm.userName;
const enterFormPassword = enterForm.userPassword;

enterForm.addEventListener('submit', function () {
    console.log('Форма отправляется...');
    let error = 0;
    //Проверяем поля и если есть ошибки отменяем отправку
    if (!enterFormLogin.value){
        console.log('Поле username не заполнено');
        error++;
        event.preventDefault();
    }
    if (!enterFormPassword.value){
        console.log('Поле userPassword не заполнено');
        error++;
        event.preventDefault();
    }
    if (error === 0)
    {
        console.log('Логин:',enterFormLogin.value);
        console.log('Пароль',enterFormPassword.value);
        console.log('Форма успешно отправлена');
        enterForm.reset();
        /*event.preventDefault();*///чтобы было видно консоль  нужно отменить очистку консоли потом
    }
});
/*Валидация формы входа конец*/

const mainForm = document.forms[0];

const mainFormInput = mainForm.name;
console.log(mainFormInput);
/*Валидация формы регистрации начало*/

/*const form = document.getElementById('form-registration-id');
form.onsubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData(form);
    /!*let response = await fetch('#', {
        method: 'POST',
        body: new FormData(form)
    });
*!/

    alert(result.message);
};*/
/*
document.addEventListener('DOMContentLoaded', function ()
{
    const form = document.getElementById('form-registration-id');
    form.addEventListener('submit', formSend);

    async function formSend(e){
        e.preventDefault();
        let error = formValidate(form);

        let formData = new FormData(form);
        formData.append('image', formImage.files[0]);

        if (error ===0){
            form.classList.add('_sending');
            let response = await fetch('sendmail.php',{
                method: 'POST',
                body: formData
            });
            if (response.ok){
                let result = await response.json();
                alert(result.message);
                formPreview.innerHTML = '';
                form.reset();
                form.classList.remove('_sending');
            }else {
                alert('Ошибка');
                form.classList.remove('_sending');
            }
        }else {
            alert('Заполните обязательные поля');
        }
    }

    function formValidate(form){
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++)
        {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')){
                if (emailTest(input)){
                    formAddError(input);
                    error++;
                }
            }else if (input.getAttribute("type") === "checkbox" && input.checked === false){
                formAddError(input);
                error++;
            }else {
                if (input.value === ''){
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }

    function formAddError(input){
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input){
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    //Функция теста email
    function emailTest(input){
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});
*/
/*Валидация формы регистрации конец*/

/*
var login_btn = document.getElementsByClassName('login');
var registration_btn = document.getElementsByClassName('registration');

var form = document.getElementsByClassName('form');
var popup_inner = document.getElementsByClassName('popups_inner');

registration_btn[0].onclick = function (){
    form[0].classList.add('open');
    popup_inner[0].classList.add('open');
}*/
