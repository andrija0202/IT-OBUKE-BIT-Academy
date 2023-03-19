import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import ViewModuleIcon from "@mui/icons-material/ViewModule";

function Navigation() {
  return (
    <nav className="nav">
      <div className="container nav-flex">
        <div className="logo">BIT People</div>
        <div className="nav-links">
          <p className="about">
            <a href="#">About</a>
          </p>
          <div>
            <RotateLeftIcon />
          </div>
          <div>
            <ViewModuleIcon />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
