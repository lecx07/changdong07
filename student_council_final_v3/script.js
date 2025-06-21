
document.addEventListener('DOMContentLoaded', () => {
  const firework = document.getElementById('firework');
  if (firework) {
    firework.addEventListener('click', () => {
      const navList = document.querySelector('nav ul');
      if (!document.getElementById('gallery-link')) {
        const newItem = document.createElement('li');
        const newLink = document.createElement('a');
        newLink.href = 'gallery.html';
        newLink.target = '_blank';
        newLink.textContent = '전지훈 갤러리';
        newLink.id = 'gallery-link';
        newItem.appendChild(newLink);
        navList.appendChild(newItem);
      }
    });
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const galleryLink = document.querySelector('a[href="gallery.html"]');
  if (galleryLink) {
    galleryLink.addEventListener('click', function(e) {
      e.preventDefault();
      alert("아직 준비중입니다.");
    });
  }
});
