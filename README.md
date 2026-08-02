# 🌟 Premium Developer Portfolio

Este é um projeto de **Portfólio Premium** desenvolvido para apresentar projetos, habilidades e experiências de forma moderna, interativa e altamente performática. 

O design foi construído seguindo as melhores práticas visuais, com animações fluidas, efeitos 3D interativos e uma experiência de usuário (UX) premium.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias e bibliotecas modernas:

- **React 19** & **TypeScript** - Para uma estrutura de componentes tipada, segura e performática.
- **Vite** - Ferramenta de build extremamente rápida para o desenvolvimento.
- **Three.js & React Three Fiber (@react-three/fiber / drei)** - Para renderizar elementos interativos 3D em tempo real no plano de fundo.
- **GSAP (GreenSock Animation Platform)** - Para animações refinadas e transições de alta qualidade.
- **Lenis** - Para proporcionar uma rolagem suave (Smooth Scroll) impecável.
- **CSS Modules** - Para estilização modular e encapsulamento de estilos.
- **Lucide React & React Icons** - Para ícones modernos e minimalistas.

---

## ✨ Funcionalidades e Destaques

- **Plano de Fundo Interativo 3D**: Efeitos interativos tridimensionais que respondem ao movimento do mouse.
- **Transições e Animações Fluidas**: Micro-animações premium implementadas com GSAP.
- **Navegação Suave**: Rolagem refinada usando Lenis Scroll.
- **Design Responsivo**: Totalmente adaptado para dispositivos móveis, tablets e desktops.
- **Organização Modular**: Código limpo, componentizado e estruturado em TypeScript.

---

## 🛠️ Como Executar o Projeto Localmente

Se você deseja executar o site em sua máquina para explorar o código ou ver o portfólio funcionando em tempo real, siga os passos abaixo:

### 📋 Pré-requisitos

Certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- Gerenciador de pacotes `npm` (instalado junto com o Node.js) ou `yarn`.

### 1. Instalar as Dependências

Navegue até o diretório do projeto e instale todas as dependências necessárias executando:

```bash
npm install
```

### 2. Iniciar o Servidor de Desenvolvimento

Após a instalação, inicie o servidor local:

```bash
npm run dev
```

O terminal exibirá um link local (geralmente `http://localhost:5173`). Abra esse endereço no seu navegador para ver e interagir com o site!

### 3. Gerar Versão de Produção (Opcional)

Para gerar e pré-visualizar a build otimizada de produção, execute:

```bash
npm run build
npm run preview
```

---

## 📁 Estrutura do Projeto

Abaixo está a disposição dos principais arquivos e diretórios do projeto:

```text
├── public/              # Arquivos estáticos (favicon, SVG icons)
├── src/
│   ├── assets/          # Imagens e mídias
│   ├── components/      # Componentes principais (Hero, About, Projects, etc.)
│   │   ├── Hero.tsx / Hero.module.css
│   │   ├── About.tsx / About.module.css
│   │   ├── Projects.tsx / Projects.module.css
│   │   └── InteractiveBackground.tsx (Fundo 3D)
│   ├── index.css        # Estilos globais e variáveis de design
│   ├── main.tsx         # Ponto de entrada do React
│   └── App.tsx          # Componente raiz organizando as seções
├── video/               # Demonstrações em vídeo do projeto
├── package.json         # Scripts e dependências do projeto
└── vite.config.ts       # Configurações do Vite
```

