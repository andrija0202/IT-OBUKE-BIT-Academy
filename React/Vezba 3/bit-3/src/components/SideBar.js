import SidebarActions from "./SidebarActions";
import SidebarMembers from "./SidebarMembers";

function SideBar() {
  return (
    <div className="sidebar">
      <SidebarActions />
      <SidebarMembers />
    </div>
  );
}

export default SideBar;
