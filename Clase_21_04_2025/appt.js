function enviarWhatsApp() {
    const celular = document.getElementById('celular').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    
    // Validación básica
    if (!celular) {
        alert("Por favor ingresa un número de teléfono");
        return;
    }
    
    if (!mensaje) {
        alert("Por favor escribe un mensaje");
        return;
    }
    
    // Limpiar el número de teléfono (eliminar espacios, guiones, etc.)
    const numeroLimpio = celular.replace(/\D/g, '');
    
    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Redirigir a WhatsApp
    window.open(`https://api.whatsapp.com/send?phone=${numeroLimpio}&text=${mensajeCodificado}`, '_blank'); 
  }