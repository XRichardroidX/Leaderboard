import display from './display.js';

const KEY = 'ogEBHq5P32FHEDzPh5SP';
const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const URL = `${BASE_URL}/games/${KEY}/scores/`;

const addPlayerToAPI = (player) => {
  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: player.user,
      score: player.score,
    }),
  })
    .then((response) => {
      const players = response.json();
      display();
      return players;
    })
    .then(() => {
      // console.log('Success:', player.result);
    })
    .catch(() => {
      // console.error('Error:', player);
    });
};

const addPlayer = (player) => new Promise((resolve, reject) => {
  addPlayerToAPI(player);
  const error = false;

  if (!error) {
    resolve();
  } else {
    reject(Error, 'something went wrong');
  }
});

export default addPlayer;