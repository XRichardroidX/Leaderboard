const dateContainer = document.querySelector('.date-show');

const renderCurrentTime = () => {
  const currentTime = new Date().toLocaleTimeString();
  dateContainer.innerHTML = currentTime;
};

export default renderCurrentTime;