import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import Skillpage from "../skills/Skillpage";
import { Link } from "react-router-dom";

const Menu = () => {
  // const [click, setClick] = useState(false);
  // const handleClicked =()=>setClick(!click);
  return (
    <>
      <div className=" flex justify-center h-[100vh p-12 bg-white">
        <ul className=" flex flex-col gap-14 w-[600px] h-[330px] border-[1px] ">
          <li className=" flex items-center justify-between border-[1px]  h-10 ">
            About <IoMdArrowDropdown />
          </li>
          <li className=" flex items-center justify-between border-[1px]  h-10">
            skills <Link to='/skill'><IoMdArrowDropdown /> </Link>
          </li>
          <li className=" flex items-center justify-between border-[1px] h-10">
            Experience <IoMdArrowDropdown />
          </li>
          <li className=" flex items-center justify-between border-[1px] h-10">
            Projects <Link to='/project'><IoMdArrowDropdown /></Link>
          </li>
        </ul>
      </div>
      {/* <div className={click?'skill active':'skill'}><Skillpage /></div> */}
    </>
  );
};

export default Menu;
