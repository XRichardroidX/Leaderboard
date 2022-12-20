const footerContainer = document.querySelector('.f-container');

const date = new Date();

const footerMarkUp = `
    <p class="footer-details">Richard Oguzie-Ibeh &copy <span>${date.getFullYear()}</span></p>
`;

const renderFooter = () => {
  footerContainer.insertAdjacentHTML('beforeend', footerMarkUp);
};

export default renderFooter;