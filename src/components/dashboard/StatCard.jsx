export default function StatCard({
    title,
    value,
    icon,
    color,
}){

    const Icon = icon;

    return(

        <div className="bg-white rounded-xl shadow p-5">

            <div className="flex justify-between">

                <div>

                    <p className="text-gray-500">

                        {title}

                    </p>

                    <h2 className="text-3xl font-bold mt-2">

                        {value}

                    </h2>

                </div>

                <div
                    className={`${color} w-14 h-14 rounded-xl flex items-center justify-center text-white`}
                >

                    <Icon size={28}/>

                </div>

            </div>

        </div>

    );

}