  const number = () => {
    const calcItem = document.querySelectorAll('.calc-item');

    calcItem.forEach((item) => {
      item.addEventListener('input', (event) => {

        if (!event.target.matches('input')) {
          return;
        }

        event.target.value = event.target.value.replace(/\D/gi, '');
      });
    });
  };

  export default number;