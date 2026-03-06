const VIEW_LABELS = {
  'v-panel':          'Mi Panel',
  'v-estandares':     'Estándares Mínimos',
  'v-autoevaluacion': 'Autoevaluación Anual',
  'v-evidencias':     'Evidencias',
  'v-plan':           'Plan de Trabajo',
  'v-capacitaciones': 'Capacitaciones',
};

document.addEventListener('DOMContentLoaded', () => showView('v-panel'));

/**
 * Cambia la vista activa, actualiza el nav y el breadcrumb.
 * @param {string} viewId
 */
function showView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
  document.getElementById(viewId).style.display = 'block';
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelector(`[onclick="showView('${viewId}')"]`)?.classList.add('active');
  document.getElementById('bc').textContent = VIEW_LABELS[viewId] ?? viewId;
  window.scrollTo(0, 0);
}