
# Redesign: Estilo Brasileiro Artesanal com Fundo Creme

## Visao Geral

Transformar a agenda cultural para um design artesanal brasileiro moderno, mantendo toda a estrutura funcional. O fundo sera em tons creme/off-white acolhedores, com tags coloridas vibrantes e elementos "feitos a mao" que trazem imperfeicao proposital.

---

## Nova Paleta de Cores

### Fundo e Base
| Elemento | Cor Atual | Nova Cor |
|----------|-----------|----------|
| Background principal | #0f0f11 (cinza escuro) | #FDF8F3 (creme claro) |
| Background secundario | cinza escuro | #F5EDE4 (bege suave) |
| Cards | cinza escuro | #FFFBF5 (off-white) |
| Texto principal | branco | #2D1810 (marrom escuro) |
| Texto secundario | cinza claro | #6B5B4F (marrom medio) |

### Tags de Eventos - Paleta Vibrante Brasileira
Uma paleta rica e diversificada inspirada em festas populares, tropicalismo e arte brasileira:

| Tipo | Cor Atual | Nova Cor | Inspiracao |
|------|-----------|----------|------------|
| Musica | Rosa | #E91E63 (Magenta intenso) | Carnaval |
| Teatro | Roxo | #7C3AED (Violeta) | Cortinas de palco |
| Cinema | Azul | #0891B2 (Ciano) | Tela de projecao |
| Arte | Verde | #10B981 (Verde esmeralda) | Mata Atlantica |
| Danca | Laranja | #F97316 (Laranja vibrante) | Forro/Frevo |
| Literatura | Amarelo | #EAB308 (Amarelo ouro) | Cordel |
| Festival | Vermelho | #DC2626 (Vermelho festa) | Sao Joao |
| Workshop | Turquesa | #14B8A6 (Turquesa) | Artesanato |

---

## Tipografia

Substituir fontes corporativas por fontes com carater mais organico:

- **Titulos**: Pacifico (cursiva, estilo hand-drawn) para titulos principais
- **Subtitulos**: Nunito Bold (arredondada, amigavel)
- **Corpo**: Nunito Regular (legivel, humanista)

---

## Elementos de Design Artesanal

### Rotacoes e Imperfeicao
- Tags levemente rotacionadas (-3deg a 3deg)
- Cards com sombras coloridas suaves
- Bordas levemente irregulares usando clip-path

### Decoracoes Visuais
- Linhas onduladas desenhadas a mao
- Raios de sol estilizados
- Formas organicas como separadores
- Molduras decorativas estilo cartaz popular

### Sombras Coloridas
Em vez de sombras pretas, usar sombras com tom da cor predominante do elemento:
```text
box-shadow: 4px 4px 0px #cor-da-tag
```

---

## Arquivos a Modificar

### 1. src/index.css
Atualizacoes:
- Nova paleta de cores creme/bege para fundo
- Tags com cores vibrantes brasileiras
- Remover tema dark
- Adicionar fontes Pacifico e Nunito
- Classes para efeitos artesanais (rotacoes, sombras coloridas)
- Remover gradientes escuros

### 2. tailwind.config.ts
Atualizacoes:
- Novas font families
- Cores atualizadas para tema claro
- Novas cores de tags vibrantes
- Utilities customizadas para rotacoes

### 3. src/components/DecorativeElements.tsx (novo)
Componentes SVG reutilizaveis:
- Linha ondulada decorativa
- Raios de sol
- Moldura organica
- Separadores estilizados

### 4. src/components/Hero.tsx
Mudancas:
- Background creme com decoracoes coloridas
- Titulo em fonte Pacifico
- Texto em marrom escuro
- Elementos decorativos (ondas, raios)
- Botoes com estilo mais organico

### 5. src/components/Header.tsx
Mudancas:
- Background creme claro
- Logo mais colorido e artesanal
- Navegacao com texto marrom
- Remover efeito blur escuro

### 6. src/components/EventCard.tsx
Mudancas:
- Card com fundo off-white
- Sombra colorida baseada no tipo de evento
- Bordas levemente irregulares
- Tag posicionada com rotacao sutil
- Texto em tons de marrom

### 7. src/components/EventTag.tsx
Mudancas:
- Novas cores vibrantes
- Formato de fita/banner com rotacao
- Texto sempre escuro ou claro conforme contraste
- Borda/sombra estilo "recorte de papel"

### 8. src/components/EventCalendar.tsx
Mudancas:
- Fundo off-white
- Indicadores coloridos
- Bordas mais suaves e organicas
- Estilo mais acolhedor

### 9. src/components/EventFilter.tsx
Mudancas:
- Tags coloridas como filtros
- Layout mais solto
- Espacamento organico

### 10. src/components/FeaturedEvents.tsx
Mudancas:
- Background com decoracoes
- Titulo estilizado
- Elementos decorativos laterais

### 11. src/components/Footer.tsx
Mudancas:
- Background bege
- Cores invertidas (texto escuro)
- Icones coloridos

### 12. src/types/event.ts
Atualizacao:
- Novas cores de tags no eventTypeColors

---

## Detalhes Tecnicos

### Import de Fontes (index.css)
```css
@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Nunito:wght@400;600;700&display=swap');
```

### Clip-path para Bordas Organicas
```css
.organic-shape {
  clip-path: polygon(1% 2%, 99% 0%, 100% 98%, 0% 100%);
}
```

### Sombras Coloridas por Tipo
```css
.shadow-music { box-shadow: 4px 4px 0px #E91E63; }
.shadow-theater { box-shadow: 4px 4px 0px #7C3AED; }
/* etc */
```

### Rotacoes Aleatorias
```tsx
const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2'];
const randomRotation = rotations[index % rotations.length];
```

---

## Resultado Esperado

Uma landing page que transmite:
- Acolhimento e calor brasileiro
- Alegria atraves de cores vibrantes nas tags
- Imperfeicao proposital que parece "feito a mao"
- Modernidade com raizes populares
- Legibilidade com fundo claro e contraste adequado
- Identidade visual unica e memoravel
