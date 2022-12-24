import Link from "next/link";
import ImageUrl from "./ImageUrl";

const UserPopper = () => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <ImageUrl />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link href={`/profile`}>Profile</Link>
        </li>
        <li>
          <Link href={`/settings`}>Settings</Link>
        </li>
        <li>
          <Link href={`/auth`}>Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserPopper;
