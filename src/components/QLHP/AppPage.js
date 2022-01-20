import "./Navmenu.css";

import Navbar from "./Nav/Navmenu";
import Page from "./Trangchu/Page";

function AppPage() {
  return (
    <div className="app-page">
      <Navbar />
      <Page />
    </div>
  );
}

export default AppPage;