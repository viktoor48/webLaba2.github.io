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

            if (input.classList.contains('_email')){
                if (emailTest(input)){
                    formAddError(input);
                    error++;
                }
            }else if (input.getAttribute("type") === "checkbox" && input.checked === false){
                formAddError(input);
                error++;
            }else if (input.value === ''){
                    formAddError(input);
                    error++;
            }else if (input.classList.contains('_phone')){
                if (phoneTest(input)){
                    formAddError(input);
                    alert('Телефон должен соответствовать данному шаблону +79192569330');
                    error++;
                }
            }else if (input.classList.contains('name')){
                if (nameTest(input)){
                    formAddError(input);
                    alert('Имя должно содержать только кириллицу');
                    error++;
                }
            }else  if (input.classList.contains('_pass')){
                if (passwordTest(input)){
                    formAddError(input);
                    alert('Пароль допускает только от 6 до 16 символов. Также должен содержать по ' +
                        'крайней мере одной цифры, заглавной или строчной буквы и по крайней ' +
                        'мере одного специального символа (символов, отличных от букв и цифр).');
                    error++;
                }
            }
            if (input.classList.contains('_pass')){
                if (input.value !== formReq[index+1].value){
                    formAddError(input);
                    alert('Пароли должны совпадать');
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
            let response = await fetch('https://httpbin.org/post',{
                method: 'POST',
                body: formData
            });
            if (response.ok){
                let result = await response.json();
                alert(result.message);
                console.log(result);
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
    //Функция теста пароля
    function passwordTest(input){
        return !/^(?=.*\d)(?=.*?[a-zA-Z])(?=.*?[\W_]).{6,16}$/.test(input.value);
    }
    //Функция теста телефона
    function phoneTest(input){
        return !/^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/.test(input.value);
    }
    //Функция теста имени
    function nameTest(input){
        return !/[а-яА-Я]{3,30}/.test(input.value);
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
