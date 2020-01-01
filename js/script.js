(function() {
  const yt = document.querySelector('.card--yt');
  const insta = document.querySelector('.card--instagram');


  document.addEventListener('click', () => {
    yt.classList.toggle('card--left');
    insta.classList.toggle('card--right');
  });
})();