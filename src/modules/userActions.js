import { input } from './htmlElements';
import addTask from './addTask';

const userActionHandler = () => {
  input.addEventListener('keypress', addTask);
};

export default userActionHandler;