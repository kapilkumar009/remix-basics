import { LinksFunction } from "@remix-run/node";
import { useState } from "react";
import sylesUrl from "~/styles/cards.css";
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: sylesUrl },
];

export default function index() {
  const [formData, setFormData]= useState({});
  const [selectedPaymentOp, setSelectedPaymentOp] = useState('');

  const changePaymentOption=(e:any)=>{
    const value=e.target.value;
    console.log("selected method v", value);
  }

  const paymentClicked=()=>{
    // setSelectedPaymentOp(selectedPaymentOp);
    console.log("selected method", selectedPaymentOp);
    
  }
  const handleFormData=(e:any)=>{
    const {name, value}=e.target;
    setFormData((prevData)=>({
      ...prevData,
      [name]:value,
    }));
  };

  const handleSubmit=(e:any)=>{
    e.preventDefault();
    console.log("form data", formData);
    // setFormData({})
    
  }

  return (
    <>
      <div className="h-full w-full flex justify-center items-center">
        <div className=" w-[500px] p-10 xs:p-2 sm:p-2 md:p-2">
          <div className="bg-card text-card-foreground rounded-xl border border-[#e9e9e9]  shadow">
            <div className="flex flex-col space-y-1.5 p-6 ">
              <h3 className="font-semibold leading-none tracking-tight">
                Payment Method
              </h3>
              <p className="text-muted-foreground text-sm text-[#909098]">
                Add a new payment method to your account.
              </p>
            </div>
            <div className=" grid gap-6 p-6 pt-0">
              <div className="grid grid-cols-3 gap-4">
                <label className="cursor-pointer items-center justify-center text-sm">
                  <input type="radio" className="peer sr-only" name="pricing" value="card" onChange={changePaymentOption} />
                  <div className="flex peer-checked:ring-bgColor h-[93px] xs:h-[65px] items-center justify-center  rounded-md p-4 xs:p-1 text-gray-600 ring-2  ring-[#e9e9e9] transition-all hover:bg-[#efeff3] hover:shadow peer-checked:text-bgColor peer-checked:ring-offset-2">
                    <span className="text-bgColor flex justify-center flex-col items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="mb-3 xs:mb-1 h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                        />
                      </svg>

                      <p>Card</p>
                    </span>
                  </div>
                </label>
                <label className="cursor-pointer">
                  <input type="radio" className="peer sr-only" name="pricing" value="paypal" onChange={changePaymentOption}/>
                  <div className="flex peer-checked:ring-bgColor h-[93px] xs:h-[65px] items-center justify-center  rounded-md p-4 xs:p-2 text-gray-600 ring-2  ring-[#e9e9e9] transition-all hover:bg-[#efeff3] hover:shadow peer-checked:text-bgColor peer-checked:ring-offset-2">
                    <span className="text-bgColor text-center flex justify-center flex-col items-center">
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        className="mb-3 xs:mb-1 h-6 w-6"
                      >
                        <path
                          d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      Paypal
                    </span>
                  </div>
                </label>
                <label className="cursor-pointer">
                  <input type="radio" className="peer sr-only" name="pricing" 
                   value="apple" onChange={changePaymentOption}/>
                  <div className="flex justify-center items-center  xs:h-[65px] peer-checked:ring-bgColor rounded-md p-4 xs:p-2 text-gray-600 ring-2 ring-[#e9e9e9] transition-all hover:bg-[#efeff3] hover:shadow peer-checked:text-bgColor peer-checked:ring-offset-2">
                    <span className="text-bgColor flex justify-center flex-col items-center">
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        className="mb-3 xs:mb-1 h-6 w-6"
                      >
                        <path
                          d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                          fill="currentColor"
                        ></path>
                      </svg>
                      Apple
                    </span>
                  </div>
                </label>
              </div>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-2 xs:gap-0">
                <label
                  className="text-sm font-medium"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                    onChange={handleFormData}
                  className="flex h-9 rounded-md border border-[#e9e9e9] px-3 mt-0 mb-2
                  py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-700"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="First Last"
                />
              </div>
              <div className="grid gap-2 xs:gap-0">
                <label
                  className="text-sm font-medium"
                  htmlFor="number"
                >
                  Card Number
                </label>
                <input
                    onChange={handleFormData}
                  className="flex h-9 rounded-md border border-[#e9e9e9] px-3 mb-2 mt-0
                  py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-700"
                  type="text"
                  name="number"
                  id="number"
                  placeholder="Card Number"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="grid gap-2 xs:gap-0">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed"
                    htmlFor="month"
                  >
                    Expires
                  </label>
                  <select
                    onChange={handleFormData}
                    name="month"
                    id="month"
                    className="h-9 rounded-md border w-[130px] xs:w-[75px] xs:text-sm sm:w-[90px] md:w-[130px] border-[#e9e9e9] p-2 bg-white outline-none"
                  >
                    <option value="Month">Month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="Aprial">Aprial</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                </div>
                <div className="grid gap-2 xs:gap-0">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed"
                    htmlFor="month"
                  >
                    Year
                  </label>
                                    <select
                    onChange={handleFormData}
                    name="year"
                    id="year"
                    className="h-9 rounded-md border bg-white border-[#e9e9e9] p-2 outline-none"
                  >
                    <option value="year">Year</option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                  </select>
                </div>
                <div className="grid gap-2 xs:gap-0">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="cvc"
                  >
                    CVC
                  </label>
                  <input
                    onChange={handleFormData}
                    type="text"
                    className="border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-1 text-sm  shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1"
                    id="cvc"
                    placeholder="CVC"
                  />
                </div>
              </div>
              <div className="mt-10">
              <button type="submit" onClick={paymentClicked} className="sm:bg-blue-500 md:bg-bgColor sm:rounded-lg focus-visible:ring-ring text-primary-foreground hover:bg-primary/90 inline-flex h-9 w-full items-center justify-center rounded-md bg-bgColor px-4 py-2 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50">
                Continue
              </button>
            </div>
            </form>
            </div>
            {/* <div className="flex items-center p-6 pt-0">
              <button type="submit" className="sm:bg-blue-500 md:bg-bgColor sm:rounded-lg focus-visible:ring-ring text-primary-foreground hover:bg-primary/90 inline-flex h-9 w-full items-center justify-center rounded-md bg-bgColor px-4 py-2 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50">
                Continue
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
