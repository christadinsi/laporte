/**
 * Fonctions de travail
 */



/*  ****************************** function validation EMAIL *******************************

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
    }*/



    /* ******************************* function validation PASSWORD *******************************

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

}*/

/* ****************************** function controle des champs *******************************


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
    
*/
 

