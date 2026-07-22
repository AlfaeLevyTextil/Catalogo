/* ═══════════════════════════════════════════════════════════════
   BOOK DATA — js/book-data.js
   Dados do lookbook: lista de tecidos e instruções de lavagem.

   BOOK_DATA → para adicionar tecido ao book, inclua a chave aqui.
   WASH_DATA → personalize os ícones de lavagem por tecido.

   Estrutura de cada tecido em BOOK_DATA:
   CHAVE: {
     name      : 'Nome Exibido',
     category  : 'LISOS' | 'TEXTURIZADOS' | 'TRAMAS' | 'ESTAMPADOS',
     tag       : 'Segmento · Segmento',
     bookPages : <nº de fotos do book (pasta images/book/CATEGORIA/CHAVE/)>,
   }
   ═══════════════════════════════════════════════════════════════ */

const BOOK_DATA = {
  // ── LISOS ────────────────────────────────────────────────────
  ATLETIKA:                { name:'Atletika',                category:'LISOS',        tag:'Fitness · Moda Casual',           bookPages:0 },
  CIRRE:                  { name:'Cirré',                  category:'LISOS',        tag:'Moda Praia · Moda Casual',        bookPages:0 },
  CORTA_VENTO_AMASSADO:     { name:'Corta Vento Amassado',   category:'LISOS',        tag:'',                                bookPages:0 },
  CORTA_VENTO_REFLETIVO:    { name:'Corta Vento Refletivo',  category:'LISOS',        tag:'',                                bookPages:0 },
  DEMI:                    { name:'Demi',                    category:'LISOS',        tag:'Fitness · Moda Casual',           bookPages:0 },
  DRY_FIT:                 { name:'Dry Fit',                 category:'LISOS',        tag:'Fitness · Esportivo',             bookPages:0 },
  DRY_FIT_LISTRADO:         { name:'Dry Fit Listrado',        category:'LISOS',        tag:'Fitness · Esportivo',             bookPages:0 },
  DRY_SPORT:                { name:'Dry Sport',              category:'LISOS',        tag:'Fitness · Esportivo',             bookPages:0 },
  DRY_TECH:                 { name:'Dry Tech',                category:'LISOS',        tag:'Fitness · Esportivo',             bookPages:0 },
  FLICKER_METALIZADO:        { name:'Flicker Metalizado',      category:'LISOS',        tag:'Fitness · Moda Casual',           bookPages:0 },
  FORRO_COLMEIA:            { name:'Forro Colmeia',         category:'LISOS',        tag:'Forro · Moda Praia',              bookPages:0},
  FORRO_TRADICIONAL:        { name:'Forro Tradicional',     category:'LISOS',        tag:'Forro · Moda Praia',              bookPages:0 },
  LIRUS:                  { name:'Lirus',                  category:'LISOS',        tag:'Fitness · Moda Casual',           bookPages:0 },
  LUNA:                   { name:'Luna',                   category:'LISOS',        tag:'Moda Praia · Moda Casual',           bookPages:0 },
  LYCRA_5058:                { name:'Lycra 5058',              category:'LISOS',        tag:'Moda Praia · Moda Casual',           bookPages:0 },
  LYCRA_5371:                { name:'Lycra 5371',              category:'LISOS',        tag:'Moda Praia · Moda Casual',           bookPages:0 },
  MICROFIBRA_JERSINYL:          { name:'Microfibra Jersinyl',     category:'LISOS',        tag:'Moda Praia · Moda Casual',           bookPages:0 },
  NAGOYA:                  { name:'Nagoya',                  category:'LISOS',        tag:'Moda Praia · Moda Casual',           bookPages:0 },
  NAKAY:                   { name:'Nakay',                   category:'LISOS',        tag:'Moda Praia · Moda Casual',           bookPages:0 },
  NEW_TRIP:               { name:'New Trip',               category:'LISOS',        tag:'Fitness · Moda Casual',           bookPages:0 },
  NEW_ZEALAND:                { name:'New Zealand',             category:'LISOS',        tag:'Fitness · Moda Casual',           bookPages:0 },
  SANTA_CONSTANCIA:         { name:'Light Santa Constância',      category:'LISOS',        tag:'Moda Praia · Moda Casual',           bookPages:0 },
  SATURNO:              { name:'Saturno',                 category:'LISOS',        tag:'Moda Praia · Moda Casual',           bookPages:0 },
  SUPLEX_POWER:             { name:'Suplex Power',            category:'LISOS',        tag:'Fitness · Moda Casual',           bookPages:0 },
  TRILOBAL_BEACH:             { name:'Trilobal Beach',          category:'LISOS',        tag:'Moda Praia · Moda Casual',           bookPages:0 },
  TRILOBAL_FIT:               { name:'Trilobal Fit',            category:'LISOS',        tag:'Fitness · Moda Casual',           bookPages:0 },

  // ── TRAMAS ───────────────────────────────────────────────────
  MACRAME:                { name:'Macramê',                category:'TRAMAS',       tag:'Moda Praia · Moda',               bookPages:0 },
  MACRAME_PALMER:         { name:'Macramê Franja Palmer',  category:'TRAMAS',       tag:'Moda Praia · Moda Casual',        bookPages:0 },
  TELA_FIT_POLIESTER:       { name:'Tela Fit Poliéster',     category:'TRAMAS',       tag:'Fitness · Esportivo',             bookPages:0 },

  // ── TEXTURIZADOS ─────────────────────────────────────────────
  ANARRUGA_BRILHANTE:     { name:'Anarruga Brilhante',     category:'TEXTURIZADOS', tag:'Moda Praia · Lingerie',           bookPages:0 },
  ANARRUGA_PRAIA:         { name:'Anarruga Praia',         category:'TEXTURIZADOS', tag:'Moda Praia',                      bookPages:0 },
  AREZZO:                 { name:'Arezzo',                 category:'TEXTURIZADOS', tag:'Moda Praia · Moda Casual',        bookPages:0 },
  BOUCLE:                 { name:'Bouclê',                 category:'TEXTURIZADOS', tag:'Moda · Moda Praia',               bookPages:0 },
  BOUCLE_NERVUS:          { name:'Bouclê Nervus',          category:'TEXTURIZADOS', tag:'Moda · Moda Praia',               bookPages:0 },
  BOUCLE_PETALAS:         { name:'Bouclê Pétalas',         category:'TEXTURIZADOS', tag:'Moda · Moda Praia',               bookPages:0 },
  CANCUN:                 { name:'Cancún',                 category:'TEXTURIZADOS', tag:'Moda Praia · Moda Casual',        bookPages:0 },
  CANELADO_BLACKOUT:      { name:'Canelado Blackout',      category:'TEXTURIZADOS', tag:'Moda Praia · Moda',               bookPages:0 },
  CANELADO_DE_COMPRESSAO: { name:'Canelado Compressão',    category:'TEXTURIZADOS', tag:'Fitness · Moda Praia',            bookPages:0 },
  CANELADO_DIAGONAL:      { name:'Canelado Diagonal',      category:'TEXTURIZADOS', tag:'Moda Praia · Moda',               bookPages:0 },
  CANELADO_EDEN:          { name:'Canelado Eden',          category:'TEXTURIZADOS', tag:'Moda Praia · Fitness',            bookPages:0 },
  CANELADO_FUJI:          { name:'Canelado Fuji',          category:'TEXTURIZADOS', tag:'Moda Praia',                      bookPages:0 },
  CANELADO_LENATEX:       { name:'Canelado Lenatex',       category:'TEXTURIZADOS', tag:'Lingerie · Moda',                 bookPages:0 },
  CANELADO_PILLE:         { name:'Canelado Pille',         category:'TEXTURIZADOS', tag:'Fitness · Esportivo',             bookPages:0 },
  CANELADO_POLIESTER:     { name:'Canelado Poliéster',     category:'TEXTURIZADOS', tag:'Fitness · Esportivo',             bookPages:0 },
  CANELADO_POWER:         { name:'Canelado Power',         category:'TEXTURIZADOS', tag:'Fitness · Lingerie',              bookPages:0 },
  CANELADO_TREND_MOVE:    { name:'Canelado Trend Move',    category:'TEXTURIZADOS', tag:'Fitness · Moda Praia',            bookPages:0 },
  CANELADO_WONDER:        { name:'Canelado Wonder',        category:'TEXTURIZADOS', tag:'Fitness · Lingerie',              bookPages:0 },
  CARMEL:                 { name:'Carmel',                 category:'TEXTURIZADOS', tag:'Fitness · Moda Praia · Casual',   bookPages:0 },
  CREPINHO:               { name:'Crepinho',               category:'TEXTURIZADOS', tag:'Moda · Moda Praia',               bookPages:0 },
  CREPONADO:              { name:'Creponado',              category:'TEXTURIZADOS', tag:'Moda Praia',                      bookPages:0 },
  CROCHE_SANTORINI:       { name:'Crochê Santorini',       category:'TEXTURIZADOS', tag:'Moda Praia · Moda',               bookPages:0 },
  CROCHETE:               { name:'Crochete',               category:'TEXTURIZADOS', tag:'Moda Praia · Fitness',            bookPages:0 },
  CRUNCH_LISTRADO:        { name:'Crunch Listrado',        category:'TEXTURIZADOS', tag:'Moda Praia · Moda Casual',        bookPages:0 },
  CRUNCH_POA:             { name:'Crunch Poá',             category:'TEXTURIZADOS', tag:'Moda Praia · Moda Casual',        bookPages:0 },
  DIAMOND:                { name:'Diamond',                category:'TEXTURIZADOS', tag:'Fitness · Lingerie',              bookPages:0 },
  DOTS:                   { name:'Dots',                   category:'TEXTURIZADOS', tag:'Moda Praia · Moda Casual',        bookPages:0 },
  JACQUARD_ALGAE:         { name:'Jacquard Algae',         category:'TEXTURIZADOS', tag:'Moda Praia · Moda Casual',        bookPages:0 },
  JACQUARD_ARTSAN:        { name:'Jacquard Artsan',        category:'TEXTURIZADOS', tag:'Moda Praia · Moda Casual',        bookPages:0 },
  JACQUARD_BROCADO:       { name:'Jacquard Brocado',       category:'TEXTURIZADOS', tag:'Moda Praia · Fitness',            bookPages:0 },
  JACQUARD_CONCHAS:       { name:'Jacquard Conchas',       category:'TEXTURIZADOS', tag:'Moda Praia · Moda',               bookPages:0 },
  JACQUARD_CONCHINHAS:    { name:'Jacquard Conchinhas',    category:'TEXTURIZADOS', tag:'Moda Praia · Moda',               bookPages:0 },
  JACQUARD_DEGRADE:       { name:'Jacquard Degradê',       category:'TEXTURIZADOS', tag:'Moda Praia · Moda',               bookPages:0 },
  JACQUARD_GITA:          { name:'Jacquard Gita',          category:'TEXTURIZADOS', tag:'Moda Praia · Moda',               bookPages:0 },
  JACQUARD_KASHIMIR:      { name:'Jacquard Kashimir',      category:'TEXTURIZADOS', tag:'Moda Praia · Moda',               bookPages:0 },
  JACQUARD_LEAF:          { name:'Jacquard Leaf',          category:'TEXTURIZADOS', tag:'Moda Praia',                      bookPages:0 },
  JACQUARD_LINES:         { name:'Jacquard Lines',         category:'TEXTURIZADOS', tag:'Fitness · Moda Praia',            bookPages:0 },
  JACQUARD_NILO:          { name:'Jacquard Nilo',          category:'TEXTURIZADOS', tag:'Moda Praia · Moda Casual',        bookPages:0 },
  JACQUARD_ONCA:          { name:'Jacquard Onça',          category:'TEXTURIZADOS', tag:'Moda Praia · Moda',               bookPages:0 },
  JACQUARD_PIQUET:        { name:'Jacquard Piquet',        category:'TEXTURIZADOS', tag:'Moda Praia · Moda',               bookPages:0 },
  JACQUARD_VICHY:          { name:'Jacquard Vichy',         category:'TEXTURIZADOS', tag:'Moda Praia · Moda Casual',        bookPages:0 },
  JACQUARD_WINNER:        { name:'Jacquard Winner',        category:'TEXTURIZADOS', tag:'Fitness',                         bookPages:0 },
  JACQUARD_YAHALOM:       { name:'Jacquard Yahalom',       category:'TEXTURIZADOS', tag:'Moda Praia · Moda',               bookPages:0 },
  JACQUARD_ZIGONI:         { name:'Jacquard Zigoni',        category:'TEXTURIZADOS', tag:'Moda Praia · Moda',               bookPages:0 },
  JACQUARD_ZIGZAG_PUZZLE: { name:'Jacquard Zigzag Puzzle', category:'TEXTURIZADOS', tag:'Moda Praia · Moda',               bookPages:0 },
  LASTEX_GLOSS:           { name:'Lastex Gloss',           category:'TEXTURIZADOS', tag:'Moda Praia · Moda',               bookPages:0 },
  LASTEX_LIGHT:           { name:'Lastex Light',           category:'TEXTURIZADOS', tag:'Moda Praia · Moda',               bookPages:0 },
  LIS:                    { name:'LIS',                    category:'TEXTURIZADOS', tag:'Moda Praia · Fitness · Lingerie', bookPages:0 },
  LUREX_3_DOURADO:        { name:'Lurex 3 Dourado',        category:'TEXTURIZADOS', tag:'Moda Praia · Moda',               bookPages:0 },
  LUREX_3_PRATA:          { name:'Lurex 3 Prata',          category:'TEXTURIZADOS', tag:'Moda Praia · Moda',               bookPages:0 },
  LUREX_4_E_OUTROS:       { name:'Lurex 4 e Outros',       category:'TEXTURIZADOS', tag:'Moda Praia · Moda',               bookPages:0 },
  LUX_DUBAI:              { name:'Lux Dubai',              category:'TEXTURIZADOS', tag:'Moda Praia · Moda',               bookPages:0 },
  LYCRA_JEANS:            { name:'Lycra Jeans',            category:'TEXTURIZADOS', tag:'Moda Praia · Moda',               bookPages:0 },
  MALIBU:                 { name:'Malibu',                 category:'TEXTURIZADOS', tag:'Fitness · Moda Casual · Praia',   bookPages:0 },
  MALTE:                  { name:'Malte',                  category:'TEXTURIZADOS', tag:'Moda Praia · Moda Casual',        bookPages:0 },
  MARRAKESH:              { name:'Marrakesh',              category:'TEXTURIZADOS', tag:'Fitness · Lingerie · Praia',      bookPages:0 },
  MARSELHA:               { name:'Marselha',               category:'TEXTURIZADOS', tag:'Fitness · Moda Praia',            bookPages:0 },
  MONTANA:                { name:'Montana',                category:'TEXTURIZADOS', tag:'Fitness · Moda Casual',           bookPages:0 },
  POINTS:                 { name:'Points',                 category:'TEXTURIZADOS', tag:'Moda Praia · Moda',               bookPages:0 },
  POSITANO:               { name:'Positano',               category:'TEXTURIZADOS', tag:'Moda Praia · Moda',               bookPages:0 },
  ROCKS:                  { name:'Rocks',                  category:'TEXTURIZADOS', tag:'Moda Praia · Moda',               bookPages:0 },
  SAINT_MARTIN:           { name:'Saint Martin',           category:'TEXTURIZADOS', tag:'Moda Praia · Moda',               bookPages:0 },
  SEREIA:                 { name:'Sereia',                 category:'TEXTURIZADOS', tag:'Moda Praia · Moda',               bookPages:0 },
  SUKUZA:                 { name:'Sukuza',                 category:'TEXTURIZADOS', tag:'Fitness',                         bookPages:0 },
  TEXAS:                  { name:'Texas',                  category:'TEXTURIZADOS', tag:'Moda Praia · Fitness',            bookPages:0 },
  VERONA:                 { name:'Verona',                 category:'TEXTURIZADOS', tag:'Moda Praia · Moda Casual',        bookPages:0 },

  // ── ESTAMPADOS ───────────────────────────────────────────────
  SARDINHA:               { name:'Sardinha',               category:'ESTAMPADOS',   tag:'Moda Praia · Moda',               bookPages:0 },
  SARDINHAS:              { name:'Sardinhas',              category:'ESTAMPADOS',   tag:'Moda Praia · Moda',               bookPages:0 },

  /* ── ADICIONE NOVOS TECIDOS AQUI ──
  NOME_DA_CHAVE: { name:'Nome', category:'TEXTURIZADOS', tag:'Segmento', bookPages:2 },
  ── */
};

/* ─────────────────────────────────────────────────────────────
   ÍCONES DE LAVAGEM PADRÃO
   Disponíveis em images/lavagem/
   ───────────────────────────────────────────────────────────── */
/* WASH_DATA moved to js/wash-data.js */
