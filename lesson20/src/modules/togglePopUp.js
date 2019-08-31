  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn'),
      // popupClose = document.querySelector('.popup-close'),
      popupContent = document.querySelector('.popup-content');

    popupBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        popup.style.display = 'block';

        if (document.documentElement.clientWidth > 748) {
          let start = Date.now();

          const timer = setInterval(() => {
            let timePassed = Date.now() - start;

            if (timePassed >= 1500) {
              clearInterval(timer);
              return;
            }
            motion(timePassed);
          }, 20);

          const motion = (timePassed) => {
            popupContent.style.top = timePassed / 10 + 'px';
            popupContent.style.left = timePassed / 40 + '%';
          };
        } else {
          popup.style.display = 'block';
        }
      });
    });

    /*  popupClose.addEventListener('click', () => {
       popup.style.display = 'none';
     }); */

    popup.addEventListener('click', (event) => {
      let target = event.target;

      if (target.classList.contains('popup-close')) {
        popup.style.display = 'none';
      } else {
        target = target.closest('.popup-content');

        if (!target) {
          popup.style.display = 'none';
        }

      }
    });
  };

  export default togglePopUp;