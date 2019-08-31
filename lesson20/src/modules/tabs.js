  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
      tab = tabHeader.querySelectorAll('.service-header-tab'),
      tabContent = document.querySelectorAll('.service-tab');

    /* следующая функция будет перебирать все табы, 
    находить соответсвующий по index и его показывать,
    а те которые не нужны, будут скрываться, добавляя класс d-none */

    const toggleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    };

    tabHeader.addEventListener('click', (event) => {
      let target = event.target;
      target = target.closest('.service-header-tab'); // этот метод проверяет у элемента селектор
      // while(target !== tabHeader){
      // if (target.classList.contains('service-header-tab')){
      if (target) {
        tab.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });
        // return; // можно и убрать, но на всякий случай пусть остается
      }
      // target = target.parentNode;
      // }
    });
  };

  export default tabs;