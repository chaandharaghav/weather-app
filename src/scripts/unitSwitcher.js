// importing scripts
import { updateUnit } from './getData';

// importing styles
import '../styles/unitSwitcher.css';

function addUnitSwitcher() {
  const unitSwitcher = document.createElement('button');
  unitSwitcher.id = 'unit-switch-btn';
  unitSwitcher.innerText = 'C';

  // adding to body
  const body = document.querySelector('body');
  body.append(unitSwitcher);

  unitSwitcher.addEventListener('click', () => {
    if (unitSwitcher.innerText === 'C') {
      unitSwitcher.innerText = 'F';
    } else {
      unitSwitcher.innerText = 'C';
    }
    updateUnit();
  });
}

export default addUnitSwitcher;
