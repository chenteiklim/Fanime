const button = document.getElementById('get-waifu-btn');
const imageContainer = document.getElementById('image-container');

button.addEventListener('click', () => {
  fetch('https://api.waifu.pics/sfw/waifu')
    .then(response => response.json())
    .then(data => {
      const imageUrl = data.url;
      const imageElement = document.createElement('img');
      imageElement.src = imageUrl;
      imageContainer.innerHTML = ''; // Clear any previous image
      imageContainer.appendChild(imageElement);
    })
    .catch(error => console.error(error));
});
