const footerContainer = document.querySelector('.f-container');

const date = new Date();

const footerMarkUp = `
    <p class="footer-details">Mancoba Sihlongonyane &copy <span>${date.getFullYear()}</span></p>
`;

const renderFooter = () => {
  footerContainer.insertAdjacentHTML('beforeend', footerMarkUp);
};

export default renderFooter;