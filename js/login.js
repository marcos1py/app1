// Espera o DOM (a página) ser totalmente carregado para executar o script
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Seleciona os elementos do DOM
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const rememberCheckbox = document.getElementById("remember");

    // Lógica para preencher o usuário caso "Lembrar-me" tenha sido marcado anteriormente
    const rememberedUser = localStorage.getItem("rememberedUsername");
    if (rememberedUser) {
        usernameInput.value = rememberedUser;
        rememberCheckbox.checked = true;
    }

    // 2. Adiciona um "ouvinte" para o evento de 'submit' (envio) do formulário
    loginForm.addEventListener("submit", (event) => {
        // 3. Previne o comportamento padrão do formulário (que é recarregar a página)
        event.preventDefault();

        // 4. Pega os valores digitados nos campos
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const rememberMe = rememberCheckbox.checked;

        // 5. Define as credenciais corretas
        const correctUsername = "user";
        const correctPassword = "1234";

        // 6. Verifica se o usuário e a senha estão corretos
        if (username