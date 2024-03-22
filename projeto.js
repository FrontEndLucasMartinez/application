document.getElementById("cadastro-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    // Pegando os valores dos campos
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    // Verificando se os campos estão preenchidos
    if (nome && email && senha) {
        // Exibindo mensagem de sucesso
        document.getElementById("cadastro-form").innerHTML += '<p class="success">Cadastro realizado com sucesso!</p>';
        // Aqui você pode enviar os dados para o servidor se necessário
    } else {
        // Exibindo mensagem de erro
        document.getElementById("cadastro-form").innerHTML += '<p class="error">Por favor, preencha todos os campos.</p>';
    }
});
