import InputSearch from "./InputSearch";
import UserPopper from "./UserPopper";
import Notification from "./Notification";
import BrandMenu from "./BrandMenu";
import MenuBar from "./MenuBar";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

const NavBar = () => {
  return (
    <div className="mx-auto max-w-7xl navbar bg-base-100">
      <div className="navbar-start">
        <BrandMenu />
      </div>
      <div className="navbar-center hidden md:block">
        <MenuBar />
      </div>
      <div className="navbar-end flex space-x-2">
        <InputSearch />
        <Notification />
        <UserPopper />
      </div>
    </div>
  );
};

export default NavBar;
