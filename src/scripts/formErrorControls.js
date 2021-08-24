function alertUser(err) {
  const alertDiv = document.createElement('div');
  alertDiv.innerText = err;
  alertDiv.id = 'alert-div';

  const formDiv = document.querySelector('#form-div');
  formDiv.append(alertDiv);
}

function removeAlert() {
  const alertDiv = document.querySelector('#alert-div');
  if (alertDiv !== null) {
    alertDiv.remove();
  }
}

export { alertUser, removeAlert };
