import { IoBody } from "react-icons/io5";
import SideIconCard from "../../components/common/SideIconCard";
import { biographyInfo } from "../../assets/data";

function Biography() {
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Biography</h3>
        
        <div className="shadow">
            {biographyInfo.map((item, index) => (

                <SideIconCard 
                    key = {index}
                    icon ={<item.icon />}
                    keyName={item.keyName}
                    value={item.value}
                    serialEven={index % 2 !== 0}   
                />
            ))}
        </div>


      </div>
    );
}

export default Biography