  const photos = () => {
    const commandPhoto = document.querySelectorAll('.command__photo');

    commandPhoto.forEach(item => {
      let change;

      item.addEventListener('mouseenter', (event) => {
        change = event.target.src;
        event.target.src = event.target.dataset.img;
      });

      item.addEventListener('mouseleave', (event) => {
        event.target.src = change;
      });
    });
  };

  export default photos;