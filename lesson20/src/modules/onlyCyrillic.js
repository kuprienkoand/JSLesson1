  const onlyCyrillic = () => {
    let UserName = document.querySelectorAll('input[name*="user_name"]'),
      userMessage = document.querySelectorAll('input[name*="user_message"]');

    UserName.forEach((item) => {
      item.addEventListener('input', () => {
        item.value = item.value.replace(/[^А-Яа-я\s]/gi, '');
      });
    });

    userMessage.forEach((item) => {
      item.addEventListener('input', () => {
        item.value = item.value.replace(/[^А-Яа-я\s]/gi, '');
      });
    });
  };

  export default onlyCyrillic;