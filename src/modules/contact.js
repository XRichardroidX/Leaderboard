const mainContainer = document.querySelector('.m-container2');

const contactMarkUp = `
<div class="c-container">
    <h2 class="title-contact">Contact Me</h2>
    <h4>Reach out to me via </h4>
    <p class="details">
        <address>
            <strong>GitHub : </strong><a class="contact-link" href="http://github.com/XRichardroidX" target="_blank">GitHub/RicharDroidX</a></p><br>
            <strong>LinkedIn : </strong><a class="contact-link" href="https://www.linkedin.com/in/richard-oguzie-ibeh-b4a975231" target="_blank">LinkedIn Richard O.I.</a></p>
        </address>
    </p>
</div>
`;

const renderContact = () => {
  mainContainer.insertAdjacentHTML('beforeend', contactMarkUp);
};

export default renderContact;
