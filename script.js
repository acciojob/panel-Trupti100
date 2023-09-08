const panels = document.querySelectorAll('.panel');

function toggleActive() {
  panels.forEach(panel => panel.classList.remove('active'));
  this.classList.add('active');
}

panels.forEach(panel => panel.addEventListener('click', toggleActive));
