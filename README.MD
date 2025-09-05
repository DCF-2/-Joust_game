# 🐎 Joust: Um Jogo de Estratégia de Cavaleiros

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📄 Descrição do Projeto

Joust é um jogo de estratégia e sobrevivência desenvolvido para a web, onde dois jogadores competem em um tabuleiro de xadrez como cavaleiros. O objetivo é ser o último cavaleiro com movimentos válidos. A cada turno, o cavaleiro deve se mover em L, como a peça do cavalo no xadrez, e a casa que ele deixa para trás é "queimada", tornando-se inutilizável pelo resto do jogo. O jogo termina quando um cavaleiro não tem mais movimentos disponíveis, e o outro jogador vence a partida.

O jogo foi construído como um PWA (Progressive Web App), permitindo que ele seja instalado em dispositivos móveis e desktop para uma experiência de jogo offline e imersiva.

![Joust Game Screenshot](img/Captura%20de%20tela%202025-09-05%20103735.png)

---
## ✨ Funcionalidades

* **Animação de Abertura**: Uma tela de animação de introdução elegante.
* **Gameplay Dinâmico**: Jogabilidade baseada em turnos, com a mecânica única de "queimar" casas.
* **Interface Simples e Intuitiva**: Um tabuleiro de xadrez visualmente atraente com rótulos de linhas e colunas.
* **Placar Persistente**: O placar entre os dois jogadores é salvo no navegador (usando `localStorage`) para manter o registro das vitórias mesmo entre sessões.
* **Destaque de Movimentos**: As casas válidas para o cavaleiro atual são destacadas visualmente.
* **Progressive Web App (PWA)**: O jogo pode ser instalado e jogado offline, graças ao Service Worker e ao Manifesto do Aplicativo.

---

## 🎮 Como Jogar

1.  A partida começa com dois cavaleiros em posições aleatórias no tabuleiro.
2.  O Jogador 1 sempre começa.
3.  O jogador da vez deve clicar em uma das casas destacadas em verde para mover seu cavaleiro.
4.  A casa de onde o cavaleiro saiu será marcada como "queimada" (vermelha) e não pode ser usada novamente.
5.  O turno passa para o próximo jogador.
6.  A partida continua até que um dos jogadores não tenha mais movimentos válidos.
7.  O jogador que conseguir se mover por mais tempo vence a partida. O placar será atualizado.

--- 
## 🗂️ Estrutura de Arquivos

```mermaid
graph TD
    A[Joust/..]
    A --> B(conf)
    B --> C(images)
    C --> D(icon-192x192.png)
    C --> E(icon-512x512.png)
    B --> F(manifest.json)
    A --> G(img)
    G --> H(Captura de tela 2025-09-05 103735.png)
    G --> I(Joust.png)
    G --> J(Joust.webp)
    A --> K(js)
    K --> L(board.js)
    K --> M(game.js)
    K --> N(knight.js)
    K --> O(main.js)
    K --> P(sw.js)
    K --> Q(web.js)
    A --> R(styles)
    R --> S(board.css)
    R --> T(main.css)
    A --> U(index.html)
    A --> V(README.MD)
```
---

## 🚀 Como Executar Localmente

1.  Clone ou descarregue este repositório.
2.  Abra a pasta do projeto no Visual Studio Code.
3.  Instale a extensão **Live Server**.
4.  Clique em **"Go Live"** no canto inferior direito para iniciar o servidor local.

---

## 🎓 Contexto do Projeto

Este projeto foi desenvolvido como parte da avaliação da disciplina de **Desenvolvimento Web 2** do curso de **Tecnologia em Análise e Desenvolvimento de Sistemas** do Instituto Federal de Pernambuco (IFPE). O objetivo era construir um jogo inspirado no Jouste de tabuleiro, implementando uma lógica de jogo complexa.

---

![Joust Game Screenshot](img/Joust.png)

---

**Desenvolvido por:** *[Davi Freitas]*