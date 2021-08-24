// importing styles
import '../styles/formDisplay.css';

// importing scripts
import addFormEvents from './formControls';

// create form div and append to section
function loadForm() {
  const formDiv = document.createElement('div');
  formDiv.id = 'form-div';

  const form = document.createElement('form');

  const locationInput = document.createElement('input');
  locationInput.type = 'text';
  locationInput.id = 'js-location-input';

  const locationInputLabel = document.createElement('label');
  locationInputLabel.for = 'js-location-input';
  locationInputLabel.innerText = 'Enter City: ';

  const submitBtn = document.createElement('button');
  submitBtn.innerText = 'Search';

  form.append(locationInputLabel, locationInput, submitBtn);
  formDiv.append(form);

  // attach to section

  const section = document.querySelector('section');
  section.append(formDiv);

  addFormEvents(form);
}

export default loadForm;
