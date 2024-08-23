import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import novaLogo from '../assets/nova-logo-1.png';
import { useArtists } from '../DatabaseContext';

const Header = () => {
  const { artists } = useArtists();
  const links = [
    { path: '/', text: 'Home' },
    ...artists.map(({ id, name }) => ({
      path: `/artists/${id}`,
      text: name,
    })),
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile */}
      <article className="lg:hidden">
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="lg:hidden"
            aria-label="Open"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            </svg>
          </button>

          <Link to="/">
            <img src={novaLogo} alt="Nova Logo" className="w-20 md:w-28" />
          </Link>
        </div>

        <nav
          className={`lg:hidden fixed top-0 left-0 w-full h-full bg-black z-10 transform transition-transform duration-200 ease-in-out p-4 flex flex-col justify-between ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="lg:hidden"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <Link to="/">
              <img src={novaLogo} alt="Nova Logo" className="w-20 md:w-28" />
            </Link>
          </div>

          <ul className="flex flex-col text-md font-bold items-center uppercase">
            {links.map(({ path, text }) => (
              <li key={text} className="w-full">
                <NavLink
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className="w-full block text-center py-2"
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="pb-6">
            <p className="text-xs text-center font-bold">&copy; 2024 - Nova Art Collective</p>
          </div>
        </nav>
      </article>

      {/* Desktop */}
      <article className="hidden lg:flex flex-col items-center justify-between h-full pb-6 border-r-slate-900">
        <img src={novaLogo} alt="nova-logo-full" className="mt-3 w-[45%]" />

        <nav className="uppercase">
          <ul className="hidden lg:flex flex-col text-md m-0 font-bold">
            {links.map(({ path, text }) => (
              <li key={text}>
                <NavLink to={path} className="block text-center py-2 hover:text-[#ffdb0f]">
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-xs text-center font-bold mt-4">&copy; 2024 - Nova Art Collective</p>
      </article>
    </>
  );
};

export default Header;
