document.addEventListener('DOMContentLoaded', () => {
  const photoGallery = document.getElementById('photo-gallery');
  
  // Lista de URLs de imagens fictícias (substitua pelas suas imagens)
  const photos = [
  'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',  // Ícone de usuário
  'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png', // Imagem PNG transparente
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Example.jpg/640px-Example.jpg', // Foto de exemplo
  'https://upload.wikimedia.org/wikipedia/commons/1/1e/Stonehenge.JPG',  // Stonehenge
  'https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia-logo.png',  // Logotipo da Wikipedia
  'https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg', // Montanha Fronalpstock
  'https://upload.wikimedia.org/wikipedia/commons/3/3d/LARGE_elevation.jpg', // Paisagem
  'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png', // Imagem criada com celular
  'https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png',  // Logotipo do Google
  'https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg'  // Logotipo SVG
];

  // Adicionando imagens na galeria
  photos.forEach(photoUrl => {
    const imgElement = document.createElement('img');
    imgElement.src = photoUrl;
    imgElement.alt = "Photo";
    photoGallery.appendChild(imgElement);
  });
});
