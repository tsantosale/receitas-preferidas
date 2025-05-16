
let likeCount = 0;

const likeButton = document.getElementById('likeButton');
const likeCountSpan = document.getElementById('likeCount');

likeButton.addEventListener('click', () => {
    likeCount++;
    likeCountSpan.textContent = likeCount + ' curtidas';
});
