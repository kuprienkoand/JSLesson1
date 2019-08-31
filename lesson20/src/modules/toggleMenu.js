  const toggleMenu = () => {

    const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      closeBtn = document.querySelector('.close-btn'),
      menuItems = menu.querySelectorAll('ul>li');

    const handlerMenu = () => {
      /* if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
        menu.style.transform = `translate(0)`;
      } else {
        menu.style.transform = `translate(-100%)`;
      } // перепишем это условие */

      menu.classList.toggle('active-menu'); // метод добавляет/убирает класс
    };
    // btnMenu.addEventListener('click', handlerMenu);
    // closeBtn.addEventListener('click', handlerMenu);

    /* for (let i = 0; i < menuItems.length; i++){
      menuItems[i].addEventListener('click', handlerMenu);
    } // ниже переписан цикл for в одну строку */

    // menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));

    document.addEventListener('click', (event) => {
      let target = event.target;

      if (target.classList.contains('close-btn')) {
        handlerMenu();
      } else if (target.closest('menu ul>li')) {
        handlerMenu();
      } else if (target.classList.contains('active-menu')) {
        handlerMenu();
      } else {
        target = target.closest('.menu');

        if (target) {
          handlerMenu();
        } else if (!target) {
          menu.classList.remove('active-menu');
        }
      }
    });

  };

  export default toggleMenu;