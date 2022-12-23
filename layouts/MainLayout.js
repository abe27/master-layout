import { NavBar, BreadcrumbBar, Header } from "../components";

const MainLayout = ({ title, description, children }) => {
  return (
    <div className="min-h-full">
      <Header title={title} description={description} />
      <NavBar />
      <BreadcrumbBar />
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <main className="mt-4">
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
              {/* Replace with your content */}
              <div className="sm:px-0">{children}</div>
              {/* /End replace */}
            </div>
          </main>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
