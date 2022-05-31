function validaCampos(){


    const formulario = document.getElementById('formulario');

    if(formulario.nome.value == "" || formulario.nome.value == null){
        limpaCores();
        formulario.nome.style.borderColor = 'red';
        formulario.nome.focus();
        return false;
    } 

    if(formulario.sobrenome.value == "" || formulario.sobrenome.value == null){
        limpaCores();
        formulario.sobrenome.style.borderColor = 'red';
        formulario.sobrenome.focus();
        return false;
    } 

    if(formulario.date.value == "" || formulario.date.value == null){
        limpaCores();
        formulario.date.style.borderColor = 'red';
        formulario.date.focus();
        return false;
    } 

    if(formulario.cpf.value == "" || formulario.cpf.value == null){
        limpaCores();
        formulario.cpf.style.borderColor = 'red';
        formulario.cpf.focus();
        return false;
    } 
    if(formulario.email.value == "" || formulario.email.value == null){
        limpaCores();
        formulario.email.style.borderColor = 'red';
        formulario.email.focus();
        return false;
    } 
    if(formulario.passOne.value == "" || formulario.passOne.value == null){
        limpaCores();
        formulario.passOne.style.borderColor = 'red';
        formulario.passOne.focus();
        return false;
    } 
    if(formulario.passTwo.value == "" || formulario.passTwo.value == null){
        limpaCores();
        formulario.passTwo.style.borderColor = 'red';
        formulario.passTwo.focus();
        return false;
    }
   if(formulario.passTwo.value == formulario.passOne.value){
        return true;
    }

    limpaCores();
    formulario.passTwo.style.borderColor = 'red';
    formulario.passTwo.focus();
    alert("As senhas não conferem");
    return false;
}

function limpaCores(){

    const formulario = document.getElementById('formulario');


    formulario.nome.style.borderColor = '';
    formulario.sobrenome.style.borderColor = '';
    formulario.date.style.borderColor = '';
    formulario.cpf.style.borderColor = '';
    formulario.email.style.borderColor = '';
    formulario.passOne.style.borderColor = '';
    formulario.passTwo.style.borderColor = '';

}

function limpaTextos(){

    const formulario = document.getElementById('formulario');


    formulario.nome.value = null;
    formulario.sobrenome.value = null;
    formulario.date.value = null;
    formulario.cpf.value = null;
    formulario.email.value = null;
    formulario.passOne.value = null;
    formulario.passTwo.value = null;

}

async function efetuaCadastro(){

    const formulario = document.getElementById('formulario');

    if(validaCampos()){
        let _data = {
            nome: formulario.nome.value,
            sobrenome: formulario.sobrenome.value,
            dtNascimento: formulario.date.value,
            cpf: formulario.cpf.value,
            email: formulario.email.value,
            senha: formulario.passOne.value
        }
        try{
            let response = await fetch('https://gulliver-traveller-api.herokuapp.com/cliente/',{
                method: "POST",
                mode: "cors",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:  JSON.stringify(_data)
            });
            var res = await response.json();
            alert("Cadastro Efetuado com sucesso");
            window.location.href="login.html"
            return; 
        }
        catch(error){
            return alert("Erro ao efetuar o cadastro, tente novamente mais tarde");
        }
    }
    else console.log("Erro")
}