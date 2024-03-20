const Navbar = () => {
  return (
    <div class="nav">
      <div class="header">LMS</div>
      <ul class="nav-item">
        <li class="list-item">
          <button type="button" class="btn collapsible" id="collapsible">
            <i class="far fa-bell"></i>
          </button>
          <div class="content">
            <div class="flex">
              <p>Notifications</p>
              <small>Clear All</small>
            </div>
            <div class="notification">
              <p class="message">
                Hi, How are you? What about our next meeting, Hi, How are you?
                What about our next meeting
              </p>
              <p class="message">
                Hi, How are you? What about our next meeting
              </p>
              <p class="message">
                Hi, How are you? What about our next meeting
              </p>
              <p class="message">
                Hi, How are you? What about our next meeting, Hi, How are you?
                What about our next meeting
              </p>
              <p class="message">
                Hi, How are you? What about our next meeting
              </p>
              <p class="message">
                Hi, How are you? What about our next meeting
              </p>
            </div>
            <div class="extra"></div>
          </div>
        </li>
        <li class="list-item">
          <div class="flex">
            <img
              class="img-fluid"
              src="https://i.ibb.co/yNGW4gg/avatar.png"
              alt="img"
            />
            <p class="aname">Eren Jeager</p>
          </div>
        </li>
        <li class="list-item">
          <a class="list-link" href="#0">
            <i class="fas fa-cog"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
