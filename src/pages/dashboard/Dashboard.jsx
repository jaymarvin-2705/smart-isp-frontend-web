import StatGrid from "@/components/dashboard/StatGrid";
import RepairChart from "@/components/charts/RepairChart";

export default function Dashboard(){

return(

<>

<div className="mb-8">

<h1 className="text-3xl font-bold">

Dashboard

</h1>

<p className="text-gray-500">

Welcome back Administrator.

</p>

</div>

<StatGrid/>

<RepairChart/>

</>

);

}