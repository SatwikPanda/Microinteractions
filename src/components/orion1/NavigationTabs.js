
import "./NavigationTabs.css"
import { RiHomeFill } from "react-icons/ri";

const icons = [
  { id: 1, icons: RiHomeFill, label: "Home"}
]


const NavigationTabs = () => {
  
  return (
    <div >
      {icons.map(({ id, icon: Icon, label }) => (
        
        <div key={id} className="flex items-center gap-2">
          <Icon />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}


export default NavigationTabs;