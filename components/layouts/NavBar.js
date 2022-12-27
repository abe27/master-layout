import InputSearch from "./InputSearch";
import UserPopper from "./UserPopper";
import Notification from "./Notification";
import BrandMenu from "./BrandMenu";
import MenuBar from "./MenuBar";

const NavBar = () => {
  return (
    <div className="mx-auto max-w-7xl navbar bg-base-100">
      <div className="navbar-start">
        <BrandMenu />
      </div>
      <div className="hidden navbar-center md:block">
        <MenuBar />
      </div>
      <div className="flex space-x-2 navbar-end">
        <InputSearch />
        <Notification />
        <UserPopper />
      </div>
    </div>
  );
};

export default NavBar;
