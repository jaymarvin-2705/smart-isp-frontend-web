export default function RecentRequests(){

const requests=[

{
client:"Juan Dela Cruz",
issue:"No Internet",
status:"Pending",
},

{
client:"Maria Santos",
issue:"Slow Connection",
status:"Assigned",
},

{
client:"Pedro Reyes",
issue:"LOS Red",
status:"Completed",
},

];

return(

<div className="bg-white rounded-xl shadow p-6">

<h2 className="font-semibold mb-5">

Recent Repair Requests

</h2>

<table className="w-full">

<thead>

<tr>

<th className="text-left">Client</th>

<th className="text-left">Issue</th>

<th>Status</th>

</tr>

</thead>

<tbody>

{requests.map((request,index)=>(

<tr key={index} className="border-t">

<td className="py-3">{request.client}</td>

<td>{request.issue}</td>

<td>{request.status}</td>

</tr>

))}

</tbody>

</table>

</div>

);

}