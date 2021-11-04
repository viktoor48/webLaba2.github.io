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

document.addEventListener('DOMContentLoaded', function ()
{
    const form_registration = document.getElementById('form-registration-id');
    form_registration.addEventListener('submit', formSendReg);

    /*Валидация формы регистрации начало*/
    async function formSendReg(e){
        e.preventDefault();
        let error = formValidate(form_registration);
        let formData = new FormData(form_registration);

        if (error === 0){
            /*form_registration.classList.add('_sending');*/
            console.log(form_registration.name.value);
            console.log(form_registration.email.value);
            console.log(form_registration.userPhone.value);
            console.log(form_registration.userPass.value);
            console.log(form_registration.userPassRepeat.value);
            let response = await fetch('https://httpbin.org/post',{
                method: 'POST',
                body: formData
            });
            if (response.ok){
                let result = await response.json();
                alert(result.message);
                console.log(result);
                form_registration.reset();
                $('#popup_reg, .form_registration').removeClass('open');
                $('body').removeClass('lock');
                /*form_registration.classList.remove('_sending');*/
            }else {
                alert('Ошибка');
                /*form_registration.classList.remove('_sending');*/
            }
        }else {
            alert('Заполните обязательные поля');
        }
    }
    /*Валидация формы регистрации конец*/

    function formValidate(form){
        let error = 0;
        let formReq = form.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++)
        {
            const input = formReq[index];
            formRemoveError(input);

            //нужно осуществить проверку паролей
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
    /*Валидация формы входа начало*/
    const form_enter = document.getElementById('form-enter-id');
    form_enter.addEventListener('submit',form_send_enter);

    async function form_send_enter(e) {
        e.preventDefault();
        let error = formValidate(form_enter);
        let formData = new FormData(form_enter);

        if (error === 0){
            /*form_enter.classList.add('_sending');*/
            console.log(form_enter.userName.value);
            console.log(form_enter.userPassword.value);
            let response = await fetch('https://httpbin.org/post',{
                method: 'POST',
                body: formData
            });
            if (response.ok){
                let result = await response.json();
                alert(result.message);
                console.log(result.value);
                form_enter.reset();
                $('#popup_enter, .form_enter').removeClass('open');
                $('body').removeClass('lock');
                /*form_enter.classList.remove('_sending');*/
            }else {
                alert('Ошибка');
                /*form_enter.classList.remove('_sending');*/
            }
        }else {
            alert('Заполните обязательные поля');
        }
    }
    /*Валидация формы входа конец*/

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

/*Валидация формы входа начало*/
/*const enterForm = document.getElementById('form-enter-id');
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
        /!*event.preventDefault();*!///чтобы было видно консоль  нужно отменить очистку консоли потом
    }
});*/
