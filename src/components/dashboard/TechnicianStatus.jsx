export default function TechnicianStatus(){

const technicians=[

{
name:"John Cruz",
status:"Available",
},

{
name:"Kevin Ramos",
status:"Busy",
},

{
name:"Mark Reyes",
status:"Offline",
},

];

return(

<div className="bg-white rounded-xl shadow p-6">

<h2 className="font-semibold text-lg mb-4">

Technician Status

</h2>

{technicians.map((tech,index)=>(

<div
key={index}
className="flex justify-between border-b py-3"
>

<span>{tech.name}</span>

<span>{tech.status}</span>

</div>

))}

</div>

);

}