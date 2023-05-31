function afficherInformations() {
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const nombrePlace = document.getElementById('nombreplace').value;
    const film = document.getElementById('film').value;
    const heure10 = document.getElementById('dix').checked;
    const heure11 = document.getElementById('onze').checked;
    const heure12 = document.getElementById('douze').checked;
    const heure13 = document.getElementById('treize').checked;
    const date = document.getElementById('date').value;
    const email = document.getElementById('email').value;
  
    console.log('Nom:', nom);
    console.log('Prénom:', prenom);
    console.log('Nombre de places:', nombrePlace);
    console.log('Film:', film);
    console.log('10h00:', heure10);
    console.log('11h00:', heure11);
    console.log('12h00:', heure12);
    console.log('13h00:', heure13);
    console.log('Date:', date);


   alert("Vous recevrez un mail de confirmation à l'adresse suivante : " + document.getElementById('email').value);
}