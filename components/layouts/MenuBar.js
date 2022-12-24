import Link from "next/link";

const MenuBar = () => {
  return (
    <ul className="menu menu-horizontal px-1">
      <li className="">
        <Link href="/">
          <span className="hover:text-gray-400">Dashboard</span>
        </Link>
      </li>
      <li tabIndex={0}>
        <span className="hover:text-gray-400">
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
        </span>
        <ul className="p-2 bg-base-100 z-50">
          <li>
            <span className="hover:text-gray-400">Submenu 1</span>
          </li>
          <li>
            <span className="hover:text-gray-400">Submenu 2</span>
          </li>
          <li>
            <span className="hover:text-gray-400">Submenu 3</span>
          </li>
        </ul>
      </li>
      <li>
        <span className="hover:text-gray-400">
          <div className="indicator">
            Approve
            <span className="badge badge-sm indicator-item badge-secondary">11</span>
          </div>
        </span>
      </li>
      <li>
        <span className="hover:text-gray-400">
          Settings
        </span>
      </li>
    </ul>
  );
};

export default MenuBar;
