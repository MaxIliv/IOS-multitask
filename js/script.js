(function() {
  const viewOne = document.querySelector('.view-one');
  const viewTwo = document.querySelector('.view-two');
  const inView = 'card--in-view';

  const yt = viewOne.querySelector('.card--yt');
  const insta = viewOne.querySelector('.card--instagram');

  const items = viewTwo.querySelectorAll('.card');
  const itemsNames = viewTwo.querySelectorAll('.card__name');

  viewTwo.addEventListener('scroll', function (e) {
    items.forEach((item, index, arr) => {
      const value = item.offsetLeft - viewTwo.scrollLeft;

      if (value >= 200) {
        item.classList.remove('card--size-99', 'card--size-98');
        itemsNames[index].style.opacity = 0;
        item.classList.add(inView);
      } else if (value >= 20) {
        item.classList.remove('card--size-99', 'card--size-98');
        item.classList.add(inView);
        itemsNames[index].style.opacity = 1;
      } else if (value + 30 >= 0) {
        item.classList.add('card--size-99');
        item.classList.remove('card--size-98');
        itemsNames[index].style.opacity = 0;
        item.classList.remove(inView);
      } else if (value + 150 >= 0) {
        item.classList.add('card--size-98');
        item.classList.remove('card--size-99');
        itemsNames[index].style.opacity = 0;
        item.classList.remove(inView);
      }
    });    
  });

  viewOne.addEventListener('click', () => {
    yt.classList.toggle('card--left');
    insta.classList.toggle('card--right');
  });

  const btn = document.querySelector('.switch-btn');
  btn.addEventListener('click', function () {
    document.body.classList.toggle('alternative-version');
    viewTwo.scrollLeft = viewTwo.scrollWidth;
  });
})();