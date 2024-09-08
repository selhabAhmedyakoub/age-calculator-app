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

const validatedate = (date) => {
  if (date && date > 0 && date <= 31) {
    return true;
  }
};

const validatemonth = (month) => {
  if (month && month > 0 && month <= 12) {
    return true;
  }
};

const validateyear = (year) => {
  const currentyear = new Date().getFullYear();
  if (year && year > 0 && year <= currentyear) {
    return true;
  }
};

const isDateValid = (dayElement, monthElement, yearElement) => {
  let isValid = [false, false, false];

  if (!validatedate(dayElement.value)) {
    dayElement.classList.add('card__input--error');
  } else {
    isValid[0] = true;
    dayElement.classList.remove('card__input--error');
  }

  if (!validatemonth(monthElement.value)) {
    monthElement.classList.add('card__input--error');
  } else {
    isValid[1] = true;
    monthElement.classList.remove('card__input--error');
  }

  if (!validateyear(yearElement.value)) {
    yearElement.classList.add('card__input--error');
  } else {
    isValid[2] = true;
    yearElement.classList.remove('card__input--error');
  }

  return isValid.every((item) => item === true);
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
