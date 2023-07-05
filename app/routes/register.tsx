import React from "react";

export default function UserRegisterForm() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[500px] p-10">
        <div className="rounded-xl border border-[#e9e9e9] shadow">
          <div className="flex flex-col space-y-1 p-6">
            <h3 className="font-sans text-2xl font-semibold leading-none tracking-tight">
              Create an account
            </h3>
            <p className="text-sm text-[#909098]">
              Enter your email below to create your account
            </p>
          </div>
          <div className="grid gap-4 p-6 pt-0">
            <div className="grid grid-cols-2 gap-6">
              <button className="flex h-9 items-center justify-center rounded-md border border-[#e9e9e9] px-4 py-2 text-center">
                <svg
                  className="w-[34px] pr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  id="github"
                >
                  <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                </svg>
                Github
              </button>
              <button className="flex h-9 items-center justify-center rounded-md border border-[#e9e9e9] px-4 py-2 text-center">
                <svg
                  className="w-[34px] pr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  id="google"
                >
                  <path d="M22.60229,10.00391a1.00005,1.00005,0,0,0-.98388-.82227H12.2a.99974.99974,0,0,0-1,1V14.0498a.99974.99974,0,0,0,1,1h3.9624a3.65162,3.65162,0,0,1-1.13183,1.1875A5.0604,5.0604,0,0,1,12.2,17.02246a4.93525,4.93525,0,0,1-4.64624-3.4378L7.55347,13.583a4.90382,4.90382,0,0,1,0-3.167l.00024-.00165A4.9356,4.9356,0,0,1,12.2,6.97754,4.37756,4.37756,0,0,1,15.3313,8.19531a1.00053,1.00053,0,0,0,1.39844-.01562L19.5979,5.31152a.99918.99918,0,0,0-.02539-1.43847A10.62342,10.62342,0,0,0,12.2,1,10.949,10.949,0,0,0,2.37134,7.05878l-.00147.00177A10.92175,10.92175,0,0,0,1.2,12a11.07862,11.07862,0,0,0,1.16992,4.93945l.00147.00177A10.949,10.949,0,0,0,12.2,23a10.5255,10.5255,0,0,0,7.29468-2.687l.00073-.00049.00079-.00085.00019-.00013.00006-.00012a10.78575,10.78575,0,0,0,3.30365-8.08386A12.51533,12.51533,0,0,0,22.60229,10.00391ZM12.2,3a8.68219,8.68219,0,0,1,5.2085,1.67285L15.95483,6.126A6.46322,6.46322,0,0,0,12.2,4.97754,6.88648,6.88648,0,0,0,6.21069,8.52832L5.14148,7.69958l-.585-.45367A8.95257,8.95257,0,0,1,12.2,3ZM3.67944,14.90332a9.02957,9.02957,0,0,1,0-5.80664l1.78223,1.38184a6.85381,6.85381,0,0,0,0,3.042ZM12.2,21A8.9528,8.9528,0,0,1,4.5564,16.75391l.37841-.29352,1.27588-.98969A6.88482,6.88482,0,0,0,12.2,19.02246a7.27662,7.27662,0,0,0,3.30573-.75079L17.19739,19.585A8.88989,8.88989,0,0,1,12.2,21Zm6.52588-2.76074-.183-.142L17.16553,17.028a5.60626,5.60626,0,0,0,1.39966-2.79553.9998.9998,0,0,0-.9834-1.18262H13.2V11.18164h7.54883c.03418.3457.05127.69531.05127,1.0459A9.05156,9.05156,0,0,1,18.72583,18.23926Z"></path>
                </svg>
                Google
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="email">Email:</label>
                <input className="flex h-9 rounded-md border border-[#e9e9e9] px-3 py-1 text-sm shadow-sm outline-none focus-visible:ring-1 focus-visible:ring-[#939599]" type="email" name="email" id="email" placeholder="example@gmail.com" />
            </div>
            <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="password">Password:</label>
                <input className="flex h-9 rounded-md border border-[#e9e9e9] px-3 py-1 text-sm shadow-sm outline-none focus-visible:ring-1 focus-visible:ring-[#939599]" type="password" name="password" id="password" />
            </div>
            <div className="flex items-center pt-0">
                <button className="disabled:opacity-50 inline-flex justify-center hover:bg-[#313133] focus-visible:ring-ring h-9 w-full items-center py-2 rounded-md text-white bg-bgColor focus-visible:ring-1">Create account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
