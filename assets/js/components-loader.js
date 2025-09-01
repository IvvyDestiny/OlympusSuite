(async function(){
  const path = location.pathname.split('/').pop();
  async function load(url, where='body'){
    try{
      const r = await fetch(url);
      if(!r.ok) throw new Error(url+': '+r.status);
      const html = await r.text();
      const container = document.querySelector(where) || document.body;
      container.insertAdjacentHTML(where === 'body' ? 'afterbegin' : 'beforeend', html);
    }catch(e){ console.error('load component', url, e); }
  }
  if(path !== 'menu.html') await load('/menu.html','body');
  if(path !== 'menu.html') await load('/footer.html','body');
  document.dispatchEvent(new CustomEvent('olympus:components:ready'));
})();