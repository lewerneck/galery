document.addEventListener('DOMContentLoaded', () => {
  const photoGallery = document.getElementById('photo-gallery');
  
  // Lista de URLs de imagens fictícias (substitua pelas suas imagens)
  const photos = [
    'https://via.placeholder.com/400x300',
    'https://via.placeholder.com/300x400',
    'https://via.placeholder.com/400x400',
    'https://via.placeholder.com/400x200',
    'https://via.placeholder.com/200x400',
    'https://via.placeholder.com/300x300',
    'https://via.placeholder.com/350x300',
    'https://via.placeholder.com/300x350',
    'https://via.placeholder.com/450x350',
    'https://via.placeholder.com/350x450',
  ];

  // Adicionando imagens na galeria
  photos.forEach(photoUrl => {
    const imgElement = document.createElement('img');
    imgElement.src = photoUrl;
    imgElement.alt = "Photo";
    photoGallery.appendChild(imgElement);
  });
});
