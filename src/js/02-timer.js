import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates.length > 0) {
      const selectedDate = new Date(selectedDates[0]);
      const currentDate = new Date();

      if (selectedDate < currentDate) {
        Notiflix.Notify.warning('Please choose a date in the future');
      } else {
        startBtn.disabled = false;
      }
    }
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const datetimePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const timerFields = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

flatpickr(datetimePicker, options);

startBtn.disabled = true;

startBtn.addEventListener('click', function () {
  const selectedDate = new Date(datetimePicker.value);

  Notiflix.Notify.success('Timer Start');
  startBtn.disabled = true;
  datetimePicker.disabled = true;

  const timerInterval = setInterval(updateTimer, 1000);

  function updateTimer() {
    const timeDiff = selectedDate - new Date();
    if (timeDiff <= 0) {
      clearInterval(timerInterval);
      Notiflix.Notify.success("Time's up!");
      startBtn.disabled = false;
      datetimePicker.disabled = false;
    } else {
      const timeObj = convertMs(timeDiff);
      updateTimerDisplay(timeObj);
    }
  }

  function updateTimerDisplay(timeObj) {
    timerFields.days.textContent = addLeadingZero(timeObj.days);
    timerFields.hours.textContent = addLeadingZero(timeObj.hours);
    timerFields.minutes.textContent = addLeadingZero(timeObj.minutes);
    timerFields.seconds.textContent = addLeadingZero(timeObj.seconds);
  }

  function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  }
});
