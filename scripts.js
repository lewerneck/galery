document.addEventListener('DOMContentLoaded', () => {
  const photoGallery = document.getElementById('photo-gallery');

  // Lista de URLs de imagens públicas
  const photos = [
    'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png', 
    'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png', 
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Example.jpg/640px-Example.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/1/1e/Stonehenge.JPG',  
    'https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia-logo.png',  
    'https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg', 
    'https://upload.wikimedia.org/wikipedia/commons/3/3d/LARGE_elevation.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
    'https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png',
    'https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg'
  ];

  // Lista de URLs de vídeos públicos
  const videos = [
    'https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',  
    'https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4',  
    'https://archive.org/download/Popeye_forPresident/Popeye_forPresident_512kb.mp4',
  ];

  // Adicionando imagens à galeria
  photos.forEach(photoUrl => {
    const aElement = document.createElement('a');
    aElement.href = photoUrl;
    aElement.setAttribute('data-lightbox', 'gallery'); // Para Lightbox
    const imgElement = document.createElement('img');
    imgElement.src = photoUrl;
    imgElement.alt = "Photo";
    aElement.appendChild(imgElement);
    photoGallery.appendChild(aElement);
  });

  // Adicionando vídeos à galeria
  videos.forEach(videoUrl => {
    const videoElement = document.createElement('video');
    videoElement.src = videoUrl;
    videoElement.controls = true;
    videoElement.width = 200; // Largura do vídeo
    photoGallery.appendChild(videoElement);
  });
});
