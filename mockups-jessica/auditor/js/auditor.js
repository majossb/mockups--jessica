const TIPOS_HALLAZGO = ['mayor', 'menor', 'oportunidad', 'fortaleza'];

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('modal-hallazgo')?.addEventListener('click', function(e) {
    if (e.target === this) this.classList.remove('open');
  });
});

/**
 * Cambia la vista activa, actualiza el nav y el breadcrumb.
 * @param {string} id
 * @param {string} title
 */
function showView(id, title) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('view-' + id).classList.add('active');
  document.getElementById('breadcrumb').textContent = title ?? id;
  event?.currentTarget?.classList.add('active');
}

/**
 * Muestra u oculta tarjetas de hallazgo según el tipo.
 * @param {string} tipo - 'todos' | 'mayor' | 'menor' | 'oportunidad' | 'fortaleza'
 */
function filterHallazgos(tipo) {
  document.querySelectorAll('.hallazgo-card').forEach(card => {
    card.style.display = (tipo === 'todos' || card.dataset.tipo === tipo) ? 'block' : 'none';
  });
}

/**
 * Marca el tipo de hallazgo seleccionado en el formulario.
 * @param {string} tipo
 */
function selectTipo(tipo) {
  TIPOS_HALLAZGO.forEach(t => {
    const el = document.getElementById('ro-' + t);
    el.className = t === tipo ? `radio-opt sel-${tipo}` : 'radio-opt';
  });
}

/** Cierra el modal y muestra confirmación. */
function guardarHallazgo() {
  document.getElementById('modal-hallazgo').classList.remove('open');
  const flash = document.createElement('div');
  flash.className = 'flash-success';
  flash.textContent = '✅ Hallazgo registrado exitosamente';
  document.body.appendChild(flash);
  setTimeout(() => flash.remove(), 3000);
}