import DashboardCard from "./DashboardCard";

import {
    Users,
    UserCog,
    Wrench,
    CheckCircle,
} from "lucide-react";

export default function StatisticsCards(){

    return(

        <div className="grid grid-cols-4 gap-6">

            <DashboardCard
                title="Clients"
                value="215"
                color="bg-blue-500"
                icon={<Users size={28}/>}
            />

            <DashboardCard
                title="Technicians"
                value="12"
                color="bg-green-500"
                icon={<UserCog size={28}/>}
            />

            <DashboardCard
                title="Pending Repairs"
                value="28"
                color="bg-orange-500"
                icon={<Wrench size={28}/>}
            />

            <DashboardCard
                title="Completed"
                value="486"
                color="bg-purple-500"
                icon={<CheckCircle size={28}/>}
            />

        </div>

    );

}