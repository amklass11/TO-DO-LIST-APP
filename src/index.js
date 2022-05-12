import './style.css';
import './assets/images/refresh.png';
import './assets/images/arrow.png';
import './assets/images/dot.png';
import './assets/images/trash-can.png';
import userActionHandler from './modules/userActions';
import { initStorage } from './modules/localStorage';
import taskStatus from './modules/taskStatus';

userActionHandler();
window.addEventListener('load', initStorage);
window.addEventListener('load', taskStatus);
const button = document.getElementById('button-container');
button.addEventListener('click', () => {
  const list = JSON.parse(localStorage.getItem('Tasks'));
  const result = list.filter((element) => element.completed !== true);
  localStorage.setItem('Tasks', JSON.stringify(result));
});
