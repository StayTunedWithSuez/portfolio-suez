import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

export const getAllUsers = async () => {
    try {
        const usersCollectionRef = collection(db, "users");
        const querySnapshot = await getDocs(usersCollectionRef);

        const users = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return users;

    } catch (error) {
        console.error("Error getting users:", error);
        throw error;
    }
};