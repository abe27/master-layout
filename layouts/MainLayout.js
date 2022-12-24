import { BreadcrumbBar, Header, NavBar } from "../components";

const MainLayout = ({ title, description, children }) => {
  return (
    <div className="min-h-full">
      <Header title={title} description={description} />
      <NavBar />
      <BreadcrumbBar />
      <main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
};

export default MainLayout;
