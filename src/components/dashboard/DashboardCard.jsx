export default function DashboardCard({

    title,
    value,
    icon,
    color,

}){

    return(

        <div className="bg-white rounded-xl shadow-md p-6 flex justify-between items-center">

            <div>

                <p className="text-gray-500">

                    {title}

                </p>

                <h2 className="text-4xl font-bold">

                    {value}

                </h2>

            </div>

            <div className={`${color} p-4 rounded-xl text-white`}>

                {icon}

            </div>

        </div>

    );

}