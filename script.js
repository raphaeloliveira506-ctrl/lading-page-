// Ano atual no rodape
document.getElementById("ano").textContent = new Date().getFullYear();

// Formulario de contato: mostra mensagem de confirmacao (se existir na pagina)
const form = document.getElementById("form-contato");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    document.getElementById("resposta").textContent =
      "Obrigado, " + nome + "! Sua mensagem foi enviada com sucesso.";
    this.reset();
  });
}
