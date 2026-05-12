const botaoTema = document.getElementById('botao-tema');

if (botaoTema) {
  botaoTema.addEventListener('click', function () {
    document.body.classList.toggle('tema-escuro');

    if (document.body.classList.contains('tema-escuro')) {
      botaoTema.textContent = 'Modo claro';
    } else {
      botaoTema.textContent = 'Modo escuro';
    }
  });
}