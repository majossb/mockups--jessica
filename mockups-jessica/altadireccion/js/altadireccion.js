const VIEW_LABELS = {
  'v-dashboard':    'Dashboard General',
  'v-cumplimiento': 'Cumplimiento SG-SST',
  'v-sanciones':    'Riesgos y Sanciones',
  'v-plan':         'Plan de Mejora',
  'v-informes':     'Informes Ejecutivos',
  'v-historial':    'Historial Anual',
};

document.addEventListener('DOMContentLoaded', () => showView('v-dashboard'));

/**
 * Cambia la vista activa, actualiza el nav y el breadcrumb.
 * @param {string} viewId
 */
function showView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
  document.getElementById(viewId).style.display = 'block';
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelector(`[onclick="showView('${viewId}')"]`)?.classList.add('active');
  document.getElementById('breadcrumb-current').textContent = VIEW_LABELS[viewId] ?? viewId;
  window.scrollTo(0, 0);
}