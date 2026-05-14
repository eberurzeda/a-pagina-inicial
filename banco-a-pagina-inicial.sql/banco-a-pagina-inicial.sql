CREATE DATABASE a_pagina_inicial
DEFAULT CHARACTER SET utf8mb4
DEFAULT COLLATE utf8mb4_unicode_ci;

USE a_pagina_inicial;

CREATE TABLE capitulos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    subtitulo VARCHAR(150),
    ordem INT NOT NULL,
    resumo TEXT,
    publicado BOOLEAN DEFAULT TRUE
);

CREATE TABLE personagens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    funcao_na_historia VARCHAR(150),
    cidade VARCHAR(100)
);

CREATE TABLE temas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT
);

CREATE TABLE lugares (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    tipo VARCHAR(100),
    descricao TEXT
);

INSERT INTO capitulos 
(titulo, subtitulo, ordem, resumo, publicado)
VALUES
('Body', 'O corpo da página e da história', 1, 'Henrique começa sua transição entre a literatura, a sala de aula e o mundo da programação.', TRUE),
('Header', 'A primeira impressão', 2, 'O capítulo apresenta os elementos iniciais da vida de Henrique e o modo como ele deseja reorganizar sua própria história.', TRUE),
('Main', 'O conteúdo principal', 3, 'Henrique entra mais profundamente no conflito entre o passado, o trabalho e o desejo de recomeçar.', TRUE),
('Link', 'As conexões possíveis', 4, 'As relações afetivas, familiares e digitais começam a criar novos caminhos para o protagonista.', TRUE),
('Script', 'O que se move por trás da página', 5, 'O capítulo mostra as ações invisíveis, as decisões internas e os pequenos códigos emocionais da narrativa.', TRUE),
('Breakpoint', 'O ponto de ruptura', 6, 'Henrique chega a um limite interno e precisa adaptar sua vida a uma nova tela.', TRUE),
('Deploy', 'Publicar a própria mudança', 7, 'O projeto, o conto e a vida de Henrique chegam ao momento de serem colocados no mundo.', TRUE);

INSERT INTO personagens
(nome, descricao, funcao_na_historia, cidade)
VALUES
('Henrique', 'Professor de Língua Portuguesa e Literatura em transição para a programação.', 'Protagonista', 'Hidrolândia'),
('Lia', 'Personagem ligada à tecnologia, à distância e a novas possibilidades afetivas.', 'Conexão afetiva e tecnológica', 'Recife'),
('Dona Lurdes', 'Figura ligada à casa, à memória e aos afetos cotidianos.', 'Memória familiar', 'Hidrolândia'),
('Pixel', 'Gato de Lia, presente nas imagens e mensagens enviadas de Recife.', 'Elemento cotidiano e afetivo', 'Recife');

INSERT INTO temas
(nome, descricao)
VALUES
('Transição de carreira', 'Mudança profissional de Henrique, da sala de aula para a programação.'),
('Memória afetiva', 'Relação entre passado, família, cidade e lembranças pessoais.'),
('Tecnologia cotidiana', 'Uso de celular, mensagens, GitHub, HTML, CSS, JavaScript e banco de dados como parte da vida comum.'),
('Literatura', 'Presença da leitura, da escrita e da formação literária do protagonista.'),
('Recomeço', 'Movimento interno de reorganizar a própria vida depois dos quarenta anos.');

INSERT INTO lugares
(nome, tipo, descricao)
VALUES
('Hidrolândia', 'cidade', 'Espaço de origem, memória e permanência na história.'),
('Recife', 'cidade', 'Lugar de Lia, marcado pela distância e pelas imagens enviadas pelo celular.'),
('Casa de Henrique', 'casa', 'Espaço de estudo, memória, trabalho e recomeço.'),
('Escola', 'trabalho', 'Lugar ligado à vida de professor e à relação de Henrique com a literatura.'),
('Varanda', 'ambiente doméstico', 'Espaço de observação, convivência familiar e lembrança.');

SHOW TABLES;

SELECT * FROM capitulos;
SELECT * FROM personagens;
SELECT * FROM temas;
SELECT * FROM lugares;