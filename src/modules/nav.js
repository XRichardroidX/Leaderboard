const navContainer = document.querySelector('.nav-container');

const navigationMarkUp = `
<ul class="nav">
    <li class="nav-item">
      <a class="nav-link active" href="#">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Contact</a>
    </li>
</ul>
`;

const renderNavigation = () => {
  navContainer.insertAdjacentHTML('afterbegin', navigationMarkUp);
};

export default renderNavigation;