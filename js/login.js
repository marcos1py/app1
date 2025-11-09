// Espera o DOM (a página) ser totalmente carregado para executar o script
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Seleciona os elementos do DOM
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    // Verifica e preenche o usuário se a opção "Lembrar-me" foi usada
    const rememberedUser = localStorage.getItem('rememberedUser');
    if (rememberedUser) {
        document.getElementById('username').value = rememberedUser;
        document.getElementById('remember').checked = true;

    // 2. Adiciona um "ouvinte" para o evento de 'submit' (envio) do formulário
    loginForm.addEventListener("submit", (event) => {
        // 3. Previne o comportamento padrão do formulário (que é recarregar a página)
        event.preventDefault();

        // 4. Pega os valores digitados nos campos
        // Usamos .value para obter o texto e .trim() para remover espaços em branco
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        // 5. Define as credenciais corretas (substitua por sua lógica)
        // Como não há backend, "chumbamos" o usuário e senha aqui
        const correctUsername = "user";
        const correctPassword = "1234";

        // 6. Verifica se o usuário e a senha estão corretos
    
    // 1. Seleciona os elementos do DOM
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    // 2. Adiciona um "ouvinte" para o evento de 'submit' (envio) do formulário
    loginForm.addEventListener("submit", (event) => {
        // 3. Previne o comportamento padrão do formulário (que é recarregar a página)
        event.preventDefault();

        // 4. Pega os valores digitados nos campos
        // Usamos .value para obter o texto e .trim() para remover espaços em branco
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        // 5. Define as credenciais corretas (substitua por sua lógica)
        // Como não há backend, "chumbamos" o usuário e senha aqui
        const correctUsername = "user";
        const correctPassword = "1234";

        // 6. Verifica se o usuário e a senha estão corretos
        if (username === correctUsername && password === correctPassword) {
            
            // SUCESSO: Redireciona o usuário para a página de dashboard
            // Note o caminho do arquivo
            window.location.href = "pages/dashboard.html";

        } else {
            
            // FALHA: Exibe uma mensagem de erro
            errorMessage.textContent = "Usuário ou senha inválidos. Tente 'user' e '1234'.";
        
    });
});
}
}
}
correctUsername && password