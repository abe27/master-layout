import { NavBar, BreadcrumbBar } from "../components";
const IndexPage = () => {
  return (
    <>
      <div className="min-h-full">
        <NavBar/>
        <BreadcrumbBar />
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="sm:px-0">
              <h1>Hello</h1>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
};

export default IndexPage;
