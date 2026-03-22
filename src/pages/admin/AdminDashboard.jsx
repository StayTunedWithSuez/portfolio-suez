import LoadingSpinner from "../../components/common/LoadingSpinner";

import { PiUserList } from "react-icons/pi";
import { PiStudent } from "react-icons/pi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { GoTrophy } from "react-icons/go";
import { LuTicketCheck } from "react-icons/lu";

import useAdmin from "../../hooks/useAdmin";

function AdminDashboard() {

    const {allUsers, loading} = useAdmin();

    /* getting number of users */
    const getNumberOfUsers = () => {
        return allUsers.length;
    }


    const cardItems = [
        {label: "Users", value: getNumberOfUsers() > 0? getNumberOfUsers(): "0", icon: PiUserList , color:'text-primary'},
        {label: "Students", value: "23", icon: PiStudent , color:'text-secondary'},
        {label: "Exams", value: "23", icon: HiOutlineDocumentText , color:'text-accent'},
        {label: "Submissions", value: "23", icon: LuTicketCheck , color:'text-primary-dark'},
    ]

    if(loading) return <LoadingSpinner />

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 items-center">
            {cardItems.map((card) => (
                <div key={card.label} className="admin-card p-6 flex rounded-xl items-center gap-6">
                    <div className="bg-muted-background p-3 rounded-xl">
                        <card.icon size={35} className={`${card.color} bg-muted-background`} />
                    </div>

                    <div className="flex flex-col">
                        <span className="font-semibold text-xl">{card.value}</span>
                        <span className="text-text-primary/70">{card.label}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AdminDashboard