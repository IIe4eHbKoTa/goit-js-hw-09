import Notiflix from "notiflix";

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const inputDelay = parseInt(document.querySelector('input[name="delay"]').value, 10);
  const inputStep = parseInt(document.querySelector('input[name="step"]').value, 10);
  const inputAmount = parseInt(document.querySelector('input[name="amount"]').value, 10);


  function generatePromises(inputAmount, inputDelay, inputStep) {
    const promises = [];
    let currentDelay = inputDelay;

    for (let i = 0; i < inputAmount; i++) {
      const promise = createPromise(i + 1, currentDelay);

      promise
        .then((result) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${result.position} in ${result.delay}ms`);
        })
        .catch((error) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${error.position} in ${error.delay}ms`);
        });

      promises.push(promise);

      currentDelay += inputStep; 
    }
  }

  generatePromises(inputAmount, inputDelay, inputStep);

  const inputs = document.querySelectorAll('input')

  inputs.forEach(input => {
    input.value = ''
  })
});
