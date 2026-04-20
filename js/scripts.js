/**
 * Acervo Stoner Rock PE — scripts.js
 */

/**
 * Copia a chave PIX para o clipboard com feedback visual.
 * Chame via: onclick="copiarPix(this)"
 */
function copiarPix(btn) {
    const chave = 'linuxds6@proton.me';

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(chave).then(() => {
            mostrarFeedback(btn, '✅ PIX copiado!');
        }).catch(() => {
            fallbackCopy(chave, btn);
        });
    } else {
        fallbackCopy(chave, btn);
    }
}

/**
 * Fallback para navegadores sem suporte a clipboard API.
 */
function fallbackCopy(texto, btn) {
    const temp = document.createElement('textarea');
    temp.value = texto;
    temp.style.position = 'fixed';
    temp.style.opacity = '0';
    document.body.appendChild(temp);
    temp.focus();
    temp.select();
    try {
        document.execCommand('copy');
        mostrarFeedback(btn, '✅ PIX copiado!');
    } catch {
        mostrarFeedback(btn, '❌ Copie manualmente: ' + texto);
    }
    document.body.removeChild(temp);
}

/**
 * Exibe feedback temporário no botão.
 */
function mostrarFeedback(btn, mensagem) {
    if (!btn) return;
    const original = btn.textContent;
    btn.textContent = mensagem;
    btn.disabled = true;
    setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
    }, 2500);
}
