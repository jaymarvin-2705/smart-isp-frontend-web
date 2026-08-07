import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [

{month:"Jan",repairs:40},

{month:"Feb",repairs:28},

{month:"Mar",repairs:51},

{month:"Apr",repairs:63},

{month:"May",repairs:48},

{month:"Jun",repairs:70},

];

export default function RepairChart(){

return(

<div className="bg-white rounded-xl shadow p-6 mt-8">

<h2 className="font-bold mb-6">

Monthly Repair Requests

</h2>

<div style={{height:300}}>

<ResponsiveContainer>

<LineChart data={data}>

<XAxis dataKey="month"/>

<YAxis/>

<Tooltip/>

<Line
type="monotone"
dataKey="repairs"
/>

</LineChart>

</ResponsiveContainer>

</div>

</div>

);

}