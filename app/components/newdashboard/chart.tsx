import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend} from "recharts"

const Array=[
    {
        name:"Python",
        student:50,
        girl:20,
        fees:"30$",
    },
    {
        name:"JavaScript",
        student:180,
        girl:90,
        fees:"30$",
    },
    {
        name:"Php",
        student:50,
        girl:30,
        fees:"30$",
    },
    {
        name:"Java",
        student:100,
        girl:40,
        fees:"30$",
    },
    {
        name:"C++",
        student:160,
        girl:50,
        fees:"30$",
    },
    {
        name:"C",
        student:130,
        girl:50,
        fees:"30$",
    },
    {
        name:"R",
        student:50,
        girl:20,
        fees:"30$",
    },{
        name:"C#",
        student:160,
        girl:40,
        fees:"30$",
    },
]
export default function ChartRoute() {
  return (
  <div className="w-[40%] h-[600px] mt-96">
<ResponsiveContainer  aspect={3}>
    <BarChart data={Array} 
    >
         <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Legend />
        <Bar dataKey="student" fill="#4B3CFB"/>
        <Bar dataKey="girl" fill="#20DAAA"/>

    </BarChart>
</ResponsiveContainer>
  </div>
  )
}
