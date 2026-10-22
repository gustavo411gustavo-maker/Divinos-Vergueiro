# Divinos Vergueiro Restaurante & Happy Hour

Site estático do restaurante **Divinos Vergueiro** (Rua Vergueiro, 133, Liberdade, São Paulo): cardápio completo com preços, sacola de pedido, reserva de mesa e como chegar, tudo integrado ao WhatsApp. Feito só com HTML, CSS e JavaScript puro, sem frameworks e sem build.

## Funcionalidades

- Tela inicial com o nome do restaurante e atalhos para **Ver cardápio**, **Reservar mesa** e **Como chegar**
- **Cardápio** por abas (pratos do dia, à la carte, lanches, porções, bebidas, drinks e bar), carregado do `RAW` em `js/script.js`
- **Sacola**: botão **+** em cada item, ajuste de quantidades, total e envio do pedido pelo WhatsApp (a sacola fica salva no navegador)
- **Reserva de mesa** com nome, data, horário e pessoas, enviada pelo WhatsApp
- **Como chegar** com mapa do Google embutido e links para Google Maps e Waze
- Galeria de fotos e botão flutuante de WhatsApp
- Layout responsivo, pensado primeiro para celular

## Estrutura

```
├── index.html        # Página principal
├── css/
│   └── style.css     # Estilos
├── js/
│   └── script.js     # Lógica do catálogo e sacola
├── img/              # Fotos dos pratos e logo
└── README.md
```

## Como rodar

Abra o `index.html` no navegador. Se preferir um servidor local:

```bash
python3 -m http.server 8000
# acesse http://localhost:8000
```

## Como personalizar

**WhatsApp:** no topo de `js/script.js`, altere a constante `WA` (DDI + DDD + número, só dígitos). O número atual é o de delivery e reservas do cardápio impresso.

**Cardápio:** edite o texto `RAW` em `js/script.js`. Cada linha segue este formato:

```
# Nome da aba
## Nome da seção
!Observação exibida em itálico
Nome do prato|48|descrição opcional
```

**Fotos e logo:** coloque as imagens em `img/` e ajuste os nomes em `index.html` (galeria) e em `css/style.css` (imagem do topo, `bar.jpg`). Para usar o logo, adicione `img/logo.png` e inclua uma tag `<img>` no topo do `index.html`.

**Horários e endereço:** estão em `index.html`, nas seções do topo, **Como chegar** e rodapé.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie os arquivos:
   ```bash
   git init
   git add .
   git commit -m "Site Divinos Vergueiro"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/divinos-vergueiro.git
   git push -u origin main
   ```
2. No repositório, abra **Settings → Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**, branch `main` e pasta `/ (root)`.
4. Após alguns minutos o site fica em `https://SEU-USUARIO.github.io/divinos-vergueiro/`.

Para usar um domínio próprio, configure-o na mesma tela (**Custom domain**).

## Observações

- Preços e itens vieram do cardápio em PDF do restaurante. Confira e atualize sempre que o cardápio mudar.
- Meia porção e omelete têm regras de cobrança descritas nas observações do cardápio.

## Contato

Rua Vergueiro, 133, Liberdade, São Paulo - SP, 01504-001
Instagram e Facebook: @divinosvergueiro
