import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

let formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);

refs.form.addEventListener('input', throttle(onFormInput, 500));

populateFormData();

function onFormSubmit(event) {
  event.preventDefault();

    const submitData = localStorage.getItem(STORAGE_KEY);
    const parsedSubmitData = JSON.parse(submitData);
    const email = refs.form.email.value;
    const message = refs.form.message.value;
    
    if (email === "" || message === "") {
    return alert('Пожалуйста, заполните все поля');
    }
    if (parsedSubmitData) {
    console.log(parsedSubmitData);
    }

    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFormData() {
  if (localStorage.getItem(STORAGE_KEY)) {
    const saveData = localStorage.getItem(STORAGE_KEY);
    formData = JSON.parse(saveData);
  }

  if (formData.email) {
    refs.input.value = formData.email;
  }

  if (formData.message) {
    refs.textarea.value = formData.message;
  }
};
