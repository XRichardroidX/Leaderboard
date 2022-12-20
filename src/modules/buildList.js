const buildList = async (containerElement, list) => {
  containerElement.style.display = 'block';
  containerElement.innerHTML = '';

  for (let i = 0; i <= list.length - 1; i += 1) {
    const scoreContainer = document.createElement('div');
    scoreContainer.innerHTML = `${list[i].user}: ${list[i].score}`;
    if (i % 2 !== 0) {
      scoreContainer.style.backgroundColor = '#E7E9EB';
    }
    containerElement.appendChild(scoreContainer);
  }
};

export default buildList;