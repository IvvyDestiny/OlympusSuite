// === scripts.js ===

// Alternância de tema
const themeSwitcher = document.getElementById('themeSwitcher');
themeSwitcher?.addEventListener('change', function() {
  document.documentElement.setAttribute('data-theme', this.value);
});

// Controle do drawer lateral
const drawer = document.querySelector('.ds-drawer');
const toggleBtn = document.querySelector('.menu-toggle');

toggleBtn?.addEventListener('click', () => {
  drawer.classList.toggle('open');
});

// Gesto de deslize para abrir menu (mobile)
let touchStartX = 0;
document.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
});

document.addEventListener('touchend', e => {
  const touchEndX = e.changedTouches[0].clientX;
  if (touchStartX < 50 && touchEndX - touchStartX > 100) {
    drawer.classList.add('open');
  }
});

// Scroll horizontal com arraste do mouse
document.querySelectorAll('.ds-scroll-x').forEach(container => {
  let isDragging = false;
  let startX, scrollLeft;
  
  container.addEventListener('mousedown', e => {
    isDragging = true;
    container.classList.add('active');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });
  
  container.addEventListener('mouseleave', () => {
    isDragging = false;
    container.classList.remove('active');
  });
  
  container.addEventListener('mouseup', () => {
    isDragging = false;
    container.classList.remove('active');
  });
  
  container.addEventListener('mousemove', e => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // acelera o scroll
    container.scrollLeft = scrollLeft - walk;
  });
});