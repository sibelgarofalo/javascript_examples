const getSleepHours = (day) => {
  if (day === "monday") {
    return 8;
  } else if (
    day === "tuesday" ||
    day === "wednesday" ||
    day === "thursday" ||
    day === "friday" ||
    day === "saturday"
  ) {
    return 7;
  } else if (day === "sunday") {
    return 9;
  }
};
console.log(getSleepHours("sunday"));
const getActualSleepHours = () => {
   getSleepHours('monday') +
      getSleepHours('tuesday') +
      getSleepHours('wednesday') +
      getSleepHours('thursday') +
      getSleepHours('friday') +
      getSleepHours('saturday') +
      getSleepHours('sunday'); 
 }
  const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};    
const calculateSleepDebt = () => {
const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();};


console.log(getIdealSleepHours());

const caculateSleepDebt = () => {
const actualSleepHours = getActualSleepHours();
const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
console.log('You have got the perfect amount of sleep.');}
    if (actualSleepHours > idealSleepHours) {
console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');};
    if (actualSleepHours < idealSleepHours) {
console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) more than you needed this week. Well Done.');};
};

calculateSleepDebt();





