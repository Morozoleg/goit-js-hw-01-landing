import refs from './refs';

refs.form.addEventListener('submit', handleSubmittedData);

function handleSubmittedData(event) {
  event.preventDefault();
  const formRef = event.target;
  const formData = new FormData(formRef);

  const submittedData = {};

  formData.forEach((value, key) => {
    submittedData[key] = value;
  });
  console.log(submittedData);
}
