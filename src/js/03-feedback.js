import throttle from 'lodash.throttle';

const storageBox = 'feedback-form-state';
const formData = {};
const formRef = document.querySelector('.feedback-form');

const formInput = e => {
  console.log(e.target.name);
  console.log(e.target.value);
  formData[e.target.name] = e.target.value;
  console.log(formData);
  localStorage.setItem(storageBox, JSON.stringify(formData));
};

const formSubmit = e => {
  e.preventDefault();
  const { email, message } = e.target.elements;
  if (!(email.value && message.value)) {
    return console.log('Uzupelnij puste pola/e');
  }

  console.log({ email: email.value, message: message.value });
  e.currentTarget.reset();
  localStorage.removeItem(storageBox);
};

const textarea = () => {
  const savedDataForm = localStorage.getItem(storageBox);
  if (savedDataForm === null) {
    return;
  }

  const dataForm = JSON.parse(savedDataForm);

  for (let [name, value] of Object.entries(dataForm)) {
    formRef.elements[name].value = value;
    formData[name] = value;
  }
};
textarea();
formRef.addEventListener('input', throttle(formInput, 500));
formRef.addEventListener('submit', formSubmit);