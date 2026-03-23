import AdminContext from "./AdminContext"
import PropTypes from "prop-types"
import { getAllUsers } from "../services/adminService/getAllUsers"
import { useEffect, useState } from "react"

function AdminProvider({children}) {

    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(false);


    
    useEffect(() => {
        
        let isMounted = true;

        const fetchAllUsers = async () => {
            
            isMounted && setLoading(true);
            const data = await getAllUsers();
            isMounted && setAllUsers(data);
            isMounted && setLoading(false)
        }

    fetchAllUsers();

    return () => isMounted = false;
    }, []);


    const refetchAllUsers = async () => {
        setLoading(true);
        try {
            const data = await getAllUsers();
            setAllUsers(data);
        } catch (error) {
            console.error("Failed to fetch users:", error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <AdminContext.Provider value={{allUsers, loading, refetchAllUsers}}>
            {children}
        </AdminContext.Provider>
    )
}

AdminProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AdminProvider