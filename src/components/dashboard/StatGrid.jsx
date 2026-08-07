import {
    FaUsers,
    FaUserCog,
    FaTools,
    FaCheckCircle,
} from "react-icons/fa";

import StatCard from "./StatCard";

export default function StatGrid(){

    return(

        <div className="grid grid-cols-4 gap-6">

            <StatCard
                title="Clients"
                value="215"
                icon={FaUsers}
                color="bg-blue-500"
            />

            <StatCard
                title="Technicians"
                value="12"
                icon={FaUserCog}
                color="bg-green-500"
            />

            <StatCard
                title="Pending Repairs"
                value="28"
                icon={FaTools}
                color="bg-orange-500"
            />

            <StatCard
                title="Completed"
                value="486"
                icon={FaCheckCircle}
                color="bg-purple-500"
            />

        </div>

    );

}