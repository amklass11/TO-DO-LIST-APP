const button = document.getElementById('button-container');
const botonHandler = button.addEventListener('click', () => {
  const list = JSON.parse(localStorage.getItem('Tasks'));
  const result = list.filter((element) => element.completed !== true);
  localStorage.setItem('Tasks', JSON.stringify(result));
});

export default botonHandler;