/* ═══════════════════════════════════════════════════════════════
   WASH TEXTURIZADOS — js/wash-texturizados.js
   Configurações de lavagem específicas para tecidos da categoria TEXTURIZADOS.
   ═══════════════════════════════════════════════════════════════ */

const WASH_TEXTURIZADOS = {
  ANARRUGA_BRILHANTE:     [...WASH_DEFAULT],
  ANARRUGA_PRAIA:         [...WASH_DEFAULT],
  AREZZO:                 [...WASH_DEFAULT],
  BOUCLE:                 [...WASH_DEFAULT],
  BOUCLE_NERVUS:          [...WASH_DEFAULT],
  BOUCLE_PETALAS:         [...WASH_DEFAULT],
  CANCUN:                 [...WASH_DEFAULT],
  CANELADO_BLACKOUT:      [...WASH_DEFAULT],
  CANELADO_DE_COMPRESSAO: [
    {img:'images/lavagem/LAVAGEM-MANUAL.jpg',        label:'LAVAR DE FORMA MANUAL'},
    {img:'images/lavagem/NAO-ALVEJAR-BRANQUEAR.jpg', label:'NÃO ALVEJAR, NÃO BRANQUEAR'},
    {img:'images/lavagem/NAO-LAVAR-SECO.jpg',        label:'NÃO LAVAR A SECO'},
    {img:'images/lavagem/NAO-SECAR-SECADORA.jpg',    label:'NÃO SECAR EM MÁQUINA SECADORA'},
    {img:'images/lavagem/NAO-PASSAR.jpg',            label:'NÃO PASSAR'},
    {img:'images/lavagem/SECAR-HORIZONTAL.jpg',      label:'SECAR NA HORIZONTAL'},
  ],

  CANELADO_DIAGONAL:      [...WASH_DEFAULT],
  CANELADO_EDEN:          [...WASH_DEFAULT],
  CANELADO_FUJI: [
    {img:'images/lavagem/LAVAGEM-MANUAL.jpg',        label:'LAVAR DE FORMA MANUAL'},
    {img:'images/lavagem/NAO-ALVEJAR-BRANQUEAR.jpg', label:'NÃO ALVEJAR, NÃO BRANQUEAR'},
    {img:'images/lavagem/NAO-LAVAR-SECO.jpg',        label:'NÃO LAVAR A SECO'},
    {img:'images/lavagem/NAO-SECAR-SECADORA.jpg',    label:'NÃO SECAR EM MÁQUINA SECADORA'},
    {img:'images/lavagem/NAO-PASSAR.jpg',            label:'NÃO PASSAR'},
    {img:'images/lavagem/SECAR-HORIZONTAL.jpg',      label:'SECAR NA HORIZONTAL'},
  ],

  CANELADO_LENATEX:       [...WASH_DEFAULT],
  CANELADO_PILLE: [
    {img:'images/lavagem/LAVAGEM-MANUAL.jpg',        label:'LAVAR DE FORMA MANUAL'},
    {img:'images/lavagem/NAO-ALVEJAR-BRANQUEAR.jpg', label:'NÃO ALVEJAR, NÃO BRANQUEAR'},
    {img:'images/lavagem/NAO-LAVAR-SECO.jpg',        label:'NÃO LAVAR A SECO'},
    {img:'images/lavagem/NAO-SECAR-SECADORA.jpg',    label:'NÃO SECAR EM MÁQUINA SECADORA'},
    {img:'images/lavagem/NAO-PASSAR.jpg',            label:'NÃO PASSAR'},
    {img:'images/lavagem/SECAR-HORIZONTAL.jpg',      label:'SECAR NA HORIZONTAL'},
  ],

  CANELADO_POLIESTER:     [...WASH_DEFAULT],
  CANELADO_POWER:         [...WASH_DEFAULT],
  CANELADO_TREND_MOVE: [
    {img:'images/lavagem/MAX-30-1.jpg',              label:'LAVAR EM TEMPERATURA MÁX. 30°C, SUAVE'},
    {img:'images/lavagem/NAO-ALVEJAR-BRANQUEAR.jpg', label:'NÃO ALVEJAR, NÃO BRANQUEAR'},
    {img:'images/lavagem/SECAR-MIN.jpg',             label:'POSSIVÉL SECAR EM MÁQUINA, TEMPERATURA BAIXA'},
    {img:'images/lavagem/SECAR-VARAL.jpg',           label:'SECAR EM VARAL, À SOMBRA'},
    {img:'images/lavagem/NAO-PASSAR.jpg',            label:'NÃO PASSAR'},
    {img:'images/lavagem/NAO-LAVAR-SECO.jpg',        label:'NÃO LAVAR A SECO'},
    {img:'images/lavagem/UMIDO.jpg',                 label:'LIMPEZA A ÚMIDO'},
  ],

  CANELADO_WONDER:        [...WASH_DEFAULT],
  CARMEL:                 [...WASH_DEFAULT],
  CREPINHO:               [...WASH_DEFAULT],
  CREPONADO:              [...WASH_DEFAULT],
  CROCHE_SANTORINI:       [...WASH_DEFAULT],
  CROCHETE: [
    {img:'images/lavagem/LAVAGEM-MANUAL.jpg',        label:'LAVAR DE FORMA MANUAL'},
    {img:'images/lavagem/NAO-ALVEJAR-BRANQUEAR.jpg', label:'NÃO ALVEJAR, NÃO BRANQUEAR'},
    {img:'images/lavagem/NAO-LAVAR-SECO.jpg',        label:'NÃO LAVAR A SECO'},
    {img:'images/lavagem/PASSAR-MAX-100.jpg',        label:'PASSAR EM TEMPERATURA MÁX. 110°C'},
    {img:'images/lavagem/SECAR-VARAL.jpg',           label:'SECAR EM VARAL, À SOMBRA'},
  ],

  CROCHETE_ROMANTIC:        [
    {img:'images/lavagem/MAX-40.jpg',        label:'LAVAR EM TEMPERATURA MÁX. 40°C, SUAVE'},
    {img:'images/lavagem/NAO-ALVEJAR-BRANQUEAR.jpg', label:'NÃO ALVEJAR, NÃO BRANQUEAR'},
    {img:'images/lavagem/SECAR-MIN.jpg',             label:'POSSIVÉL SECAR EM MÁQUINA, TEMPERATURA BAIXA'},
    {img:'images/lavagem/SECAR-VARAL.jpg',           label:'SECAR EM VARAL, À SOMBRA'},
    {img:'images/lavagem/PASSAR-MAX-100.jpg',        label:'PASSAR EM TEMPERATURA MÁX. 110°C'},
    {img:'images/lavagem/NAO-LAVAR-SECO.jpg',        label:'NÃO LAVAR A SECO'},
  ],

  CRUNCH_LISTRADO:        [
    {img:'images/lavagem/LAVAGEM-MANUAL.jpg',        label:'LAVAR DE FORMA MANUAL'},
    {img:'images/lavagem/NAO-ALVEJAR-BRANQUEAR.jpg', label:'NÃO ALVEJAR, NÃO BRANQUEAR'},
    {img:'images/lavagem/NAO-SECAR-SECADORA.jpg',    label:'NÃO SECAR EM MÁQUINA SECADORA'},
    {img:'images/lavagem/SECAR-VARAL.jpg',           label:'SECAR EM VARAL, À SOMBRA'},
    {img:'images/lavagem/NAO-PASSAR.jpg',            label:'NÃO PASSAR'},
    {img:'images/lavagem/NAO-LAVAR-SECO.jpg',        label:'NÃO LAVAR A SECO'},
  ],

  CRUNCH_POA: [
    {img:'images/lavagem/LAVAGEM-MANUAL.jpg',        label:'LAVAR DE FORMA MANUAL'},
    {img:'images/lavagem/NAO-ALVEJAR-BRANQUEAR.jpg', label:'NÃO ALVEJAR, NÃO BRANQUEAR'},
    {img:'images/lavagem/NAO-LAVAR-SECO.jpg',        label:'NÃO LAVAR A SECO'},
    {img:'images/lavagem/NAO-SECAR-SECADORA.jpg',    label:'NÃO SECAR EM MÁQUINA SECADORA'},
    {img:'images/lavagem/NAO-PASSAR.jpg',            label:'NÃO PASSAR'},
    {img:'images/lavagem/SECAR-VARAL.jpg',           label:'SECAR EM VARAL, À SOMBRA'},
  ],

  DIAMOND:                [...WASH_DEFAULT],
  DOTS:                   [...WASH_DEFAULT],
  JACQUARD_ALGAE:         [
    {img:'images/lavagem/LAVAGEM-MANUAL.jpg',        label:'LAVAR DE FORMA MANUAL'},
    {img:'images/lavagem/NAO-ALVEJAR-BRANQUEAR.jpg', label:'NÃO ALVEJAR, NÃO BRANQUEAR'},
    {img:'images/lavagem/NAO-SECAR-SECADORA.jpg',    label:'NÃO SECAR EM MÁQUINA SECADORA'},
    {img:'images/lavagem/SECAR-VARAL.jpg',           label:'SECAR EM VARAL, À SOMBRA'},
    {img:'images/lavagem/NAO-PASSAR.jpg',            label:'NÃO PASSAR'},
    {img:'images/lavagem/NAO-LAVAR-SECO.jpg',        label:'NÃO LAVAR A SECO'},
  ],

JACQUARD_ARTSAN:          [
    {img:'images/lavagem/LAVAGEM-MANUAL.jpg',        label:'LAVAR DE FORMA MANUAL'},
    {img:'images/lavagem/NAO-ALVEJAR-BRANQUEAR.jpg', label:'NÃO ALVEJAR, NÃO BRANQUEAR'},
    {img:'images/lavagem/NAO-SECAR-SECADORA.jpg',    label:'NÃO SECAR EM MÁQUINA SECADORA'},
    {img:'images/lavagem/SECAR-VARAL.jpg',           label:'SECAR EM VARAL, À SOMBRA'},
    {img:'images/lavagem/NAO-PASSAR.jpg',            label:'NÃO PASSAR'},
    {img:'images/lavagem/NAO-LAVAR-SECO.jpg',        label:'NÃO LAVAR A SECO'},
  ],

  JACQUARD_BROCADO:       [
    {img:'images/lavagem/LAVAGEM-MANUAL.jpg',        label:'LAVAR DE FORMA MANUAL'},
    {img:'images/lavagem/NAO-ALVEJAR-BRANQUEAR.jpg', label:'NÃO ALVEJAR, NÃO BRANQUEAR'},
    {img:'images/lavagem/NAO-SECAR-SECADORA.jpg',    label:'NÃO SECAR EM MÁQUINA SECADORA'},
    {img:'images/lavagem/SECAR-VARAL.jpg',           label:'SECAR EM VARAL, À SOMBRA'},
    {img:'images/lavagem/NAO-PASSAR.jpg',            label:'NÃO PASSAR'},
    {img:'images/lavagem/NAO-LAVAR-SECO.jpg',        label:'NÃO LAVAR A SECO'},
  ],
  
  JACQUARD_CONCHAS:       [...WASH_DEFAULT],
  JACQUARD_CONCHINHAS:    [
    {img:'images/lavagem/LAVAGEM-MANUAL.jpg',        label:'LAVAR DE FORMA MANUAL'},
    {img:'images/lavagem/NAO-ALVEJAR-BRANQUEAR.jpg', label:'NÃO ALVEJAR, NÃO BRANQUEAR'},
    {img:'images/lavagem/NAO-SECAR-SECADORA.jpg',        label:'NÃO SECAR EM MÁQUINA SECADORA'},
    {img:'images/lavagem/SECAR-VARAL.jpg',           label:'SECAR EM VARAL, À SOMBRA'},
    {img:'images/lavagem/NAO-PASSAR.jpg',            label:'NÃO PASSAR'},
    {img:'images/lavagem/NAO-LAVAR-SECO.jpg',        label:'NÃO LAVAR A SECO'},
  ],

  JACQUARD_DEGRADE:       [...WASH_DEFAULT],
  JACQUARD_GITA:          [...WASH_DEFAULT],
  JACQUARD_KASHIMIR:      [
     {img:'images/lavagem/LAVAGEM-MANUAL.jpg',        label:'LAVAR DE FORMA MANUAL'},
    {img:'images/lavagem/NAO-ALVEJAR-BRANQUEAR.jpg', label:'NÃO ALVEJAR, NÃO BRANQUEAR'},
    {img:'images/lavagem/NAO-SECAR-SECADORA.jpg',    label:'NÃO SECAR EM MÁQUINA SECADORA'},
    {img:'images/lavagem/SECAR-VARAL.jpg',           label:'SECAR EM VARAL, À SOMBRA'},
    {img:'images/lavagem/NAO-PASSAR.jpg',            label:'NÃO PASSAR'},
    {img:'images/lavagem/NAO-LAVAR-SECO.jpg',        label:'NÃO LAVAR A SECO'},
  ],

  JACQUARD_LEAF:          [...WASH_DEFAULT],
  JACQUARD_LINES:         [
    {img:'images/lavagem/LAVAGEM-MANUAL.jpg',        label:'LAVAR DE FORMA MANUAL'},
    {img:'images/lavagem/NAO-ALVEJAR-BRANQUEAR.jpg', label:'NÃO ALVEJAR, NÃO BRANQUEAR'},
    {img:'images/lavagem/NAO-SECAR-SECADORA.jpg',    label:'NÃO SECAR EM MÁQUINA SECADORA'},
    {img:'images/lavagem/SECAR-VARAL.jpg',           label:'SECAR EM VARAL, À SOMBRA'},
    {img:'images/lavagem/NAO-PASSAR.jpg',            label:'NÃO PASSAR'},
    {img:'images/lavagem/NAO-LAVAR-SECO.jpg',        label:'NÃO LAVAR A SECO'},
  ],

  JACQUARD_NILO:          [
    {img:'images/lavagem/LAVAGEM-MANUAL.jpg',        label:'LAVAR DE FORMA MANUAL'},
    {img:'images/lavagem/NAO-ALVEJAR-BRANQUEAR.jpg', label:'NÃO ALVEJAR, NÃO BRANQUEAR'},
    {img:'images/lavagem/NAO-SECAR-SECADORA.jpg',    label:'NÃO SECAR EM MÁQUINA SECADORA'},
    {img:'images/lavagem/SECAR-VARAL.jpg',           label:'SECAR EM VARAL, À SOMBRA'},
    {img:'images/lavagem/NAO-PASSAR.jpg',            label:'NÃO PASSAR'},
    {img:'images/lavagem/NAO-LAVAR-SECO.jpg',        label:'NÃO LAVAR A SECO'},
  ],

  JACQUARD_ONCA:          [...WASH_DEFAULT],
  JACQUARD_PIQUET:        [...WASH_DEFAULT],
  JACQUARD_VICHY:         [
    {img:'images/lavagem/LAVAGEM-MANUAL.jpg',        label:'LAVAR DE FORMA MANUAL'},
    {img:'images/lavagem/NAO-ALVEJAR-BRANQUEAR.jpg', label:'NÃO ALVEJAR, NÃO BRANQUEAR'},
    {img:'images/lavagem/NAO-SECAR-SECADORA.jpg',    label:'NÃO SECAR EM MÁQUINA SECADORA'},
    {img:'images/lavagem/SECAR-VARAL.jpg',           label:'SECAR EM VARAL, À SOMBRA'}, 
    {img:'images/lavagem/NAO-PASSAR.jpg',            label:'NÃO PASSAR'},
    {img:'images/lavagem/NAO-LAVAR-SECO.jpg',        label:'NÃO LAVAR A SECO'},
  ],

  JACQUARD_WINNER:        [...WASH_DEFAULT],
  JACQUARD_YAHALOM:       [...WASH_DEFAULT],
  JACQUARD_ZIGONI:        [
    {img:'images/lavagem/LAVAGEM-MANUAL.jpg',        label:'LAVAR DE FORMA MANUAL'},
    {img:'images/lavagem/NAO-ALVEJAR-BRANQUEAR.jpg', label:'NÃO ALVEJAR, NÃO BRANQUEAR'},
    {img:'images/lavagem/NAO-SECAR-SECADORA.jpg',    label:'NÃO SECAR EM MÁQUINA SECADORA'},
    {img:'images/lavagem/SECAR-VARAL.jpg',           label:'SECAR EM VARAL, À SOMBRA'},
    {img:'images/lavagem/NAO-PASSAR.jpg',            label:'NÃO PASSAR'},
    {img:'images/lavagem/NAO-LAVAR-SECO.jpg',        label:'NÃO LAVAR A SECO'},
  ],

  JACQUARD_ZIGZAG_PUZZLE: [...WASH_DEFAULT],
  LASTEX_GLOSS:           [...WASH_DEFAULT],
  LASTEX_LIGHT:           [...WASH_DEFAULT],
  LIS:                    [...WASH_DEFAULT],
  LUREX_3_DOURADO:        [
     {img:'images/lavagem/LAVAGEM-MANUAL.jpg',        label:'LAVAR DE FORMA MANUAL'},
    {img:'images/lavagem/NAO-ALVEJAR-BRANQUEAR.jpg', label:'NÃO ALVEJAR, NÃO BRANQUEAR'},
    {img:'images/lavagem/NAO-SECAR-SECADORA.jpg',    label:'NÃO SECAR EM MÁQUINA SECADORA'},
    {img:'images/lavagem/SECAR-VARAL.jpg',           label:'SECAR EM VARAL, À SOMBRA'},
    {img:'images/lavagem/NAO-PASSAR.jpg',            label:'NÃO PASSAR'},
    {img:'images/lavagem/NAO-LAVAR-SECO.jpg',        label:'NÃO LAVAR A SECO'},
  ],

  LUREX_3_PRATA:          [...WASH_DEFAULT],
  LUREX_4_E_OUTROS:       [...WASH_DEFAULT],
  LUX_DUBAI:              [...WASH_DEFAULT],
  LYCRA_JEANS:            [
    {img:'images/lavagem/NAO-ALVEJAR-BRANQUEAR.jpg', label:'NÃO ALVEJAR, NÃO BRANQUEAR'},
    {img:'images/lavagem/NAO-SECAR-SECADORA.jpg',    label:'NÃO SECAR EM MÁQUINA SECADORA'},
    {img:'images/lavagem/NAO-LAVAR-SECO.jpg',        label:'NÃO LAVAR A SECO'},
    {img:'images/lavagem/PASSAR-MAX-150.jpg',        label:'PASSAR EM TEMPERATURA MÁX. 150°C'},
    {img:'images/lavagem/SECAR-VARAL.jpg',           label:'SECAR EM VARAL, À SOMBRA'},
  ],

  MALIBU:                 [...WASH_DEFAULT],
  MALTE: [
    {img:'images/lavagem/LAVAGEM-MANUAL.jpg',        label:'LAVAR DE FORMA MANUAL'},
    {img:'images/lavagem/NAO-ALVEJAR-BRANQUEAR.jpg', label:'NÃO ALVEJAR, NÃO BRANQUEAR'},
    {img:'images/lavagem/NAO-LAVAR-SECO.jpg',        label:'NÃO LAVAR A SECO'},
    {img:'images/lavagem/NAO-SECAR-SECADORA.jpg',    label:'NÃO SECAR EM MÁQUINA SECADORA'},
    {img:'images/lavagem/NAO-PASSAR.jpg',            label:'NÃO PASSAR'},
    {img:'images/lavagem/SECAR-VARAL.jpg',           label:'SECAR EM VARAL, À SOMBRA'},
  ],

  MARRAKESH:              [...WASH_DEFAULT],
  MARSELHA:               [...WASH_DEFAULT],
  MONTANA:                [
    {img:'images/lavagem/MAX-30-1.jpg',        label:'LAVAR EM TEMPERATURA MÁX. 30°C, SUAVE'},
    {img:'images/lavagem/NAO-ALVEJAR-BRANQUEAR.jpg', label:'NÃO ALVEJAR, NÃO BRANQUEAR'},
    {img:'images/lavagem/SECAR-MIN.jpg',    label:'POSSIVÉL SECAR EM MÁQUINA, TEMPERATURA BAIXA'},
    {img:'images/lavagem/SECAR-VARAL.jpg',           label:'SECAR EM VARAL, À SOMBRA'},
    {img:'images/lavagem/NAO-PASSAR.jpg',            label:'NÃO PASSAR'},
    {img:'images/lavagem/NAO-LAVAR-SECO.jpg',        label:'NÃO LAVAR A SECO'},
    {img:'images/lavagem/UMIDO.jpg',                 label:'LIMPEZA A ÚMIDO'},
  ],

  POINTS:                 [...WASH_DEFAULT],
  POSITANO:               [...WASH_DEFAULT],
  ROCKS:                  [...WASH_DEFAULT],
  SAINT_MARTIN:           [...WASH_DEFAULT],
  SEREIA:                 [...WASH_DEFAULT],
  SUKUZA:                 [...WASH_DEFAULT],
  TEXAS:                  [
    {img:'images/lavagem/LAVAGEM-MANUAL.jpg',        label:'LAVAR DE FORMA MANUAL'},
    {img:'images/lavagem/NAO-ALVEJAR-BRANQUEAR.jpg', label:'NÃO ALVEJAR, NÃO BRANQUEAR'},
    {img:'images/lavagem/NAO-SECAR-SECADORA.jpg',    label:'NÃO SECAR EM MÁQUINA SECADORA'},
    {img:'images/lavagem/SECAR-VARAL.jpg',           label:'SECAR EM VARAL, À SOMBRA'},
    {img:'images/lavagem/NAO-PASSAR.jpg',            label:'NÃO PASSAR'},
    {img:'images/lavagem/NAO-LAVAR-SECO.jpg',        label:'NÃO LAVAR A SECO'},
    {img:'images/lavagem/UMIDO.jpg',                 label:'LIMPEZA A ÚMIDO'},
  ],

  VERONA: [
    {img:'images/lavagem/LAVAGEM-MANUAL.jpg',        label:'LAVAR DE FORMA MANUAL'},
    {img:'images/lavagem/NAO-ALVEJAR-BRANQUEAR.jpg', label:'NÃO ALVEJAR, NÃO BRANQUEAR'},
    {img:'images/lavagem/NAO-LAVAR-SECO.jpg',        label:'NÃO LAVAR A SECO'},
    {img:'images/lavagem/NAO-SECAR-SECADORA.jpg',    label:'NÃO SECAR EM MÁQUINA SECADORA'},
    {img:'images/lavagem/NAO-PASSAR.jpg',            label:'NÃO PASSAR'},
    {img:'images/lavagem/SECAR-VARAL.jpg',           label:'SECAR EM VARAL, À SOMBRA'},
  ],
};
