type propsData={
  data:{
    id:Number;
    name:string;
    status:string;
  }[]
}
export default function Notification(props: propsData) {
  
  return (
    <div className="pr-8">
        <div className="border-2 shadow rounded-xl mt-8">
            <h3 className="p-6">Notification</h3>
            <div className="grid grid-cols-2">
                <div className="">
                <p className="pl-6 pb-2">Employee Name</p>
                </div>
                <div className="">
                <span className="">status</span>
                </div>
            </div>
            <div className="grid grid-cols-2 ">
              {
                props.data.map((item:any)=>(
                  
                  <>
                  <p className="pl-6 pb-4 pt-2 border-y-2">{item.name}</p>
                  <p className={item.status==="pending"?"text-red-600 border-y-2 pt-2":"text-green-600 border-y-2 pt-2" }>{item.status}</p>
                  </>
                ))
              }
            </div>
        </div>
    </div>
  )
}
