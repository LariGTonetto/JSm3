
function validaCampo(elemento) {

    elemento.addEventListener('focusout', function (event) {

        event.preventDefault();

        if (this.value == "") {
            document.querySelector('.mensagem').innerHTML = "Preencha o campo obrigatório em destaque."
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
    });

}


function validaCampoNumerico(elemento) {

    elemento.addEventListener('focusout', function (event) {

        event.preventDefault();

        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value;

        if (numero != "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 9) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "Preencha o campo obrigatório em destaque."
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    });

}


function validaEmail(elemento) {
    elemento.addEventListener('focusout', function (event) {

        event.preventDefault();

        const emailValido = /^[a-z0-9]+[a-z0-9]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
        if (this.value.match(emailValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "E-mail inválido. Preencha o campo obrigatório em destaque corretamente.";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    });

}


function validaUF(elemento) {
    elemento.addEventListener('focusout', function (event) {

        event.preventDefault();
        
       const uf = this.value.trim();

       const UFValido = /^[A-Za-z]{2}$/;
       if (uf.length === 2 && UFValido.test(uf)) {
      
                 document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "Estado inválido. Preencha o campo obrigatório em destaque corretamente.";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    });

}



let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');
let camposEmail = document.querySelectorAll('input.email');
let camposUF = document.querySelectorAll('input.uf');

for (let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for (let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
}

for (let emFoco of camposEmail) {
    validaEmail(emFoco);
}

for (let emFoco of camposUF) {
    validaUF(emFoco);
}

