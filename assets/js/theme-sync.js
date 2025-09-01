window.addEventListener('storage', e=>{
  if(e.key === 'olympus_theme') document.documentElement.setAttribute('data-theme', e.newValue);
});
document.addEventListener('olympus:components:ready', ()=>{
  const sel = document.getElementById('olympus-theme-selector');
  if(!sel) return;
  sel.value = localStorage.getItem('olympus_theme') || 'default';
  sel.addEventListener('change', ()=> {
    const t = sel.value;
    localStorage.setItem('olympus_theme', t);
    document.documentElement.setAttribute('data-theme', t);
  });
});