// ══════════════════════════════════════════════════
//  SACOLA DE ORÇAMENTOS — js/cart.js
// ══════════════════════════════════════════════════

let cart = JSON.parse(localStorage.getItem('alfa_cart')) || [];

function saveCart() {
  localStorage.setItem('alfa_cart', JSON.stringify(cart));
  updateCartUI();
}

// Adiciona um tecido à sacola
function addToCart(fabricKey, fabricName) {
  if (!cart.find(item => item.key === fabricKey)) {
    cart.push({ key: fabricKey, name: fabricName });
    saveCart();
    const btn = document.getElementById('cartFloatBtn');
    if (btn) {
      btn.style.transform = 'scale(1.3)';
      setTimeout(() => btn.style.transform = 'scale(1)', 200);
    }
  }
}

// Remove um tecido da sacola
function removeFromCart(fabricKey) {
  cart = cart.filter(item => item.key !== fabricKey);
  saveCart();
  refreshModalCartBtn();
}

// Atualiza toda a interface da sacola
function updateCartUI() {
  document.querySelectorAll('.cart-count').forEach(el => el.textContent = cart.length);
  const drawerList = document.getElementById('cartDrawerList');
  if (!drawerList) return;
  if (cart.length === 0) {
    drawerList.innerHTML = "<p style=\"color:rgba(220,200,240,0.5);font-size:13px;text-align:center;margin-top:40px;\">Sua sacola está vazia.</p>";
    document.getElementById('cartDrawerCheckout').style.display = 'none';
  } else {
    document.getElementById('cartDrawerCheckout').style.display = 'flex';
    drawerList.innerHTML = cart.map(item =>
      "<div class=\"cart-item\"><span>" + item.name + "</span><button onclick=\"removeFromCart('" + item.key + "')\">×</button></div>"
    ).join('');
  }
}

// Atualiza o botão dentro do modal
function refreshModalCartBtn() {
  const modal = document.getElementById('fabricModal');
  if (!modal) return;
  const fabricKey = modal.dataset.currentKey;
  if (!fabricKey) return;
  const btn = document.getElementById('fabricModalWpp');
  if (!btn) return;
  const inCart = cart.find(i => i.key === fabricKey);
  if (inCart) {
    btn.innerHTML = "✅ Adicionado — ver sacola";
    btn.style.background = "rgba(37,211,102,0.15)";
    btn.style.borderColor = "rgba(37,211,102,0.5)";
    btn.style.color = "#25D366";
    btn.onclick = function(e) { e.preventDefault(); openCartDrawer(); };
  } else {
    btn.innerHTML = "<svg style=\"width:16px;height:16px;fill:currentColor;vertical-align:middle\"><use href=\"#ico-cart\"/></svg> Adicionar ao Orçamento";
    btn.style.background = "";
    btn.style.borderColor = "";
    btn.style.color = "";
    btn.onclick = function(e) {
      e.preventDefault();
      const name = document.getElementById('fabricModalName').innerText;
      addToCart(fabricKey, name);
      refreshModalCartBtn();
    };
  }
}

function openCartDrawer() {
  document.getElementById('cartDrawer').classList.add('open');
  updateCartUI();
}
function closeCartDrawer() {
  document.getElementById('cartDrawer').classList.remove('open');
}

function checkoutWhatsapp() {
  if (cart.length === 0) return;
  const vendor = window.VENDEDOR_ATIVO || null;
  const baseNumber = vendor?.tel || '5511957717470';
  const baseMsg = vendor?.msg || 'Olá!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20os%20seguintes%20tecidos.';

  let text = baseMsg + '%0A%0A';
  cart.forEach(item => {
    text += '-%20' + encodeURIComponent(item.name) + '%0A';
  });
  text += '%0APode%20me%20passar%20as%20cores%20dispon%C3%ADveis%20e%20valores?';
  window.open('https://wa.me/' + baseNumber + '?text=' + text, '_blank');
}

document.addEventListener('DOMContentLoaded', updateCartUI);
