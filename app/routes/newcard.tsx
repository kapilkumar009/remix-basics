import React from 'react'

export default function newcard() {
  return (
    <div><div className="h-full w-full bg-black">
    <div className="ml-20 w-[500px] p-10">
      <div className="bg-card text-card-foreground rounded-xl border border-[#27272a]  shadow">
        <div className="flex flex-col space-y-1.5 p-6 text-white">
          <h3 className="font-semibold leading-none tracking-tight">
            Payment Method
          </h3>
          <p className="text-muted-foreground text-sm text-[#909098]">
            Add a new payment method to your account.
          </p>
        </div>
        <div className="grid gap-6 p-6 pt-0">
          <div className="grid grid-cols-3 gap-4" role="radiogroup">
          <div>
          <input className="hidden" id="radio_1" type="radio" name="radio" checked/>
          <label className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer items-center rounded-md text-sm font-medium hover:bg-[#3a3a3c]" htmlFor="radio_1">
              <span className="text-white">
                  <svg role="img" viewBox="0 0 24 24" className="mb-3">
                      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z" fill="currentColor"></path>
                  </svg>
                  Paypal
              </span>
          </label>
      </div>
      <div>
          <input className="hidden" id="radio_2" type="radio" name="radio"/>
          <label className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer items-center rounded-md text-sm font-medium hover:bg-[#3a3a3c]" htmlFor="radio_2">
              <span className="text-white">
                  <svg role="img" viewBox="0 0 24 24" className="mb-3">
                      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z" fill="currentColor"></path>
                  </svg>
                  Paypal
              </span>
          </label>
      </div>
      <div>
          <input className="hidden" id="radio_3" type="radio" name="radio"/>
          <label className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer items-center rounded-md text-sm font-medium hover:bg-[#3a3a3c]" htmlFor="radio_3">
                  <span className="text-white">
                  <svg role="img" viewBox="0 0 24 24" className="mb-3">
                      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z" fill="currentColor"></path>
                  </svg>
                  Paypal
              </span>
          </label>
      </div>
      <div className="grid grid-cols-3 gap-4">
                <div className="grid gap-2">
      <select name="" id="" className='bg-bgColor text-white h-9 border rounded-md border-gray-600 p-2 outline-none'>
        <label htmlFor="" className='text-white'>month</label>
        <option value="">kvkjvc</option>
        <option value="">kapil</option>
        <option value="">hdhhhch</option>
        <option value="">bbbbbb</option>
        <option value="">bbbbbbb</option>
        </select>
        </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
