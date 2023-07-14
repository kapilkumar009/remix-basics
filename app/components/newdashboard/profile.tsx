export default function Profile() {
  return (
    <div className="border-2 px-4 py-2 bg-white  z-50">
      <div className="flex gap-4 overflow-hidden">
        <label className="items-center cursor-pointer w-[54px] text-4xl px-4 py-1 rounded-full text-white bg-slate-400 border-2" htmlFor="profile-pic">K</label>
        <input className="hidden" type="file" name="profilePic" id="profile-pic" />
        <div className="">
          <p>kapil kumar</p>
        <p className="text-[#afadad]">example@gmail.com</p>
        </div>
      </div>
      <div className=" text-white font-mono text-sm mt-4">
      <button className="rounded-full bg-blue-500 px-4 py-2">Logout</button>
      </div>
    </div>
  )
}
