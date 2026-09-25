document.addEventListener('DOMContentLoaded', () => {
  
  // Set tahun otomatis di footer
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Tombol Bagikan (Share)
  const shareBtn = document.getElementById('shareBtn');
  const toast = document.getElementById('toast');

  shareBtn.addEventListener('click', async () => {
    const shareData = {
      title: document.title,
      text: 'Kunjungi link media sosial saya!',
      url: window.location.href
    };

    // Menggunakan Web Share API jika didukung oleh browser/perangkat
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Pengguna membatalkan salin/berbagi
      }
    } else {
      // Fallback: Salin link langsung ke clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        showToast('Link profil berhasil disalin!');
      } catch (err) {
        showToast('Gagal menyalin link.');
      }
    }
  });

  // Fungsi untuk menampilkan pesan Toast
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }

});