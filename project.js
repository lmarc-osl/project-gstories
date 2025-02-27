document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário imediatamente

    let nome = document.getElementById("username").value.trim();
    let relato = document.getElementById("relato").value.trim();
    let mensagem = document.getElementById("mensagem");

    if (nome && relato) {
        mensagem.textContent = `Obrigado por compartilhar seu relato, ${nome}!`;
        mensagem.className = "mensagem sucesso";

        // Enviar os dados para o Formspree via AJAX
        let formData = new FormData(this);

        fetch("https://formspree.io/f/xovjozrn", {
            method: "POST",
            headers: { "Accept": "application/json" },
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                mensagem.textContent = "Seu relato foi enviado com sucesso!";
                mensagem.className = "mensagem sucesso";
                document.getElementById("meuFormulario").reset();
            } else {
                mensagem.textContent = "Erro ao enviar relato. Tente novamente.";
                mensagem.className = "mensagem erro";
            }
        })
        .catch(error => {
            mensagem.textContent = "Erro ao conectar ao servidor.";
            mensagem.className = "mensagem erro";
            console.error("Erro:", error);
        });

    } else {
        mensagem.textContent = "Por favor, digite seu nome e o relato.";
        mensagem.className = "mensagem erro";
    }
});
