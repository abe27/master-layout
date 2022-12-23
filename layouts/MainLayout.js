import { NavBar, BreadcrumbBar,Header } from "../components";

const MainLayout = ({ title, description, children }) => {
  return (
    <div className="min-h-full">
      <Header title={title} description={description}/>
      <NavBar />
      <BreadcrumbBar />
      <main className="mt-4">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="sm:px-0">{children}</div>
          {/* /End replace */}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
