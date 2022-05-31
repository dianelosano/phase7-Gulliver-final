
async function logar(){
    let login = await fazerLogin();

    switch (login){
        //E-mail ou senha inválidos/Vazios
        case 0 : limparCampos();
            break;
        //Login incorreto    
        case null : alert("E-mail ou senha incorretos"); limparCampos();
            break;
        //Logado com sucesso    
        default: console.log(login.nome); 
        sessionStorage.setItem("logado", true);
        sessionStorage.setItem("username", login.nome)
        window.location.href="index.html"
            break;
    }
}

async function fazerLogin(){
        if(validaCamposLogin()){
            let _data = {
                email: document.querySelector('#email-login').value,
                senha: document.querySelector('#pass-login').value
            }
            try{
                let response = await fetch('https://gulliver-traveller-api.herokuapp.com/cliente/localizar',{
                    method: "POST",
                    mode: "cors",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body:  JSON.stringify(_data)
                });
                var res = await response.json();
                return res;                
            }
            catch (error){
                return response = null;
            }
        } 
        else return 0
    }

    function validaCamposLogin(){
        var txtEmail = document.querySelector('#email-login').value;
        var txtSenha = document.querySelector('#pass-login').value; 

        if( txtEmail =="" 
        || txtEmail.indexOf('@')==-1 
          || txtEmail.indexOf('.')==-1 )
         {
           alert( "Por favor, informe um E-MAIL válido!" );
           return false;
         }

         if(txtSenha == "" || txtSenha == null || txtSenha == undefined){
             return false;
         }
         
         return true;

     }

     function limparCampos(){         
        var txtEmail = document.querySelector('#email-login').value = null;
        var txtSenha = document.querySelector('#pass-login').value = null; 
     }