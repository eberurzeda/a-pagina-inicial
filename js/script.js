const botaoTema = document.getElementById('botao-tema');

function lerTemaSalvo() {
  try {
    return localStorage.getItem('tema');
  } catch (erro) {
    return null;
  }
}

function salvarTema(tema) {
  try {
    localStorage.setItem('tema', tema);
  } catch (erro) {
    return;
  }
}

const temaSalvo = lerTemaSalvo();

function atualizarBotaoTema(temaEscuroAtivo) {
  if (!botaoTema) {
    return;
  }

  botaoTema.textContent = temaEscuroAtivo ? 'Modo claro' : 'Modo escuro';
  botaoTema.setAttribute('aria-pressed', String(temaEscuroAtivo));
}

if (temaSalvo === 'escuro') {
  document.body.classList.add('tema-escuro');
}

atualizarBotaoTema(document.body.classList.contains('tema-escuro'));

if (botaoTema) {
  botaoTema.addEventListener('click', function () {
    document.body.classList.toggle('tema-escuro');
    const temaEscuroAtivo = document.body.classList.contains('tema-escuro');

    salvarTema(temaEscuroAtivo ? 'escuro' : 'claro');
    atualizarBotaoTema(temaEscuroAtivo);
  });
}
