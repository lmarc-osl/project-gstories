document.getElementById("meuFormulario").addEventListener("submit",function(event) {
    event.preventDefault(); //Impede o envio do formulário

    let campoA = parseFloat(document.getElementById("campoA").value);
    let campoB = parseFloat(document.getElementById("campoB").value);
    let mensagem = document.getElementById("mensagem");

    if (campoB > campoA) {
        mensagem.textContent = "Formulário válido! O número B é maior que A.";
        mensagem.className = "mensaem sucesso";
    } else {
        mensagem.textContent = "Formulário inválido! O número B deve ser maior que A.";
        mensagem.className = "mensaem erro";
    }

});