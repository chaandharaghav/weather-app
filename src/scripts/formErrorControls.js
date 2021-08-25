function removeAlert() {
  const alertDiv = document.querySelector('#alert-div');
  if (alertDiv !== null) {
    alertDiv.remove();
  }
}

function alertUser(err) {
  removeAlert();
  const alertDiv = document.createElement('div');
  alertDiv.innerText = err;
  alertDiv.id = 'alert-div';

  const formDiv = document.querySelector('#form-div');
  formDiv.append(alertDiv);
}

export { alertUser, removeAlert };
