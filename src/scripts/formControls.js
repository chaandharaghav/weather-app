import { getData } from './getData';

// form submit events
export default function addFormEvents(elem) {
  elem.addEventListener('submit', (e) => {
    e.preventDefault();
    getData(e.target.childNodes[1].value);
  });
}
