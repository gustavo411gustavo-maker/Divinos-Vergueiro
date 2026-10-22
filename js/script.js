/* Divinos Vergueiro: cardápio, sacola e reserva por WhatsApp
   Para editar: número do WhatsApp (WA) e itens do cardápio (RAW) logo abaixo. */

// Número com DDI + DDD, só dígitos
const WA = '5511960163711';

/* Formato do cardápio:
   "# Aba"  "## Seção"  "!Observação"  "Nome|preço|descrição (opcional)" */
const RAW = `# Pratos do dia
## Segunda-feira
Virado à paulista|48|arroz, tutu, couve, torresmo, ovo e calabresa
Fraldinha ao molho dijon|44|arroz e polenta frita
Bife ancho à mineira|69|arroz de brócolis e legumes
Galeto assado|44|arroz de brócolis e purê de abóbora
## Terça-feira
Bife à rolê|48|arroz à grega e purê
Strogonoff de filé-mignon|61|arroz e batata palha
Frango à milanesa com creme de milho|52|arroz de brócolis e legumes
Bife de chorizo|64|espaguete ao alho e óleo
## Quarta-feira
Feijoada p/ 1 pessoa|51
Feijoada p/ 2 pessoas|82
Guarnição de feijoada|39|arroz, couve, torresmo, farofa, laranja, limão, bisteca e banana à milanesa
Cupim ao molho roti|46|arroz e feijão tropeiro
## Quinta-feira
Lasanha à bolonhesa|44|arroz e fritas
Nhoque ao molho sugo|46|opção de grelhado: filé de frango, contrafilé ou calabresa
Costela bovina assada|48|arroz, purê de batata e vinagrete de feijão de corda
Filé-mignon ao chateaubriand|79|talharim ao molho 4 queijos
Rabada|69|arroz e polenta cremosa
## Sexta-feira
Filé de tilápia ao molho de camarão|48|arroz à grega e purê de batata
Espetinho à brasileira|46|arroz, feijão tropeiro, farofa e vinagrete
Strogonoff de frango|40|arroz e batata palha
Costelinha suína ao molho barbecue|73|baião de dois e mandioca cremosa
## Sábado
Feijoada p/ 1 pessoa|51
Feijoada p/ 2 pessoas|92
Guarnição de feijoada|39|arroz, couve, torresmo, farofa, laranja, limão, bisteca e banana à milanesa
Picanha grelhada|79|baião de dois e mandioca cremosa
## Domingo
Escondidinho de carne seca|54|arroz e fritas
Filé mignon ao molho gorgonzola|79|arroz com amêndoas e batata rústica
Picanha grelhada|79|arroz carreteiro e mandioca cremosa
# À la carte
## Grelhados
!Acompanha arroz, feijão, fritas e salada
Filé de frango|42
Contrafilé|55
Hambúrguer gourmet|50|2 hambúrgueres tradicionais ou veganos
Fígado acebolado|39
Calabresa|39
Bisteca|39
## Grelhados nobres
!Escolha 2 acompanhamentos: arroz branco, arroz biro biro, fritas, legumes, feijão e purê
Bife de chorizo|65
Bife ancho|65
Picanha|79
Filé-mignon|79
## À milanesa
!Acompanha arroz, feijão e fritas
Filé de frango|48
Contrafilé|62
Filé-mignon|77
Berinjela|42
## À parmegiana
!Acompanha arroz e fritas
Filé de frango|54
Contrafilé|67
Filé-mignon|83
Berinjela|46
## Peixes
Filé de tilápia grelhada|52|arroz e purê
Pescada à dorê|54|arroz e legumes assados
Salmão ao molho de maracujá ou alcaparras|78|arroz com brócolis e purê
## Risotos
!Funghi, parmesão, caprese, alho poró ou palmito
Mignon|79
Picanha|79
Salmão|79
Contrafilé|64
Chorizo|69
Bife ancho|69
Camarão|68
## Omelete
!Acompanha arroz, feijão e fritas. Somente omelete: 70% do valor do prato
Simples|38|queijo, tomate e cebola
Misto|47|presunto, queijo, tomate e cebola
Light|49|peito de peru, queijo branco, palmito, tomate e cebola
## Saladas
Salada completa|44|alface, tomate, cebola, beterraba, cenoura, milho, ervilha, palmito, mussarela, presunto, ovos de codorna e azeitonas
Salada ceasar|44|alface americana, tiras de frango, queijo parmesão, croutons e molho ceasar
Salada verão|44|folhas verdes, tomate, cebola roxa, frutas, molho da casa
## Saladas lights + grelhados
!Alface, tomate, cebola, pepino, cenoura, beterraba, azeitona, palmito e ovos de codorna
Salmão|68
Filé de frango|36
Contrafilé|53
Filé-mignon|75
Picanha|75
# Lanches
## Beirutes
!Acompanha fritas
Divino’s|72|picanha, queijo prato, presunto, ovo, bacon, alface, tomate e maionese
Mooca|53|peito de peru, queijo branco, ovo, alface, tomate e maionese
Cambuci|72|filé-mignon, queijo prato, presunto, ovo, bacon, alface, tomate e maionese
Paraíso|62|contrafilé, queijo prato, presunto, ovo, bacon, alface, tomate e maionese
Liberdade|62|hambúrguer, queijo prato, presunto, ovo, bacon, alface, tomate e maionese
Brás|54|filé de frango, queijo prato, presunto, ovo, bacon, alface, tomate e maionese
São Joaquim|47|calabresa, queijo prato, presunto, ovo, bacon, alface, tomate e maionese
## Burgers 150g
!Artesanais, acompanham fritas e maionese da casa
Simples|28
Cheese burguer|30
Cheese maionese|33
Cheese salada|35
Cheese bacon|36
Cheese bacon salada|38
Cheese bacon egg|38
Cheese bacon egg salada|40
Cheese egg|38
Cheese egg salada|40
Cheese tudo|43
Cheese Catupiry|38
Cheese tudo no prato|43
## Burgers especiais 150g
Divino’s bacon|47|pão brioche, hambúrguer, queijo cheddar, bacon, anéis de cebola, alface americana, tomate
Divino’s cheddar|47|pão brioche, hambúrguer, queijo cheddar, cebola caramelizada, alface americana, tomate
Divino’s chicken|47|pão brioche, hambúrguer de frango, queijo cheddar, bacon, alface americana, tomate
## Lanches tradicionais
Americano|24
Bauru|22
Misto quente|19
Misto frio|19
Provolone|23
Queijo branco|19
Queijo quente|18
Salame c/ queijo|25
Calabresa c/ queijo e vinagrete|24
Churrasco simples|25
Churrasco c/ queijo e vinagrete|29
Filé de frango c/ queijo e vinagrete|27
Filé de frango simples|22
Filé-mignon com queijo|47
Picanha com queijo|47
## Lanches naturais
Queijo branco|22|alface, tomate e orégano
Peito de peru|26|queijo branco, alface e tomate
# Porções
!Meia porção: 70% do valor da porção inteira
Chapa mista|103|contrafilé, calabresa e frango
Calabresa acebolada|79
Carne seca desfiada|103|com mandioca e queijo coalho
Contrafilé|95
Frango à passarinho|80
Fritas|48
Batata c/ cheddar e bacon|73
Isca de peixe à milanesa|72
Mandioca cremosa|48
Polenta com parmesão|52
Provolone à milanesa|80
Camarão ao alho e óleo|140
Camarão crocante|150
Salame|65
Minipastéis (10 unid)|60
Picanha aperitivo|125
Filé-mignon aperitivo|125
Isca de frango à milanesa|62
Dadinho tapioca|55
Torresmo de rolo|72
Tábua de frios|83
Azeitonas|38
Croquete costela|57
Bolinho baião de dois|57
# Sem álcool & sobremesas
## Bebidas
Chá da casa (pêssego ou limão)|15
H2Oh! (limão, limoneto)|10
Água de coco|10
Água com gás|8
Água sem gás|7
Del Valle lata|9
Gatorade|13
Refrigerante lata 350ml|9
Refrigerante 600ml|13
Coco verde|13
## Sucos e vitaminas
!Frutas: abacaxi, acerola, cajá, frutas vermelhas, goiaba, graviola, kiwi, laranja, limão, mamão, manga, maracujá, melancia, morango
Suco 1 fruta|13
Suco 2 frutas|15
Suco 1 fruta c/ leite|17
Suco 2 frutas c/ leite|19
Vitamina mista|20|abacate, banana, maçã e mamão
Suco de açaí|22
Suco de açaí c/ leite|24
Limonada suíça|17
## Sucos detox
Abacaxi|20|abacaxi, hortelã, raspas de limão e água de coco
Laranja detox|20|laranja, cenoura, maçã, limão e gengibre
Magali|20|melancia, limão, gengibre e farinha de linhaça
Beta|20|laranja, beterraba e cenoura
Verde|20|laranja, couve e gengibre
Hulk|20|couve, limão, gengibre e água de coco
## Açaí na tigela
!Acompanha granola e leite condensado
Açaí na tigela|26
Adicional: morango, banana, abacaxi, kiwi ou mel|8
## Sobremesas
Petit gâteau|25
Creme de papaia com cassis|21
Abacaxi com raspas de limão|15
Salada de frutas|18
Explosão Divinos|19
Taça de sorvete|18
Pudim fatia|13
Cocada cremosa|29
# Drinks & gins
## Caipirinhas Divino’s
!Sabores: da quebrada, sabor do sertão, 3 limões, a nega, 3 uvas, tropicália, pitaya rosa, ana kiwi, maria beijoqueira, frutas vermelhas, frutas amarelas, tangerina com maracujá e pimenta dedo de moça, capim santo, ou tradicionais (limão, maracujá, abacaxi, morango, kiwi, melancia, uva ou caju). Preço conforme a base:
Cachaça Cabaré|37
Saquê|37
Smirnoff|43
Absolut|44
Cîroc|47
Belvedere|47
Grey Goose|47
## Drinks
Cosmopolitan|39|vodka, suco de limão e cranberry
Moscow mule|42|suco de limão, xarope de gengibre, vodka, gelo e espuma 3 limões
Margarita|39|tequila, limão, curaçau blue, cointreau e sal à borda
Sex on the beach|39|vodka, suco de laranja, licor de pêssego e groselha
Sex en la luna|39|leite condensado, curaçau blue, cointreau e suco de abacaxi
Espanhola|39|vinho, abacaxi e leite condensado
Piña colada|39|bacardi, leite de coco, suco de abacaxi e leite condensado
Mojito|39|bacardi, hortelã, limão e soda antarctica
Mojito morango|39|bacardi, hortelã e morango
Tequila frozen|41|tequila, morango e gelo
Maracujá jack|45|jack daniel’s, maracujá e tangerina
Negroni|39|vermute, gim, campari e laranja
Aperol spritz|39|aperol espumante, citrus e fatias de laranja
Ballon|43|licor 43, limão siciliano e schweppes citrus
Whisky & red bull|43
Vodka & red bull|43
## Gins
!Sabores: tônica, summer, tangerine, maçã verde, amora, de pitaya, tropical, das patroas, caju, lagoa azul, afrodite, moscow, tônica fresh. Preço conforme o gin:
Gin Gordon’s|39
Gin Tanqueray|49
Gin Bombay|51
Gin Bulldog|58
# Bar
## Cervejas
Chopp Brahma 350ml|18
Long neck Stella|16
Long neck Heineken|17
Long neck Skol Beats|17
Long neck Corona|19
600ml Serramalte|20
600ml Original|20
600ml Spaten|20
600ml Stella|20
600ml Heineken|25
## Aperitivos
Bacardi|16
Licor 43|29
Tequila prata|20
Tequila ouro|22
Jägermeister|27
Licor amarula|20
Campari|17
Contini|12
Domecq|14
Fundador conhaque|16
Licor de cacau|14
Licor frangelico|24
Maria mole|14
Steinhaeger Becosa|17
## Energético
Red Bull sabores|20|energy drink, sugar free, tropical e melancia
## Vodkas
Smirnoff|20
Absolut|25
Cîroc|30
Belvedere|40
Grey Goose|40
## Cachaças
Cabaré ouro|19
Cabaré amburana|19
Cabaré prata|19
Seleta|20
Ypióca|17
Boazinha|20
Salinas|18
Busca Vida|20
## Whisky
Johnnie Walker Red Label|30
Johnnie Walker Black Label|37
Johnnie Walker Gold Label|47
Johnnie Walker Green Label|60
Johnnie Walker Blue Label|200
Ballantine’s 12 anos|30
Buchanan’s 12 anos|34
Chivas Regal 12 anos|34
Jack Daniel’s|36
Royal Salute|150`;

/* ===== Utilitários ===== */
const wa = t => `https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
const brl = n => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const esc = s => s.replace(/[&<>]/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[m]));
const $ = id => document.getElementById(id);

document.querySelectorAll('[data-wa]').forEach(a => a.href = wa(a.dataset.wa));

/* ===== Catálogo ===== */
const tabs = [];
const catalog = {};
let uid = 0;
RAW.split('\n').forEach(l => {
  if (!l.trim()) return;
  if (l.startsWith('## ')) { const t = tabs.at(-1); t.sec = l.slice(3); t.rows.push({ t: 's', x: l.slice(3) }); }
  else if (l.startsWith('# ')) tabs.push({ n: l.slice(2), sec: '', rows: [] });
  else if (l.startsWith('!')) tabs.at(-1).rows.push({ t: 'n', x: l.slice(1) });
  else {
    const t = tabs.at(-1);
    const [a, b, c] = l.split('|');
    const id = 'p' + uid++;
    catalog[id] = { name: a, price: Number(b.replace(',', '.')), ctx: t.sec };
    t.rows.push({ t: 'i', id, a, b, c });
  }
});

const tabsEl = $('tabs'), menuEl = $('menu');
function show(i) {
  [...tabsEl.children].forEach((b, j) => b.classList.toggle('on', i === j));
  menuEl.innerHTML = tabs[i].rows.map(r =>
    r.t === 's' ? `<div class="sub">${esc(r.x)}</div>` :
    r.t === 'n' ? `<p class="note">${esc(r.x)}</p>` :
    `<div class="item"><div><b>${esc(r.a)}</b>${r.c ? `<small>${esc(r.c)}</small>` : ''}</div>
     <div class="rt"><span class="pr">R$ ${r.b}</span><button class="add" data-id="${r.id}" aria-label="Adicionar ${esc(r.a)} à sacola">+</button></div></div>`
  ).join('');
}
tabs.forEach((t, i) => {
  const b = document.createElement('button');
  b.className = 'tab'; b.textContent = t.n; b.onclick = () => show(i);
  tabsEl.appendChild(b);
});
show(0);

/* ===== Sacola ===== */
let bag = {};
try { bag = JSON.parse(localStorage.getItem('divinos-bag') || '{}'); } catch (e) { bag = {}; }
Object.keys(bag).forEach(k => { if (!catalog[k]) delete bag[k]; });

const save = () => { try { localStorage.setItem('divinos-bag', JSON.stringify(bag)); } catch (e) {} };
const bagItems = () => Object.entries(bag).map(([id, q]) => ({ ...catalog[id], id, q }));

function renderBag() {
  const list = bagItems();
  const total = list.reduce((s, i) => s + i.price * i.q, 0);
  const count = list.reduce((s, i) => s + i.q, 0);
  $('bagCount').textContent = count;
  $('bagTotal').textContent = brl(total);
  $('bagList').innerHTML = list.length ? list.map(i => `
    <div class="bl"><div><b>${esc(i.name)}</b>${i.ctx ? `<small>${esc(i.ctx)}</small>` : ''}
      <div class="qty"><button data-d="-1" data-id="${i.id}" aria-label="Diminuir">−</button><span>${i.q}</span><button data-d="1" data-id="${i.id}" aria-label="Aumentar">+</button></div></div>
      <span class="pr">${brl(i.price * i.q)}</span></div>`).join('')
    : '<p class="empty">Sua sacola está vazia.<br>Toque no + ao lado dos itens do cardápio.</p>';
  const send = $('bagSend');
  send.classList.toggle('off', !list.length);
  const note = $('bagNote').value.trim();
  const lines = list.map(i => `• ${i.q}x ${i.name}${i.ctx ? ' (' + i.ctx + ')' : ''} - ${brl(i.price * i.q)}`);
  send.href = list.length ? wa(`Olá! Gostaria de fazer um pedido:\n${lines.join('\n')}\n\nTotal: ${brl(total)}${note ? '\nObs.: ' + note : ''}`) : '#';
  save();
}
function change(id, d) {
  bag[id] = (bag[id] || 0) + d;
  if (bag[id] <= 0) delete bag[id];
  renderBag();
}
function drawer(open) {
  $('drawer').classList.toggle('on', open);
  $('overlay').classList.toggle('on', open);
  $('drawer').setAttribute('aria-hidden', String(!open));
}
menuEl.addEventListener('click', e => { const b = e.target.closest('.add'); if (b) { change(b.dataset.id, 1); b.textContent = '✓'; setTimeout(() => b.textContent = '+', 600); } });
$('bagList').addEventListener('click', e => { const b = e.target.closest('[data-d]'); if (b) change(b.dataset.id, Number(b.dataset.d)); });
$('bagOpen').onclick = () => drawer(true);
$('bagClose').onclick = $('overlay').onclick = () => drawer(false);
$('bagClear').onclick = () => { bag = {}; renderBag(); };
$('bagNote').addEventListener('input', renderBag);
document.addEventListener('keydown', e => { if (e.key === 'Escape') drawer(false); });
renderBag();

/* ===== Reserva por WhatsApp ===== */
function updReserva() {
  const n = $('rn').value.trim() || '(nome)';
  const d = $('rd').value ? $('rd').value.split('-').reverse().join('/') : '(data)';
  const h = $('rh').value || '(horário)';
  const p = $('rp').value || '2';
  $('rbtn').href = wa(`Olá! Gostaria de reservar uma mesa no Divinos Vergueiro.\nNome: ${n}\nData: ${d}\nHorário: ${h}\nPessoas: ${p}`);
}
['rn', 'rd', 'rh', 'rp'].forEach(id => $(id).addEventListener('input', updReserva));
updReserva();
