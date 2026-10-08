document.addEventListener('DOMContentLoaded', () => {
  alert('Welcome to my website!');

  const title = document.querySelector('h1');

  if (title) {
    title.addEventListener('click', () => {
      title.style.color = title.style.color === 'darkblue' ? 'red' : 'darkblue';
    });
  }
});
