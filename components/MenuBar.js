const MenuBar = () => {
  return (
    <ul className="menu menu-horizontal px-1">
      <li>
        <a>
          Dashboard
        </a>
      </li>
      <li tabIndex={0}>
        <a>
          Documents
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li>
            <a>Submenu 1</a>
          </li>
          <li>
            <a>Submenu 2</a>
          </li>
          <li>
            <a>Submenu 3</a>
          </li>
        </ul>
      </li>
      <li>
        <a>
          <div className="indicator">
            Approve
            <span className="badge badge-sm indicator-item badge-secondary">11</span>
          </div>
        </a>
      </li>
      <li>
        <a>
          Settings
        </a>
      </li>
    </ul>
  );
};

export default MenuBar;
