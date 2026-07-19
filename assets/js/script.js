// Toggle menu navigasi di tampilan mobile
document.addEventListener('DOMContentLoaded', function () {
  var toggleBtn = document.querySelector('.nav-toggle');
  var navMenu = document.querySelector('.nav-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', function () {
      navMenu.classList.toggle('open');
    });
  }

  // Tandai menu aktif sesuai halaman yang sedang dibuka
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(function (link) {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // Validasi sederhana untuk form kontak
  var contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Terima kasih! Pesan Anda telah diterima (form ini masih contoh, belum terhubung ke server).');
      contactForm.reset();
    });
  }
});