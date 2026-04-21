/**
 * Acervo Stoner Rock PE — scripts.js
 */

const PIX_CHAVE = 'linuxds6@proton.me';
let qrGerado = false;

function copiarPix(btn) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(PIX_CHAVE).then(() => {
            mostrarFeedback(btn, '✅ CHAVE COPIADA!');
        }).catch(() => fallbackCopy(btn));
    } else {
        fallbackCopy(btn);
    }
}

function fallbackCopy(btn) {
    const temp = document.createElement('textarea');
    temp.value = PIX_CHAVE;
    temp.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(temp);
    temp.focus();
    temp.select();
    try {
        document.execCommand('copy');
        mostrarFeedback(btn, '✅ CHAVE COPIADA!');
    } catch {
        mostrarFeedback(btn, PIX_CHAVE);
    }
    document.body.removeChild(temp);
}

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

function toggleQR() {
    const wrapper = document.getElementById('pix-qr-wrapper');
    const btn     = document.querySelector('.btn-qr-toggle');
    if (!wrapper) return;

    const aberto = wrapper.classList.toggle('aberto');
    btn.textContent = aberto ? '▲ FECHAR QR CODE' : '▼ VER QR CODE';

    if (aberto && !qrGerado) {
        new QRCode(document.getElementById('pix-qrcode'), {
            text:         PIX_CHAVE,
            width:        160,
            height:       160,
            colorDark:    '#e8d5b0',
            colorLight:   '#0e0b08',
            correctLevel: QRCode.CorrectLevel.H
        });
        qrGerado = true;
    }
}
