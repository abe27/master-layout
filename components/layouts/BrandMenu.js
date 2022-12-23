const BrandMenu = () => {
  return (
    <>
      <label tabIndex={0} className="btn btn-ghost btn-circle" htmlFor="my-drawer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </label>
    </>
  );
};

export default BrandMenu;
