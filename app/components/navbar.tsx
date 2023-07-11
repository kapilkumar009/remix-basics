import { LinksFunction } from "@remix-run/node";
import { NavLink } from "@remix-run/react";
// import stylesUrl from "~/components/navbar.css";
// export const links: LinksFunction = () => [
//   { rel: "stylesheet", href: stylesUrl },
// ];
export default function navbar() {
  return (
    <div className="mt-6">
      <div className="flex">
        <ul className="flex  rounded-md bg-[#f5f4f4] p-2 ">
          <li className="mr-6 sm:mr-2">
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "black" : "",
                  backgroundColor: isActive ? "white" : "",
                  padding: isActive ? "4px" : "",
                };
              }}
              className="sm:text-sm lg:mr-10 text-[#949191]"
              to="/dashboardcontainer/overview"
            >
              Overview
            </NavLink>
          </li>
          <li className="mr-6 sm:mr-2">
            <NavLink 
             style={({ isActive }) => {
              return {
                color: isActive ? "black" : "",
                backgroundColor: isActive ? "white" : "",
                padding: isActive ? "4px" : "",
              };
            }}
            className="sm:text-sm lg:mr-10 text-[#949191]" to="/dashboardcontainer/analytics">
              Analytics
            </NavLink>
          </li>
          <li className="mr-6 sm:mr-2">
            <NavLink 
             style={({ isActive }) => {
              return {
                color: isActive ? "black" : "",
                backgroundColor: isActive ? "white" : "",
                padding: isActive ? "4px" : "",
              };
            }}
            className="sm:text-sm lg:mr-10 text-[#949191]" to="/dashboardcontainer/report">
              Reports
            </NavLink>
          </li>
          <li className="mr-6 sm:mr-2">
            <NavLink
             style={({ isActive }) => {
              return {
                color: isActive ? "black" : "",
                backgroundColor: isActive ? "white" : "",
                padding: isActive ? "4px" : "",
              };
            }}
            className="sm:text-sm lg:mr-10 text-[#949191]" to="/dashboardcontainer/notification">
              Notifications
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
