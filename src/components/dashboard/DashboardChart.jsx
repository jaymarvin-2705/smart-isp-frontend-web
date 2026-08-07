import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

const data=[

{month:"Jan",repair:18},
{month:"Feb",repair:22},
{month:"Mar",repair:35},
{month:"Apr",repair:28},
{month:"May",repair:40},
{month:"Jun",repair:51},

];

export default function DashboardChart(){

return(

<div className="bg-white rounded-xl shadow p-6">

<h2 className="text-lg font-semibold mb-5">

Monthly Repair Requests

</h2>

<div className="h-80">

<ResponsiveContainer>

<LineChart data={data}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="month"/>

<YAxis/>

<Tooltip/>

<Line

type="monotone"

dataKey="repair"

stroke="#2563eb"

strokeWidth={3}

/>

</LineChart>

</ResponsiveContainer>

</div>

</div>

);

}