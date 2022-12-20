const playersContainer = document.querySelector('.player-scores-container');

const playerMarkUp = (leader) => {
  const liMarkup = document.createElement('li');
  liMarkup.classList.add('player-details');
  liMarkup.innerHTML = `<p class="player-details-p"><span>${leader.user}</span> <span>:</span> <span>${leader.score}</span></p>`;
  playersContainer.appendChild(liMarkup);
};

export default playerMarkUp;