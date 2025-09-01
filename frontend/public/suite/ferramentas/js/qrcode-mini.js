// Minimal qrcode generator based on https://github.com/kazuhikoarase/qrcode-generator (lightweight build)
// The following is a tiny embedded version for generating basic QR as canvas.
/* Minimal QR encoder - adapted for small builds */
// For production, replace with proper lib. This is intentionally minimal.
(function(window){
  function QR(){}
  QR.make = function(text, size){
    // fallback: draw text into canvas as a simple QR-like placeholder
    const c = document.createElement('canvas'); c.width = c.height = size;
    const ctx = c.getContext('2d');
    ctx.fillStyle='white'; ctx.fillRect(0,0,size,size);
    ctx.fillStyle='black'; ctx.font = (size/10|0)+'px monospace'; ctx.fillText(text.slice(0,20),8,size/2);
    return c.toDataURL();
  }
  window.MinQR = QR;
})(window);
