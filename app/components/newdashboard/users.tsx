import {LoaderFunction, json} from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl="https://api.escuelajs.co/api/v1/users"

// type User={
//   name:string;
//   email:string;
//   id:Number;
//   avatar:string;
//   role:string;
// }

// export const loader:LoaderFunction = async ()=>{
//     const res= await fetch(baseUrl);
//     const usersInfo=await res.json()
//     console.log("user data",usersInfo);
    
//     return json({usersInfo})
// }
export default function UsersRoute() {
  // const {usersInfo} = useLoaderData<typeof loader>();
   const [user, setUser] = useState()
  const [imageError, serImageError]=useState(false);
  const handleImageError = () => {
    serImageError(true);
  };
  const getUsers=()=>{
    axios.get(baseUrl).then((response) => {
      const userinfo=response.data
      setUser(userinfo)
      console.log("user", userinfo);
      
    });
  }
  useEffect(() => {
    getUsers();
  }, []);

  if(!user) return null;
  return (
    // <div className="sm:mr-2">
    //   <div className=" ml-2  mt-6 border-2 shadow">
    //     <h3 className="p-4 text-[20px]">Users Records</h3>
    //     <div className="h-[350px] hover:overflow-y-auto overflow-hidden">
    <div className="lg:block bg-white pl-1 mr-1 md:pl-0 md:mr-0 xs:pl-2 xs:pr-2 xs:flex xs:justify-center xs:items-center sm:flex sm:justify-center sm:items-center">
      <div className="lg:ml-2 sm:ml-0 mt-6  border-2 shadow  md:w-[710px] xs:w-[360px] sm:w-[350px] lg:w-[600px]">
        <h3 className="p-4 text-[20px]">Users Records</h3>
        <div className="h-[373px] hover:overflow-y-auto overflow-hidden">
        <table className="w-full table-fixed  ">
            <thead className="border-r-2 border-l-2">
            <tr className="bg-gray-600 text-[16px] text-white ">
              <th scope="col" className="text-sm font-medium xs:hidden py-4 text-center">
              
              </th>
              <th scope="col" className="text-sm font-medium  py-4 text-left xs:px-1">
              Name
              </th>
              <th scope="col" className="text-sm font-medium xs:text-center   py-4 text-left px-5 xs:px-1">
              Email
              </th>
              <th scope="col" className="text-sm font-medium  xs:text-right xs:pr-4 py-4 text-center">
              Role
              </th>
            </tr>
            </thead>
            <tbody className="[&>*:nth-child(even)]:border-y-2 [&>*:nth-child(even)]:bg-[#F2F2F2]">
              {user.map((item: any) => (
                <tr className=" border-b" key={item.id}>
                  <td className=" py-4 whitespace-nowrap xs:hidden text-sm font-medium text-gray-900 px-2">
                  <img
                        className="h-[32px] w-[32px] rounded-full object-cover "
                        src={item.avatar}
                        alt="img"
                      />
                  </td>
              <td className=" py-4 whitespace-nowrap lg:text-[14px] sm:text-[12px] font-medium text-gray-900 text-left">{item.name}</td>
              <td className="lg:text-[14px] sm:text-[12px] text-gray-900 font-light  py-4 whitespace-nowrap text-left">
                {item.email}
              </td>
              <td className="py-4 pr-2 whitespace-nowrap xs:text-right lg:text-[14px] sm:text-[12px] font-medium text-gray-900 text-center">
              <p className={item.role==="admin"?"text-red-500":""}                    
                    >
                      {item.role}
                    </p>
              </td>
            </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
