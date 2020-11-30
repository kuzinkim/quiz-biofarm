'use strict';

let divs = document.querySelectorAll('.quiz-content'),
    i = 0,
    t = divs.length,
    max = 0,
    test, test2, btnOver = 0,
    w, z, scheckedId = 1,
    radioId = 1,
    elemCheck = 0;
let num = 1,
    nubVal = "0" + num,
    quest = "6 ВОПРОСОВ";

$('span#namberID').text(nubVal);
$('span#presentSectionQuestion').text(quest);

let btnCont = document.querySelector('.btnCont');

btnCont.addEventListener('click', function () {
    if (btnOver == 1) {
        switchScreen();
    }
});

function print(i, i_post, num, quest) {
    test = divs[i];
    test2 = divs[i_post];
    $(test).fadeOut();
    $(test2).delay(400).fadeIn(500);
    nubVal = "0" + num;
    $('span#namberID').text(nubVal);
    $('span#presentSectionQuestion').text(quest);
}

function buttonOnAndOff(loginStat) {
    loginStat == 1 ? (
            $("#onward").removeAttr("disabled"), $("#onward").css('cursor', 'pointer'), btnOver = 1, $(".btnCont").css('cursor', 'pointer')) :
        ($("#onward").attr("disabled", "disabled"), $("#onward").css('cursor', 'not-allowed'), btnOver = 0, $(".btnCont").css('cursor', 'not-allowed'));
}

function showCheckBox(nameShow, nameCheckbox) {
    var checkboxes = document.getElementsByClassName(nameShow);
    var checkboxesChecked = []; // можно в массиве их хранить, если нужно использовать
    for (var index = 0; index < checkboxes.length; index++) {
        $(checkboxes).prop('disabled', false);

        if (checkboxes[index].checked) {
            checkboxesChecked.push(checkboxes[index].value); // положим в массив выбранный
            $(nameCheckbox).val(checkboxesChecked);
        }
    }
}

function switchScreen() {
    i >= max ? (buttonOnAndOff(0), max = i) : buttonOnAndOff(1);
    switch (i) {
        case 0:
            showCheckBox('BtnOneShowOne', answerOne);
            quest = "5 ВОПРОСОВ";
            break;
        case 1:
            showCheckBox('BtnOneShowTwo', answerTwo);
            quest = "4 ВОПРОСА";
            $(".present-section-img-1").css('display', 'none');
            break;
        case 2:
            showCheckBox('BtnOneShowThree', answerThree);
            quest = "3 ВОПРОСА";

            break;
        case 3:
            showCheckBox('BtnOneShowFour', answerFour);
            quest = "2 ВОПРОСА";
            $(".present-section-img-2").css('display', 'none');
            break;
        case 4:
            showCheckBox('BtnOneShowFive', answerFive);
            quest = "1 ВОПРОС";
            break;
        case 5:
            let valSix = document.getElementById("userAnswerSix").value;
            $("#answerSix").val(valSix);
            $(".present-section-img-3").css('display', 'none');
            break;
        default:
            break;
    }
    if (divs[i + 1] != divs[t - 1]) {
        w = i + 1;
        num++;
        print(i, w, num, quest);
        i++;
        back.style.display = "block";
        scheckedId = 1,
            radioId = 1;
    } else {
        w = i + 1;
        num++;
        print(i, w, num, quest);
        //$('#add_to_cart').click();
        navBtnAll.style.display = "none";
        presentSectionTitle.style.display = "none";
        namberHeader.style.display = "none";
        presentSectionTitle2.style.display = "block";
    }
}

function selectCheckboxText(obj, check, radio_name) {
    if ($("#" + check).prop('checked') == false) {
        document.getElementById(radio_name).value = '';
    }
    if ($(obj).prop('checked') == true) {
        if (scheckedId == 1 || scheckedId == obj.id) {
            scheckedId = obj.id;
            $(obj).prop('disabled', true);
            setTimeout(() => {
                switchScreen();
                buttonOnAndOff(0);
            }, 600);
        } else if (scheckedId != obj.id) {
            scheckedId = obj.id;
        }
    }
}

function pageRadioOne(c) {
    if (document.querySelector('input[type="checkbox"]:checked')) {
        buttonOnAndOff(1);
    } else {
        buttonOnAndOff(0);
    }
}

function userAnswer(t1, t2) {
    if (document.getElementById(t1).value == '') {
        $("#" + t2).prop('checked', false);
    } else {
        $("#" + t2).prop('checked', true);
        $("#" + t1).addClass('inputGroupSpeshAfter');
        buttonOnAndOff(1);
        var val = document.getElementById(t1).value;
        document.getElementById(t2).value = val;
    }
}

function selectText(obj) {
    $("#" + obj.id).keyup(function () {
        $("#" + obj.id).val().length > 0 ? buttonOnAndOff(1) : buttonOnAndOff(0);
    });
}
$("#userAnswerSix").keyup(function (event) {
    if (event.keyCode == 13) {
        if ($("#userAnswerSix").val().length > 0) {
            switchScreen();
        }

    }
});

function allRadio(obj) {
    if ($(obj).prop('checked') == true) {
        if (radioId == 1 || radioId == obj.id) {
            radioId = obj.id;
            $(obj).prop('disabled', true);
            setTimeout(() => {
                switchScreen();
            }, 600);
        } else if (radioId != obj.id) {
            radioId = obj.id;
        }
    }
}
back.onclick = function () {
    switch (i) {
        case 0:
            quest = "6 ВОПРОСОВ";
            break;
        case 1:
            quest = "6 ВОПРОСОВ";
            break;
        case 2:
            quest = "5 ВОПРОСОВ";
            break;
        case 3:
            quest = "4 ВОПРОСА";

            break;
        case 4:
            quest = "3 ВОПРОСА";
            break;
        case 5:
            quest = "2 ВОПРОСА";
            $(".present-section-div-1").css('background', 'url(img/1.png)');
            $(".present-section-div-1").css('background-size', 'cover');
            $(".present-section-p-1").css('color', '#fff');
            $(".present-section-img-1").css('display', 'block');
            break;
        default:
            break;
    }
    if (divs[i - 1] != divs[0]) {
        w = i - 1;
        num--;
        print(i, w, num, quest);
        i--;
        scheckedId = 1,
            radioId = 1;
    } else {
        w = i - 1;
        num--;
        print(i, w, num, quest);
        back.style.display = "none";
        i--;
    }
    buttonOnAndOff(1);

};
// $('#userAnswerOne').keyup(function () {
//     if (document.getElementById("userAnswerOne").value != '') {
//         $('#radioOneSix').prop('checked', true);
//         buttonOnAndOff(1);
//         var val = document.getElementById("userAnswerOne").value;
//         document.getElementById("radioOneSix").value = val;
//     }
// });
$("#userAnswerTwo").keyup(function (event) {
    if (event.keyCode == 13) {
        btnCont.click();
    }
});

$('#userAnswerFive').keyup(function () {
    if (document.getElementById("userAnswerFive").value != '') {
        $('#radioFiveFive').prop('checked', true);
        buttonOnAndOff(1);
        var val = document.getElementById("userAnswerFive").value;
        document.getElementById("radioFiveFive").value = val;
    } else {}
});

$("#userAnswerFive").keyup(function (event) {
    if (event.keyCode == 13) {
        btnCont.click();
    }
});

$(".inputGroup__userAnswer").on('input', function(){

    if($(this).attr('id') != 'userAnswerSix'){

        var answrId = $(this).attr('data-id')
        var inputEl = document.getElementById(answrId);

        if($(this).val() != ''){
            $(this).parents('.inputGroup').addClass('is-active');
            $(inputEl).prop('checked', true);
            buttonOnAndOff(1);
            var val = $(this).val()
            inputEl.value = val;
        }else{
            $(this).parents('.inputGroup').removeClass('is-active')
            $(inputEl).prop('checked', false);
            inputEl.value = '';
        }
    }else{

        if($(this).val() != ''){
            $(this).parents('.inputGroup').addClass('is-active');
        }else{
            $(this).parents('.inputGroup').removeClass('is-active')
        }
    }
})

$(".formOutput").on('input', function(){

    if($(this).val() != ''){
        $(this).parents('.formOutputSpexh').addClass('is-active');
    }else{
        $(this).parents('.formOutputSpexh').removeClass('is-active')
    }

});

$("input[name='checboxScreenThree']").on('click', function(){

    $(this).parents('#contentItemThree').find('.inputGroup.is-active').removeClass('is-active');
    $(this).parents('#contentItemThree').find('#userAnswerFour').prop('checked', false);
    $(this).parents('#contentItemThree').find('.inputGroup__userAnswer').val('')
});