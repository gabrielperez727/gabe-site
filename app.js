const temps = [17, 21, 23, 12];
const days = [1, 2, 3];

const printForecast = function () {
  for (let i = 0; i < temps.length; i++) {
    days.push(i);
    temps.push(i);
    console.log(`${temps[i]} degrees C in ${days[i]} days `);
  }
};

console.log(printForecast(temps));
