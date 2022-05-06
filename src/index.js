import './style.css';
const ul = document.querySelector('body ul');
const input = document.getElementById('add-input');

function generate(item, container) {
  const div = document.createElement('div');
  const element = item;
  const li = document.createElement('li');
  container.appendChild(li);
  const input = document.createElement('input');
  li.appendChild(div);
  input.setAttribute('type', 'checkbox');
  const label = document.createElement('label');
  div.appendChild(label);
  div.appendChild(input);
  const dotIcon = document.createElement('img');
  dotIcon.setAttribute('src', './assets/images/dot.png');
  dotIcon.classList.add('dotIcon');
  li.appendChild(dotIcon);
  li.classList.add(`index${element.index}`);
}

const generateItems = (tasksList, ul) => {
  for (let j = 0; j < tasksList.length; j += 1) {
    if (tasksList[j].index >= document.getElementsByClassName('taskDescription').length) {
      generate(tasksList[j], ul);
    }
  }
};

const addTask = (e) => {
  if (e.keyCode === 13) {
    const list = JSON.parse(localStorage.getItem('Tasks'));
    const item = {
      description: input.value,
      completed: false,
      index: list.length,
    };
    input.value = '';
    list.push(item);
    generateItems(list, ul);
  }
};

const userActionHandler = () => {
  input.addEventListener('keypress', addTask);
};

userActionHandler();
