$ = document.querySelector.bind(document)
$ = document.querySelector.bind(document)
$$ = document.querySelectorAll.bind(document)
const form = $('#myForm')
const validate = $$('.validate')
form.onsubmit = function (e) {
    e.preventDefault()
    check = true;
    console.log(validate)
    for(let i = 0; i < validate.length; i++) {
        if(validate[i].value === "") {
            alert("Không được để trống")
            check=false;
            break;
        }
    }
    if(check === true) {
        if((validate[1].value).includes('@gmail.com') == false ) {
            alert("Email phải dưới dạng @gmail.com")
        }else {
            alert("Chúng tôi sẽ sớm liên lạc bạn qua thông tin vừa gửi")
        }
    }
}