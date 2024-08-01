const Header = () => {
  return (
    <header className="text-black-200 body-font">
      <div className="container mx-auto w-full max-w-screen-xl flex flex-wrap flex-col md:flex-row items-center">
        <a href="/">
          <img src="/logo1.png" alt="logo" className="w-16 h-16" />
        </a>

        <nav className="ml-auto flex flex-wrap items-center justify-center text-base">
          <a href="/" className="mr-5 hover:text-[#0D7ABF]">
            Home
          </a>
          <a href="#service-page" className="mr-5  hover:text-[#0D7ABF]">
            Services
          </a>
          <a href="#about" className="mr-5  hover:text-[#0D7ABF]">
            About
          </a>
          <a href="#footer" className="mr-5  hover:text-[#0D7ABF]">
            Career
          </a>
          <button className="inline-flex text-white bg-[#0D7ABF] border-0 py-1 px-3 focus:outline-none hover:bg-[#0a5483] rounded-[26px] text-base mt-4 md:mt-0">
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
