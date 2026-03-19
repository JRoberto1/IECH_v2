# CLAUDE.md — Site Institucional do IECH
## Instituto Evangelístico Charley Huffman

Este arquivo orienta o Claude Code em futuras atualizações do site.

---

## Estrutura do Projeto

```
/
├── index.html          → Página inicial (hero, modalidades, grade, depoimentos, CTA)
├── sobre.html          → História, missão, visão, valores, direção
├── cursos.html         → Grade curricular completa (4 períodos)
├── modalidades.html    → Presencial / Online ao Vivo (manhã e noite)
├── professores.html    → Corpo docente (fixos e convidados)
├── downloads.html      → Apostilas, biblioteca, documentos (busca JS puro)
├── inscricao.html      → Formulário FormSpree + validação
├── assets/
│   ├── css/style.css   → Estilos customizados (variáveis, componentes)
│   └── js/main.js      → AOS, navbar, menu mobile, busca, formulário
└── assets/images/      → logo.png e demais imagens
```

---

## Identidade Visual

| Variável          | Valor     | Uso                          |
|-------------------|-----------|------------------------------|
| `--azul-escuro`   | `#0C2D6B` | Navbar, headers, avatares    |
| `--azul-medio`    | `#1A4A9C` | Hover, variações             |
| `--azul-noite`    | `#081437` | Hero, CTA, footer            |
| `--dourado`       | `#C8A84B` | Botões, destaques, acentos   |
| `--dourado-claro` | `#E8C96A` | Hover do dourado             |
| `--ciano`         | `#1B8FA8` | Badges, pills, complemento   |
| `--ciano-claro`   | `#E8F6FA` | Backgrounds suaves           |
| `--cinza-claro`   | `#F8F9FF` | Seções alternadas            |

**Fontes:** Playfair Display (títulos) + Inter (corpo)

---

## Regras Invioláveis

1. **Seminaristas** — nunca "alunos", "estudantes" ou "participantes"
2. **Online ao vivo** — nunca "EAD", "aulas gravadas" ou "assíncrono"
3. **Sem emojis** — sempre ícones SVG inline
4. **Sem jQuery** — JavaScript puro ou Alpine.js
5. **Gratuidade sempre em destaque** — é o maior diferencial do IECH
6. **Não misturar IECH com Igreja de Cristo** — são independentes
7. **AOS obrigatório** em todas as páginas: `AOS.init({ duration: 800, once: true, offset: 80 })`
8. **Links externos**: sempre `target="_blank" rel="noopener noreferrer"`
9. **Imagens**: sempre `loading="lazy"` (exceto hero)
10. **Meta tags** completas em todas as páginas (title, description, og:*)

---

## Tecnologias

```html
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

**Formulário FormSpree:** `https://formspree.io/f/mqeynbzy`

---

## Tailwind Config (em cada página)

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'azul-escuro': '#0C2D6B',
        'azul-medio': '#1A4A9C',
        'azul-noite': '#081437',
        'dourado': '#C8A84B',
        'dourado-claro': '#E8C96A',
        'ciano': '#1B8FA8',
        'ciano-claro': '#E8F6FA',
        'cinza-claro': '#F8F9FF',
      }
    }
  }
}
```

---

## Navbar (ordem fixa)

```
[LOGO]  Sobre  Cursos  Modalidades  Professores  Downloads  | Webmail |  [Inscreva-se]
```

- Logo: `assets/images/logo.png` (sempre sobre fundo escuro)
- Webmail: `https://institutoech.com.br/webmail` (nova aba)
- Inscreva-se: botão dourado → `inscricao.html`
- Menu hamburger no mobile

---

## Footer (idêntico em todas as páginas)

**Col 1:** Logo + descrição + email + telefone
**Col 2:** Links das páginas
**Col 3:** Endereço + horários online ao vivo
**Rodapé:** © 2025 Instituto Evangelístico Charley Huffman — IECH.

---

## Informações do Instituto

- **Sede:** Rua Joaquim Bonifácio, 816, Jd. Alterosa, Betim/MG
- **Email:** institutoech@gmail.com
- **Telefone:** (31) 4127-3345
- **Fundado:** 2010
- **Diretores:** Giovanni Vantuil · Paul K. Dawson
- **Bíblia:** 2 Timóteo 2:2

---

## Modalidades e Horários

| Modalidade        | Horário          | Dias      |
|-------------------|------------------|-----------|
| Presencial        | Manhã e Noite    | Seg a Sex |
| Online ao Vivo Manhã | 08h00–11h40  | Seg a Sex |
| Online ao Vivo Noite | 19h30–21h30  | Seg a Sex |

---

## Professores Fixos (nesta ordem)

1. K. Paul Dawson
2. Giovanni Vantuil
3. Anísio Isidoro
4. Eudúcio dos Santos
5. Brian Henrique
6. Evandir
7. Gisele Aleixo

**Convidados:** Ken Lewis · F. H. Gates

**Avatar:** fundo `#0C2D6B`, letras `#C8A84B`, iniciais do nome.

---

## Pendências Conhecidas

- [ ] Fotos reais dos professores (substituir avatares com iniciais)
- [ ] Depoimentos reais dos seminaristas (substituir os fictícios)
- [ ] Verificar/atualizar links do Google Drive periodicamente

---

## Hospedagem

- **Hostgator Plano M** — upload via FTP
- **Sem** WordPress, banco de dados, Node.js ou frameworks pesados
- Todos os arquivos estáticos (HTML, CSS, JS, imagens)

---

*Atualizado em março de 2026 — Instituto Evangelístico Charley Huffman*
