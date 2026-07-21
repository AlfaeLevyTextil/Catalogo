/* ═══════════════════════════════════════════════════════════════
   MAIN — js/main.js
   Inicialização geral: scroll reveal + abertura via URL ?fabric=
   Depende de: fabrics-data.js e modal.js (carregados antes)
   ═══════════════════════════════════════════════════════════════ */

// ── Scroll reveal ─────────────────────────────────────────────
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add('visible');
      if (en.target.classList.contains('fabrics-grid') || en.target.classList.contains('faq-grid')) {
        const children = Array.from(en.target.children);
        children.forEach((child, index) => {
           const delayIndex = Math.min(index, 20); // max delay
           child.style.transitionDelay = `${delayIndex * 0.08}s`;
        });
      }
    }
  });
}, { threshold: 0.07 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

function renderFabricCardPreviews() {
  document.querySelectorAll('.fabric-card[data-key]').forEach(card => {
    const key = card.dataset.key;
    const f   = FABRICS[key];
    if (!f || !Array.isArray(f.previewColors) || f.previewColors.length === 0) return;

    const preview = document.createElement('div');
    preview.className = 'fabric-card-preview-dots';
    preview.style.pointerEvents = 'none';
    preview.title = f.name;

    f.previewColors.slice(0, 5).forEach(hex => {
      const dot = document.createElement('span');
      dot.className = 'fabric-card-preview-dot';
      dot.style.background = typeof hex === 'string' ? hex : (hex[0] || '#000');
      preview.appendChild(dot);
    });

    card.appendChild(preview);
  });
}

function renderSupplierLabels() {
  document.querySelectorAll('.fabric-card[data-key]').forEach(card => {
    const key = card.dataset.key;
    const f   = FABRICS[key];
    if (!f || !f.supplier) return;
    if (card.querySelector('.fabric-card-supplier')) return;

    const badge = document.createElement('span');
    badge.className = 'fabric-card-supplier';
    badge.textContent = f.supplier.toUpperCase();
    card.appendChild(badge);
  });
}

// ── Preserva scroll position ao retornar do book ─────────────
window.addEventListener('pageshow', () => {
  const savedScroll = sessionStorage.getItem('indexScrollPos');
  if (savedScroll !== null) {
    window.scrollTo(0, parseInt(savedScroll, 10));
    sessionStorage.removeItem('indexScrollPos');
  }
});

window.addEventListener('pagehide', () => {
  sessionStorage.setItem('indexScrollPos', window.scrollY.toString());
});

// ── Abre tecido automaticamente via URL ?fabric=CHAVE ─────────
window.addEventListener('DOMContentLoaded', () => {
  renderFabricCardPreviews();
  renderSupplierLabels();

  const params     = new URLSearchParams(location.search);
  const fabricKey  = params.get('fabric');
  if (fabricKey && FABRICS[fabricKey]) {
    setTimeout(() => openFabric(fabricKey), 300);
  }
});
// ── Scroll to Top Visibility ──────────────────────────────────
window.addEventListener('scroll', () => {
  const btn = document.getElementById('scrollTopBtn');
  if (window.scrollY > 800) {
    btn.classList.add('visible');
  } else {
    btn.classList.remove('visible');
  }
});
