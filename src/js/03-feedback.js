import throttle from 'lodash.throttle'
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";

function populateTextarea() {
    const serializedStats = localStorage.getItem(STORAGE_KEY);
    const feedbackForm = JSON.parse(serializedStats) || {};
    if (!feedbackForm) {
        return;
    }
    const keys = Object.keys(feedbackForm);
    for (const key of keys) {
        form[key].value = feedbackForm[key];
    }
}
function onTextareaInput({target}){
    const serializedStats = localStorage.getItem(STORAGE_KEY);
const addForm = JSON.parse(serializedStats) || {};
addForm[target.name] = target.value;
localStorage.setItem( STORAGE_KEY, JSON.stringify(addForm));
}
function onFormSubmit(e) {
    e.preventDefault();
    console.log(localStorage.getItem(STORAGE_KEY));
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
}
form.addEventListener('input', throttle(onTextareaInput, 500))
form.addEventListener('submit', onFormSubmit);
populateTextarea();
