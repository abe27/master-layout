import Link from "next/link";

const MenuBar = () => {
  return (
    <ul className="px-1 menu menu-horizontal">
      <li className="">
        <Link href="/">
          <span className="hover:text-gray-400">Dashboard</span>
        </Link>
      </li>
      <li tabIndex={0}>
        <span className="hover:text-gray-400">
          Documents
          <svg
            className="text-gray-800 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L1/administrators2,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </span>
        <ul className="z-50 p-2 bg-base-100">
          <li>
            <Link href={`/documents/1`}>
              <span className="hover:text-gray-400">Submenu 1</span>
            </Link>
          </li>
          <li>
            <Link href={`/documents/2`}>
              <span className="hover:text-gray-400">Submenu 2</span>
            </Link>
          </li>
          <li>
            <Link href={`/documents/3`}>
              <span className="hover:text-gray-400">Submenu 3</span>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/approves">
          <span className="hover:text-gray-400">
            <div className="indicator">
              Approve
              <span className="badge badge-sm indicator-item badge-secondary">
                11
              </span>
            </div>
          </span>
        </Link>
      </li>
      <li className="">
        <Link href="/plannings">
          <span className="hover:text-gray-400">Planning</span>
        </Link>
      </li>
      <li>
        <Link href="/administrators">
          <span className="hover:text-gray-400">Settings</span>
        </Link>
      </li>
    </ul>
  );
};

export default MenuBar;
