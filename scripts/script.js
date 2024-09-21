import {
  validatedate,
  validatemonth,
  validateyear,
  isDateValid,
} from './utils.js';

const inputElements = document.querySelectorAll('.card__input');
const submitButton = document.querySelector('.card__button');
const calculateAge = (year, month, day) => {
  const today = new Date();
  const birthdate = new Date(year, month - 1, day);
  let age = today.getFullYear() - birthdate.getFullYear();
  const monthDeff = today.getMonth() - birthdate.getMonth();
  if (
    monthDeff < 0 ||
    (monthDeff === 0 && today.getDate() < birthdate.getDate())
  ) {
    age--;
  }
  return age;
};

const clickHandler = () => {
  const dayElement = document.querySelector('.card__input[name="day"]');
  const monthElement = document.querySelector('.card__input[name="month"]');
  const yearElement = document.querySelector('.card__input[name="year"]');
  const resultElement = document.querySelector('.card__resultValue');

  resultElement.textContent = calculateAge(
    yearElement.value,
    monthElement.value,
    dayElement.value
  );

  if (!isDateValid(dayElement, monthElement, yearElement)) {
    resultElement.textContent = '--';
    return;
  }
};
inputElements.forEach((item) => {
  item.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      clickHandler();
    }
  });
});

submitButton.addEventListener('click', clickHandler);
