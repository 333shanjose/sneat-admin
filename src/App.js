import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Uitooltips from "./Pages/Ui-tooltips";
import Uityography from "./Pages/Ui-tyography";
import Uitoasts from "./Pages/Ui-toasts";
import Uitabspills from "./Pages/Ui-tabs-pills";
import Uispinners from "./Pages/Ui-spinners";
import Uiprogress from "./Pages/Ui-progress";
import Uipagination from "./Pages/Ui-pagination";
import Uioffcanvas from "./Pages/Ui-offcanvas";
import Uinavbar from "./Pages/Ui-navbar";
import Uimodals from "./Pages/Ui-modals";
import Uilistgroups from "./Pages/Ui-listgroups";
import Uifooter from "./Pages/Ui-footer";
import Uidropdowns from "./Pages/Ui-dropdowns";
import Uicollapse from "./Pages/Ui-collapse";
import Uicarousel from "./Pages/Ui-carousel";
import Uibuttons from "./Pages/Ui-buttons";
import Uibadges from "./Pages/Ui-badges";
import Uialerts from "./Pages/Ui-alerts";
import Uiaccordion from "./Pages/Ui-accordion";
import Tablesbasicpage from "./Pages/Tables-basic-page";
import Maintenancepage from "./Pages/Maintenance-page";
import Miscerror from "./Components/Miscerror";
import Pagesnotification from "./Pages/Pages-notification";
import Pagesconnections from "./Pages/Pages-connections";
import Pagesaccount from "./Pages/Pages-account";
import Layoutswithoutnavbar from "./Pages/Layouts-without-navbar";
import Layoutswithoutmenu from "./Pages/Layouts-without-menu";
import Layoutspagefluid from "./Pages/Layouts-page-fluid";
import Layoutspagecontainer from "./Pages/Layouts-page-container";
import Layoutsblank from "./Components/Layouts-blank";

function App() {
  return (
  <>
    <div className="App">
      <div class="layout-wrapper layout-content-navbar">
      <div class="layout-container">
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ui-tyography" element={<Uityography/>} />
        <Route path="/ui-tooltips" element={<Uitooltips/>}/>
        <Route path="/ui-toasts" element={<Uitoasts/>}/>
        <Route path="/ui-tabs-pills" element={<Uitabspills/>}/>
        <Route path="/ui-spinners" element={<Uispinners/>}/>
        <Route path="/ui-progress" element={<Uiprogress/>}/>
        <Route path="/ui-pagination" element={<Uipagination/>}/>
        <Route path="/ui-offcanvas" element={<Uioffcanvas/>}/>
        <Route path="/ui-navbar" element={<Uinavbar/>}/>
        <Route path="/ui-modals" element={<Uimodals/>}/>
        <Route path="/ui-list-groups" element={<Uilistgroups/>}/>
        <Route path="/ui-footer" element={<Uifooter/>}/>
        <Route path="/ui-dropdowns" element={<Uidropdowns/>}/>
        <Route path="/ui-collapse" element={<Uicollapse/>}/>
        <Route path="/ui-carousel" element={<Uicarousel/>}/>
        <Route path="/ui-buttons" element={<Uibuttons/>}/>
        <Route path="/ui-badges" element={<Uibadges/>}/>
        <Route path="/ui-alerts" element={<Uialerts/>}/>
        <Route path="/ui-accordion" element={<Uiaccordion/>}/>
        <Route path="/tables-basic" element={<Tablesbasicpage/>}/>
        <Route path="/pages-misc-under-maintenance" element={<Maintenancepage/>}/>
        <Route path="/pages-misc-error" element={<Miscerror/>}/>
        <Route path="/pages-account-settings-notifications" element={<Pagesnotification/>}/>
        <Route path="/pages-account-settings-connections" element={<Pagesconnections/>}/>
        <Route path="/pages-account-settings-account" element={<Pagesaccount/>}/>
        <Route path="/layouts-without-navbar" element={<Layoutswithoutnavbar/>}/>
        <Route path="/layouts-without-menu" element={<Layoutswithoutmenu/>}/>
        <Route path="/layouts-fluid" element={<Layoutspagefluid/>}/>
        <Route path="/layouts-container" element={<Layoutspagecontainer/>}/>
        <Route path="/layouts-blank" element={<Layoutsblank/>}/>


















        </Routes>
     </BrowserRouter>
      </div>
      <div class="layout-overlay layout-menu-toggle"></div>
      </div>
    </div>
    <div class="buy-now">
      <a href="https://themeselection.com/item/sneat-bootstrap-html-admin-template/" target="_blank" class="btn btn-danger btn-buy-now">Upgrade to Pro</a>
    </div>

  </>
  );
}

export default App;