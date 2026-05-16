const botaoTema = document.getElementById('botao-tema');
const barraProgresso = document.querySelector('.barra-progresso');
const botaoVoltarTopo = document.getElementById('voltar-topo');
const avisoUltimoCapitulo = document.getElementById('ultimo-capitulo');
const linksCapitulos = document.querySelectorAll('.capitulos a, .navegacao-capitulos a');

/* Tema claro / escuro */

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

function atualizarBotaoTema(temaEscuroAtivo) {
  if (!botaoTema) {
    return;
  }

  botaoTema.textContent = temaEscuroAtivo ? 'Modo claro' : 'Modo escuro';
  botaoTema.setAttribute('aria-pressed', String(temaEscuroAtivo));
}

const temaSalvo = lerTemaSalvo();

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

/* Barra de progresso de leitura */

function atualizarBarraDeProgresso() {
  if (!barraProgresso) {
    return;
  }

  const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;

  if (alturaTotal <= 0) {
    barraProgresso.style.width = '0%';
    return;
  }

  const progresso = (window.scrollY / alturaTotal) * 100;

  barraProgresso.style.width = `${progresso}%`;
}

window.addEventListener('scroll', atualizarBarraDeProgresso);
window.addEventListener('load', atualizarBarraDeProgresso);

/* Botão voltar ao topo */

function controlarBotaoVoltarTopo() {
  if (!botaoVoltarTopo) {
    return;
  }

  if (window.scrollY > 400) {
    botaoVoltarTopo.classList.add('visivel');
  } else {
    botaoVoltarTopo.classList.remove('visivel');
  }
}

window.addEventListener('scroll', controlarBotaoVoltarTopo);
window.addEventListener('load', controlarBotaoVoltarTopo);

if (botaoVoltarTopo) {
  botaoVoltarTopo.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

/* Último capítulo lido */

function salvarUltimoCapitulo(link) {
  try {
    localStorage.setItem('ultimoCapitulo', link);
  } catch (erro) {
    return;
  }
}

function lerUltimoCapitulo() {
  try {
    return localStorage.getItem('ultimoCapitulo');
  } catch (erro) {
    return null;
  }
}

linksCapitulos.forEach(function (link) {
  link.addEventListener('click', function () {
    const caminhoCapitulo = link.getAttribute('href');

    if (caminhoCapitulo) {
      salvarUltimoCapitulo(caminhoCapitulo);
    }
  });
});

const ultimoCapitulo = lerUltimoCapitulo();

if (avisoUltimoCapitulo && ultimoCapitulo) {
  avisoUltimoCapitulo.innerHTML = `
    <a class="botao" href="${ultimoCapitulo}">
      Continuar de onde parei
    </a>
  `;
}