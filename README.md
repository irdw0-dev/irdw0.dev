# irdw0.dev

[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://my-app-eight-weld-88.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

Portfolio pessoal desenvolvido com Next.js, TypeScript e Tailwind CSS. Design minimalista com tema escuro e roxo como cor de destaque.

## 🌐 Demo

Acesse: [https://my-app-eight-weld-88.vercel.app](https://my-app-eight-weld-88.vercel.app)

## ✨ Funcionalidades

- **Fundo Interativo**: Spotlight roxo que segue o movimento do mouse
- **Design Responsivo**: Adaptado para mobile, tablet e desktop
- **Animações Suaves**: Transições elegantes com Framer Motion
- **Integração GitHub**: Projetos carregados dinamicamente da API do GitHub
- **Tema Escuro**: Paleta de cores sofisticada com roxo como accent
- **SEO Otimizado**: Meta tags e estrutura semântica

## 🛠️ Tecnologias

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
- **Animações**: [Framer Motion](https://www.framer.com/motion/)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Deploy**: [Vercel](https://vercel.com/)

## 🎨 Design

### Paleta de Cores

| Cor | Código | Uso |
|-----|--------|-----|
| Background | `#0A0A0A` | Fundo principal |
| Surface | `#141414` | Cards e seções |
| Text Primary | `#FFFFFF` | Títulos e texto principal |
| Text Secondary | `#A1A1AA` | Descrições |
| Accent | `#8B5CF6` | Destaques e botões |
| Accent Hover | `#A78BFA` | Hover states |

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/irdw0-dev/irdw0.dev.git

# Entre no diretório
cd irdw0.dev

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Build

```bash
# Criar build de produção
npm run build

# O build estático será gerado na pasta `dist/`
```

## 📁 Estrutura do Projeto

```
my-app/
├── src/
│   ├── app/                 # Páginas Next.js
│   │   ├── globals.css      # Estilos globais
│   │   ├── layout.tsx       # Layout principal
│   │   └── page.tsx         # Página inicial
│   ├── components/          # Componentes React
│   │   ├── Contact.tsx      # Seção de contato
│   │   ├── Hero.tsx         # Seção hero
│   │   ├── ProjectCard.tsx  # Card de projeto
│   │   ├── Projects.tsx     # Grid de projetos
│   │   ├── Skills.tsx       # Seção de habilidades
│   │   └── SpotlightBackground.tsx  # Fundo interativo
│   ├── lib/
│   │   └── github.ts        # Funções da API GitHub
│   └── types/
│       └── index.ts         # Tipagens TypeScript
├── dist/                    # Build estático
├── next.config.ts           # Configuração Next.js
├── package.json
└── tsconfig.json
```

## 📱 Seções

1. **Hero**: Apresentação com foto, nome, bio e links sociais
2. **Projetos**: Grid dos repositórios GitHub com cards interativos
3. **Habilidades**: Tecnologias e ferramentas (C#, Java, JavaScript, etc.)
4. **Contato**: Links para GitHub, LinkedIn e email

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz:

```env
# Opcional: Token do GitHub para aumentar rate limit
GITHUB_TOKEN=seu_token_aqui
```

### Personalização

Edite os arquivos em `src/components/` para personalizar:
- `Hero.tsx`: Nome, bio e links
- `Skills.tsx`: Tecnologias exibidas
- `Contact.tsx`: Informações de contato

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**Felipe Reis**

- GitHub: [@irdw0-dev](https://github.com/irdw0-dev)
- LinkedIn: [lipecoding](https://linkedin.com/in/lipecoding)
- Website: [irdw0.dev](https://my-app-eight-weld-88.vercel.app)

---

⭐ Se você gostou deste projeto, deixe uma star no repositório!
