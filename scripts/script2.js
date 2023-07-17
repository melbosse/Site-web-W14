// Calculateur avec un résultat en pourcentage
function Calcul(){
    let nom, prenom;
    nom = document.getElementById('nom').value;
    prenom = document.getElementById('prenom').value;
  
    if (nom != '' && prenom != '') {
      document.getElementById('resultat').innerHTML = 'Votre résultat est de : ' + Math.floor(Math.random() * 101) + '%';
    }else{
      document.getElementById('resultat').innerHTML = 'Vous devez entrer votre nom et votre prénom.'
    }
}