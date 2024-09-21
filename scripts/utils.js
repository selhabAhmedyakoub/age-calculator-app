export { validatedate, validatemonth, validateyear, isDateValid };

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
