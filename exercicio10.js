class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    autenticar(emailInformado, senhaInformada) {
        return (this.email === emailInformado && this.senha === senhaInformada) 
        
 
}
}
const usuario = new Usuario ('Jonh Wick', 'wick@jonh.com', '987456');

function login() {
    const emailUsuario = document.querySelector('#email');
    const senhaUsuario = document.querySelector('#log');
    const valorEmail = emailUsuario.value;
    const valorSenha = senhaUsuario.value;
    const pautenticar = document.getElementById('autenticar');
    

    if ( valorEmail === '' || emailUsuario === '') {
        pautenticar.innerText = 'Credenciais não informadas'
        // alert('Credenciais não informadas');
        
        return
    }
    const autenticado = usuario.autenticar(valorEmail, valorSenha);
    if (autenticado){
        pautenticar.innerText = 'Usuário autenticado com sucesso'
        // alert('Usuário autenticado com sucesso');
    } else {
        pautenticar.innerText = 'Credenciais inválidas !'
        // alert('Credenciais inválidas !');
    }
    emailUsuario.value = '';
    senhaUsuario.value = '';
    
}



// Use esta classe 'Usuário' para implementar a autenticação quando for clicado no botão 'Acessar'.

// Dicas:
// a) Instancie um usuário indicando seus atributos: nome, email e senha (podem ser dados fixos e indicados no momento da criação do objeto).
// b) Colocar no evento relacionado ao botão a chamada para uma função que faça uso do método 'autenticar' deste objeto previamente instanciado.
// c) Se a autenticação tiver sucesso (resultado = true), exibir mensagem de sucesso na tela, caso contrário, exibir mensagem de credenciais inválidas.
// Sugestão: aplique estilo CSS na página para praticar!