import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideMenu from "./component/SideMenu";
import Home from "./pages/home";
import Nft_detail from "./pages/nft_detail/nft_detail";
import Staking from "./pages/staking/Staking";
import Leaderborads from "./pages/leaderboards/Leaderboards";
import { Image } from "./assests/images";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Popup from "./component/Popup";
function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className="app">
        <SideMenu show={show} setShow={setShow} />
        <div className="content-container">
          <div className="header">
            <div className="hamburger" onClick={()=>setShow(!show)}>
              <GiHamburgerMenu className="hamburger-icon"/>
            </div>
            <div className="header-brand">
              <img src={Image.logo} alt="logo" />
            </div>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/leaderboards" element={<Leaderborads />} />
            <Route path="/nft-detail" element={<Nft_detail />} />
            {/* <Route path="/mint" element={<Popup />} /> */}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
