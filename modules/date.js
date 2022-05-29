export * from "./date.js"

// set time
const displayDate = () => {
  const date = new Date();
  const options = {
    weekday: undefined,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const [month, time] = [
    date.toLocaleDateString(undefined, options),
    date.toLocaleTimeString().toLocaleLowerCase(),
  ];
  document.getElementById('time').innerHTML = `${month}, ${time}`;
};
// displayDate();
// setInterval(displayDate, 1000);
