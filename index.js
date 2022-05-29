import './modules/books.js';
import './modules/nav.js';
import { DateTime } from './modules/luxon.js';

const displayDate = () => {
  const now = DateTime.local();
  document.getElementById('time').innerHTML = `${now}`;
};

setInterval(displayDate, 1000);
