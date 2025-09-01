/* utils.js - shared utilities for ferramentas */
const Tools = {
  go: (path)=>{ location.href = path },
  copy: async (text)=>{
    try{ await navigator.clipboard.writeText(text); return true}catch(e){ return false }
  },
  saveLocal: (k,v)=> localStorage.setItem(k, JSON.stringify(v)),
  loadLocal: (k,def)=> { try{ return JSON.parse(localStorage.getItem(k)||'null')||def }catch(e){return def} },
  fmtBytes: (b)=>{ if(b<1024) return b+' B'; if(b<1024*1024) return (b/1024).toFixed(1)+' KB'; return (b/1024/1024).toFixed(2)+' MB' }
}
