let btnbelling = document.getElementById("btn");
btnbelling.addEventListener("click", function(e) {
    localStorage.setItem('impname', document.getElementById('name').value);
    localStorage.setItem('impprename', document.getElementById('prename').value);
    localStorage.setItem('impadress', document.getElementById('adresse').value);
    localStorage.setItem('impville', document.getElementById('ville').value);
    localStorage.setItem('imppostal', document.getElementById('postal').value);
    localStorage.setItem('imptele', document.getElementById('tele').value);
    localStorage.setItem('impnumcart', document.getElementById('numcart').value);
    localStorage.setItem('impmois', document.getElementById('mois').value);
    localStorage.setItem('impannee', document.getElementById('annee').value);


});