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
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
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
