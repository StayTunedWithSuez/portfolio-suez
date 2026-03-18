import useAuth from "../../../../hooks/useAuth"
import { DDMMMYYY } from "../../../../utils/formatDate";

export default function ProfileInfoBox() {

    const {userDetails, user} = useAuth();


    return (
        <div className="flex flex-col gap-4 items-center bg-surface shadow px-8 py-6 rounded-lg">
            <div className="flex justify-center items-center bg-secondary text-surface h-30 w-30 rounded-full text-5xl font-bold space-x-1">
                <span>{userDetails?.firstName.slice(0, 1)}</span>
                <span>{userDetails?.lastName.slice(0, 1)}</span>
            </div>

            <div className="flex items-center flex-col gap-2">
                <h3 className="font-semibold text-2xl text-center">{userDetails?.firstName} {userDetails?.lastName}</h3>

                <p className="text-lg text-text-primary/80">{userDetails?.email}</p>

            </div>

            <p className="mt-3 pt-3 border-t border-gray-300 w-full text-center text-text-secondary/80">Member since {DDMMMYYY(user?.metadata?.creationTime)}</p>
        </div>
        
    )
}
