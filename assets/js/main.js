/**
 * Code de gestion du formulaire
 */


 
let form = document.querySelector('#loginForm');

// Ecouter la modification de l'email
form.email.addEventListener('change', function() {
    validemail(this);
});

// Ecouter la modification de password
form.password.addEventListener('change', function() {
    validPassword(this);
});

// Ecouter la modification des champs
const verification = document.querySelector('#loginForm');
 verification.addEventListener('click', controle);

 // Ecouter la soumission du formulaire
form.addEventListener('submit', function(e) {

    e.preventDefault();

    if(validemail(form.email) && validPassword(form.password)){
       form.style.backgroundColor = '#a7ff3342'; 
    }
});

 

    
// ******************************* validation EMAIL *******************************

const validemail = function(inputEmail){
// creation de la reg exp pour la validation de l'email
    let msgErreur = document.querySelector('.message');
    let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$','g'
    );

// On test l'expression régulière
    let testEmail = emailRegExp .test(inputEmail.value);
    
// si le test est vrai alors  on retire le message visible
    if(testEmail ){
        msgErreur.innerHTML = '';
        msgErreur.classList.remove('message-visible');
        return true;

    } else  {
// si non on affiche un message d'erreur et on retire le message visible
        msgErreur.innerHTML = 'adresse incorrecte';
        msgErreur.classList.add('message-visible');
        return false;
    } 
};

// ******************************* validation PASSWORD *******************************

const validPassword = function(inputPassword) {
    let msgErreurpass = document.querySelector('.message');
 
    if (inputPassword.value.length < 8){
        msgErreurpass.innerHTML = 'Le mot de passe doit contenir au moin 8 caratères';
        msgErreurpass.classList.add('message-visible');
        return false
    } else {
        msgErreurpass.classList.remove('message-visible');
        return true;
    }

}

// ******************************* Verification des champs *******************************

function controle(){
    let inputs = document.querySelectorAll('.input100');
    let msgErreur = document.querySelector('.message');
   

    for(let i = 0; i<inputs.length;i++){
        if(inputs[i].value == ''){
            msgErreur.innerHTML = 'Veillez renseignez tous les champs';
            msgErreur.classList.add('message-visible');
        } else {
            
            msgErreur.classList.remove('message-visible');
        }
    }
    
}
 


















/*
const verification = document.querySelector('.bouton');

verification.addEventListener('click',function(){
    const mail= document.getElementById('mail');
    const mdp = document.getElementById('motDePasse');
    const msgErreur = 'Veillez renseignez tous les champs'
    const regex =/@/; // on creer  une expression regulière  ou regex  
    
    if(regex.test(mail.value)){
      return  true;
    } else {
        document.getElementById('erreur').innerHTML = 'Veillez renseigner tous les champs';  
        document.getElementById('erreur').style.color = 'red';      
    } 
    if(mdp.value.lenght<8){
        alert('errrer') ; 
    }
    }
    )*/


     
    
     

     

