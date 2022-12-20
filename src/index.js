import _ from 'lodash'; // eslint-disable-line
import './style.css';
import Leader from './modules/player.js';
import display from './modules/display.js';
import clearScoresInputs from './modules/clear-inputs.js';
import addPlayer from './modules/add-player.js';
import renderNavigation from './modules/nav.js';
import renderContact from './modules/contact.js';
import renderFooter from './modules/footer.js';
import renderCurrentTime from './modules/date.js';

const addBtn = document.querySelector('form');
const addName = document.getElementById('add-name');
const addScore = document.getElementById('add-score');
const regex = /^[0-9]+$/;
const refreshBtn = document.querySelector('.refresh-btn');
const inputMsg = document.querySelector('.input-msg');

renderNavigation();
// setInterval(renderCurrentTime, 1000);
setInterval(() => {
  renderCurrentTime();
}, 1000);
renderFooter();

const navLinks = document.querySelectorAll('.nav-link');
const mainContainer = document.querySelector('.m-container');
const mainContainer2 = document.querySelector('.m-container2');

// callback function
const renderPage = (location, page) => {
  location.innerHTML = '';
  page();
};

const removeActive = () => {
  navLinks.forEach((link) => {
    if (link.classList.contains('active')) {
      link.classList.remove('active');
    }
  });
};

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    if (e.target.textContent === 'Home') {
      removeActive();
      e.target.classList.add('active');
      mainContainer.classList.remove('diplay-none');
      mainContainer2.innerHTML = '';
    }

    if (e.target.textContent === 'Contact') {
      removeActive();
      e.target.classList.add('active');
      renderPage(mainContainer2, renderContact);
      mainContainer.classList.add('diplay-none');
    }
  });
});

const displayStatus = document.querySelector('.display-status');

addBtn.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = addName.value;
  const score = addScore.value;
  if (name && score) {
    if (regex.test(score)) {
      const player = new Leader(name, score);

      addPlayer(player).then(
        displayStatus.innerHTML = 'New leader score added!',
        setTimeout(() => {
          displayStatus.innerHTML = '';
        }, 4000),
      );

      clearScoresInputs();
    } else {
      clearScoresInputs();
      inputMsg.innerHTML = 'Score should be a number';
    }
  } else {
    inputMsg.innerHTML = 'Inputs can not be empty';
  }
  setTimeout(() => {
    inputMsg.innerHTML = '';
  }, 3000);
});

refreshBtn.addEventListener('click', () => {
  display();
});
