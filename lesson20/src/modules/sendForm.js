  const sendForm = () => {

    const errorMessage = 'Что-то пошло не так...',
      loadMessage = 'Загрузка....',
      successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    const form = document.getElementById('form1'),
      form2 = document.getElementById('form2'),
      form3 = document.getElementById('form3');

    const statusMessage = document.createElement('div'); // элемент, в который помещатся сообщения выше
    // statusMessage.textContent = 'Тут будет сообщение';
    statusMessage.style.cssText = 'font-size: 2rem';

    form.addEventListener('submit', (event) => {
      event.preventDefault(); // запрет стандартного события (перезагрузка страницы)
      form.appendChild(statusMessage);
      statusMessage.textContent = loadMessage; // выводится сообщение о загрузке
      const formData = new FormData(form);
      let body = {};

      /*   for (let val of formData.entries()) {
          body[val[0]] = val[1];
        } */

      formData.forEach((val, key) => {
        body[key] = val;
      });

      postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('status network not 200');
          }
          form.reset();
          statusMessage.textContent = successMessage;
        })
        .catch((error) => {
          form.reset();
          statusMessage.textContent = errorMessage;
          console.error(error);
        });

      // нижнее перепишем в fetch

      /* const successMessageProm = () => {
        form.reset();
        statusMessage.textContent = successMessage;
      };
      const errorMessageProm = () => {
        form.reset();
        statusMessage.textContent = errorMessage;
      };

      postData(body)
        .then(successMessageProm)
        .catch(errorMessageProm); */

    });

    form2.addEventListener('submit', (event) => {
      event.preventDefault();
      form2.appendChild(statusMessage);
      statusMessage.textContent = loadMessage;
      const formData = new FormData(form2);
      let body = {};

      formData.forEach((val, key) => {
        body[key] = val;
      });

      postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('status network not 200');
          }
          form2.reset();
          statusMessage.textContent = successMessage;
        })
        .catch((error) => {
          form2.reset();
          statusMessage.textContent = errorMessage;
          console.error(error);
        });

      // нижнее перепишем в fetch

      /* const successMessageProm = () => {
        form2.reset();
        statusMessage.textContent = successMessage;
      };
      const errorMessageProm = () => {
        form2reset();
        statusMessage.textContent = errorMessage;
      };

      postData(body)
        .then(successMessageProm)
        .catch(errorMessageProm); */

    });

    form3.addEventListener('submit', (event) => {
      event.preventDefault();
      form3.appendChild(statusMessage);
      statusMessage.textContent = loadMessage;
      statusMessage.style.cssText = 'color: white';
      const formData = new FormData(form3);
      let body = {};

      formData.forEach((val, key) => {
        body[key] = val;
      });

      postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('status network not 200');
          }
          form3.reset();
          statusMessage.textContent = successMessage;
        })
        .catch((error) => {
          form3.reset();
          statusMessage.textContent = errorMessage;
          console.error(error);
        });

      // нижнее перепишем в fetch

      /*  const successMessageProm = () => {
         form3.reset();
         statusMessage.textContent = successMessage;
       };
       const errorMessageProm = () => {
         form3.reset();
         statusMessage.textContent = errorMessage;
       };
 
       postData(body)
         .then(successMessageProm)
         .catch(errorMessageProm); */

    });

    const postData = (body) => {
      return fetch('./server.php', {
        method: 'POST', // указываем POST, по умолчани. у fetch GET
        headers: {
          'Content-Type': 'application/json' // свойство: значение
        },
        body: JSON.stringify(body),
        credentials: 'include' // передает параметры идентификации, и проверка на сервере будет проходить с помощью куки
      });

      // переписан запрос ниже

      /* return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {

          if (request.readyState !== 4) {
            return;
          }
          if (request.status === 200) {
            resolve();
          } else {
            reject(request.statusText);
          }
        });

        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify(body));
      }); */
    };

    // нижнее перепишем в fetch 

    /* const postData = (body) => {
      return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {

          if (request.readyState !== 4) {
            return;
          }
          if (request.status === 200) {
            resolve();
          } else {
            reject(request.status);
          }
        });

        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify(body));
      });
    }; */
  };

  export default sendForm;