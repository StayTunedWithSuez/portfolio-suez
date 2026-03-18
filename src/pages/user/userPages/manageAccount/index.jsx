import EditInfoSection from "./EditInfoSection"
import ProfileInfoBox from "./ProfileInfoBox"

function ManageAccount() {
  return (
    <div className='flex flex-col gap-8 container-layout my-7 '>
        <div>
            <h1 className="text-xl font-semibold md:text-2xl">Manage Account</h1>
            <p className=" text-text-secondary/80 md:text-lg">Manage your personal information</p>
        </div>

        <div className="md:flex w-full space-y-6 md:space-x-12">
            <div className="md:w-1/3">
                <ProfileInfoBox />
            </div>

            <div className="md:w-2/3">
                <EditInfoSection />
            </div>
            
        </div>
        
    </div>
  )
}

export default ManageAccount