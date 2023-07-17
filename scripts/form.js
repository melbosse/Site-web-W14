// Script avec du JQuery pour le formulaire

// Pour le prénom et le nom
const inputs = document.querySelectorAll('.validation'); 

inputs.forEach( input => {
    input.addEventListener('beforeinput', function(event){
        let k = event.data 

        if(!k.match(/^[A-Za-z\s\-]+$/)){
            event.preventDefault(); 
        }
    });
});

// Pour l'adresse e-mail
const Email = document.querySelectorAll('.email'); 

Email.forEach( input => {
    input.addEventListener('beforeinput', function(event){
        let i = event.data 

        if(!i.match(/^[A-Za-z\d\-\.\_\@]+$/)){
            event.preventDefault(); 
        }
    });
});

$('#sub').on('submit', function(event){
    let tf = true;

// Validation du prénom
    if($('#formPrenom').val() == ''){
        $('#alertePrenom').show();
        $('#formPrenom').css('border','2px solid red');
        tf = false;
    }else{
        $('#formPrenom').css('border','2px solid green');
        $('#alertePrenom').hide();
    }

// Validation du nom
    if($('#formNom').val() == ''){
        $('#alerteNom').show();
        $('#formNom').css('border','2px solid red');
        tf = false;
    }else{
        $('#formNom').css('border','2px solid green');
        $('#alerteNom').hide();
    }

    // Validation de l'adresse e-mail
    if($('#formEmail').val() == ''){
        $('#alerteEmail').show()
        $('#formEmail').css('border','2px solid red');
        tf = false;
    }else{
        $('#formEmail').css('border','2px solid green');
        $('#alerteEmail').hide();
    }

// Validation du genre
    if($('#Homme').is(':checked') == false &&
       $('#Femme').is(':checked') == false &&
       $('#Nonbinaire').is(':checked') == false){
        alert('Veuillez indiquer votre genre.');
        tf = false;
    }

    if(!tf){
        event.preventDefault();
    }
})