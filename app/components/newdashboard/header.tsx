import { Link } from "@remix-run/react";
import { useState } from "react";
import ProImg from "~/assets/images/pic.jpg"
import ProfileIndex from "~/components/newdashboard/profile";
export default function Header() {
  const [openProfile, setOpenProfile] = useState(false);
  const handleMenuClick = () => {
    setOpenProfile(!openProfile);
};
  return (
    <div>
      <div className="flex justify-between bg-[#6690FF] py-2">
        <div className="pl-10 flex ">
          <input
            className="h-8 rounded-l-xl px-4 py-2 outline-none items-center"
            type="text"
            placeholder="Search..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-8 rounded-r-lg pr-2 w-6  bg-white text-[#a7a5a5]
            "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          
        </div>
        <div className=" pr-10">
          {/* <Link to="/dashboardcontainerv1/profile"> */}
          <img
          onClick={handleMenuClick}
            className=" relative w-[35px] rounded-full object-cover cursor-pointer"
            src={ProImg}
            alt="profile Image"
          />
          {
            openProfile&&
              <div className=" mt-2 right-5 absolute">
                <ProfileIndex/>
              </div>
                
            
          }
          {/* </Link> */}
          
        </div>
      </div>
    </div>
  );
}
