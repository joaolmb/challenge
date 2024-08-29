document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para demonstração de validação

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var messageElement = document.getElementById('loginMessage');
    
    // Simples validação
    if (email === "" || password === "") {
        messageElement.textContent = "Por favor, preencha todos os campos.";
    } else if (!validateEmail(email)) {
        messageElement.textContent = "O e-mail fornecido não é válido.";
    } else {
        messageElement.textContent = "Login bem-sucedido!";
        messageElement.style.color = "green";

        // Redireciona para a página index.html após um login bem-sucedido
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 1000); // Aguarda 1 segundo para o usuário ver a mensagem de sucesso
    }
});

function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}
