import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-6 fixed top-0 z-20 `}
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={() => {
          setActive("");
          window.screenTop(0, 0);
        }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className=" px-2 text-white font-bold cursor-pointer text-[18px]">Priyank Saini</p>
        </Link>

        <ul className="list-none flex-row gap-10 hidden sm:flex">
          {navLinks.map((links) => (
            // eslint-disable-next-line react/jsx-key
            <li
              key={links.id}
              className={`${active === links.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer
            }`} onClick={() => setActive(links.title)}>
              <a href={`#${links.id}`}>{links.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle(!toggle)} />
        </div>

        <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className="list-none justify-end items-start gap-4 flex-col">
            {navLinks.map((links) => (
              // eslint-disable-next-line react/jsx-key
              <li
                key={links.id}
                className={`${active === links.title ? "text-white" : "text-secondary"} font-poppins text-[16px] font-medium cursor-pointer
            }`} onClick={() => {
                  setToggle(!toggle)
                  setActive(links.title)
                }}>
                <a href={`#${links.id}`}>{links.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;
