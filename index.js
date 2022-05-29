import * as myBooks from './modules/books.js'
import {
  DateTime
} from './modules/luxon.js';
import * as myDate from './modules/date.js'
import * as myNav from './modules/nav.js'

const displayDate = () => {
  const now = DateTime.local();
  console.log(now);
  document.getElementById('time').innerHTML = `${now}`;
}

setInterval(displayDate, 1000);

// let dt = DateTime.fromObject({day: 22, hour: 12 }, { zone: 'America/Los_Angeles',
// numberingSystem: 'beng'})
