// ─── Constantes de datos (DRY: SVG paths en un solo lugar) ──

const SVG_EYE_OPEN = `
  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
        stroke="currentColor" stroke-width="1.8"/>
  <circle cx="12" cy="12" r="3"
          stroke="currentColor" stroke-width="1.8"/>
`;

const SVG_EYE_CLOSED = `
  <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8
           a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4
           c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19
           m-6.72-1.07a3 3 0 11-4.24-4.24"
        stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="1" y1="1" x2="23" y2="23"
        stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
`;

// ─── Selector de rol ─────────────────────────────────────────

/**
 * Desactiva todos los botones de rol y activa el seleccionado.
 * @param {HTMLButtonElement} btn - Botón presionado por el usuario.
 */
function setRole(btn) {
  clearActiveRoles();
  btn.classList.add('active');
}

/** Quita la clase 'active' de todos los botones de rol. */
function clearActiveRoles() {
  document.querySelectorAll('.role-btn')
          .forEach(b => b.classList.remove('active'));
}

// ─── Toggle de contraseña ────────────────────────────────────

/**
 * Alterna la visibilidad del campo de contraseña.
 * Delega el estado, el cambio del input y el ícono
 * a funciones con responsabilidad única.
 */
function togglePwd() {
  const input    = document.getElementById('pwd');
  const icon     = document.getElementById('eye-icon');
  const isHidden = isPasswordHidden(input);

  setInputVisibility(input, isHidden);
  updateEyeIcon(icon, isHidden);
}

/**
 * Indica si el campo de contraseña está oculto.
 * @param {HTMLInputElement} input
 * @returns {boolean}
 */
function isPasswordHidden(input) {
  return input.type === 'password';
}

/**
 * Alterna el tipo del input entre 'password' y 'text'.
 * @param {HTMLInputElement} input
 * @param {boolean} isCurrentlyHidden
 */
function setInputVisibility(input, isCurrentlyHidden) {
  input.type = isCurrentlyHidden ? 'text' : 'password';
}

/**
 * Actualiza el ícono del ojo según el estado de visibilidad.
 * @param {SVGElement} icon
 * @param {boolean} wasHidden - true = estaba oculto → mostrar ojo cerrado.
 */
function updateEyeIcon(icon, wasHidden) {
  icon.innerHTML = wasHidden ? SVG_EYE_CLOSED : SVG_EYE_OPEN;
}