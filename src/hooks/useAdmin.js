import AdminContext from "../context/AdminContext";
import { useContext } from "react";

const useAdmin = () => useContext(AdminContext);

export default useAdmin;