const addName = document.getElementById('add-name');
const addScore = document.getElementById('add-score');

const clearScoresInputs = () => {
  addName.value = '';
  addScore.value = '';
};

export default clearScoresInputs;