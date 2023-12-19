import React from "react";
import "./index.css";
import { Image } from "../../assests/images";
import { RiNftLine } from "react-icons/ri";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { SiLinuxmint } from "react-icons/si";
import { GiTrophyCup } from "react-icons/gi";
import { IoWalletOutline } from "react-icons/io5";
import { GoPersonFill } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import Progress from "../progress/Progress";
const SideMenu = ({ show, setShow }) => {
  const getCurrentYear = new Date().getFullYear();

  return (
    <aside className={show ? `sidemenu_section hide` : `sidemenu_section`}>
      <nav className={show ? "sidemenu_container hide" : "sidemenu_container"}>
        <div className="cross_btn" onClick={() => setShow(!show)}>
          <RxCross1 />
        </div>
        <div className="sidemenu_logo_container">
          <img src={Image.logo} alt="logo" />
        </div>
        <div className="sidemenu_body">
          <div className="sidemenu_list">
            <ul>
              <NavLink
                to="/"
                className="menu_items"
                onClick={() => setShow(!show)}
              >
                <li className="list">
                  <span className="icon">
                    {/* <svg
                      width="10"
                      height="19"
                      viewBox="0 0 10 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="nav_icon"
                    >
                      <path d="M3.84467 4.71531V1.02534H6.73014V4.71531C6.79356 5.07772 7.05262 5.08173 7.55456 5.24245C8.85461 5.76959 9.3037 6.44586 9.29852 7.58162V17.4655C9.2336 17.7105 9.1324 17.7524 8.95439 17.826L8.94973 17.8279H1.59337C1.43928 17.74 1.36028 17.6615 1.24457 17.4655V7.58162C1.21362 6.57342 1.41676 6.0983 2.63975 5.37423C3.30563 5.11066 3.81297 5.04477 3.84467 4.71531Z" />
                    </svg> */}

                    <svg
                      width="29"
                      height="28"
                      viewBox="0 0 29 28"
                      fill="none"
                      className="nav_icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.8447 8.71531V5.02534H15.7301V8.71531C15.7936 9.07772 16.0526 9.08173 16.5546 9.24245C17.8546 9.76959 18.3037 10.4459 18.2985 11.5816V21.4655C18.2336 21.7105 18.1324 21.7524 17.9544 21.826L17.9497 21.8279H10.5934C10.4393 21.74 10.3603 21.6615 10.2446 21.4655V11.5816C10.2136 10.5734 10.4168 10.0983 11.6398 9.37423C12.3056 9.11066 12.813 9.04477 12.8447 8.71531Z" />
                      <path d="M27.8697 13.9208C27.8697 21.278 21.7899 27.2582 14.2702 27.2582C6.75048 27.2582 0.670654 21.278 0.670654 13.9208C0.670654 6.56357 6.75048 0.58342 14.2702 0.58342C21.7899 0.58342 27.8697 6.56357 27.8697 13.9208Z" />
                    </svg>

                    {/* <RiNftLine className="icon-style" /> */}
                  </span>
                  <span className="text">my nfts</span>
                </li>
              </NavLink>

              <NavLink
                to="/staking"
                className="menu_items leaderboard"
                onClick={() => setShow(!show)}
              >
                <li className="list">
                  <span className="icon">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      className="nav_icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M27.5 13.9916C27.5 21.3521 21.4614 27.3289 14 27.3289C6.53863 27.3289 0.5 21.3521 0.5 13.9916C0.5 6.63101 6.53863 0.654171 14 0.654171C21.4614 0.654171 27.5 6.63101 27.5 13.9916Z" />
                      <path
                        d="M9.33333 20.9102H11.6667M16.3333 20.9102H18.6667M18.2778 9.76346V15.9134M7 9.53284L7 16.144C7 17.0051 7 17.4356 7.16955 17.7645C7.31868 18.0538 7.55665 18.289 7.84935 18.4364C8.1821 18.604 8.6177 18.604 9.48889 18.604L18.5111 18.604C19.3823 18.604 19.8179 18.604 20.1507 18.4364C20.4433 18.289 20.6813 18.0538 20.8305 17.7645C21 17.4356 21 17.0051 21 16.144V9.53284C21 8.67176 21 8.24123 20.8305 7.91234C20.6813 7.62304 20.4433 7.38784 20.1507 7.24043C19.8179 7.07286 19.3823 7.07286 18.5111 7.07286L9.48889 7.07286C8.6177 7.07286 8.1821 7.07286 7.84935 7.24043C7.55665 7.38784 7.31868 7.62304 7.16955 7.91234C7 8.24123 7 8.67176 7 9.53284ZM13.6111 12.8384C13.6111 13.8998 12.7406 14.7603 11.6667 14.7603C10.5928 14.7603 9.72222 13.8998 9.72222 12.8384C9.72222 11.777 10.5928 10.9166 11.6667 10.9166C12.7406 10.9166 13.6111 11.777 13.6111 12.8384Z"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text">staking</span>
                </li>

                <li className="total_points">
                  <span>
                    <svg
                      width="14"
                      height="12"
                      viewBox="0 0 14 12"
                      fill="none"
                      className="child_nav_icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.2127 4.38488H12.7873M5.78162 1.03801L4.56324 4.38488L7 10.7997L9.43676 4.38488L8.21838 1.03801M7.37439 10.6672L12.8319 4.67056C12.9244 4.56893 12.9706 4.51812 12.9883 4.46139C13.0039 4.41138 13.0039 4.35838 12.9883 4.30837C12.9706 4.25164 12.9244 4.20083 12.8319 4.0992L10.1921 1.19858C10.1384 1.13956 10.1115 1.11005 10.0786 1.08883C10.0494 1.07004 10.0169 1.05608 9.98242 1.04759C9.94354 1.03801 9.90159 1.03801 9.81769 1.03801H4.18231C4.09841 1.03801 4.05646 1.03801 4.01758 1.04759C3.98314 1.05608 3.95058 1.07004 3.92141 1.08883C3.88849 1.11005 3.86163 1.13956 3.80792 1.19858L1.1681 4.0992C1.0756 4.20083 1.02936 4.25164 1.01169 4.30837C0.996105 4.35838 0.996105 4.41138 1.01169 4.46139C1.02936 4.51812 1.0756 4.56893 1.1681 4.67056L6.62561 10.6672C6.75418 10.8085 6.81847 10.8791 6.89543 10.9049C6.96296 10.9275 7.03704 10.9275 7.10457 10.9049C7.18153 10.8791 7.24582 10.8085 7.37439 10.6672Z"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    {/* <GoPersonFill /> */}
                  </span>
                  <span className="text">+20/day</span>
                </li>
              </NavLink>

              <NavLink
                to="/leaderboards"
                className="menu_items leaderboard"
                onClick={() => setShow(!show)}
              >
                <li className="list">
                  <span className="icon">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      className="nav_icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 16.1728C11.6804 16.1728 9.8 14.3142 9.8 12.0215V8.17783C9.8 7.8915 9.8 7.74833 9.84222 7.6337C9.91298 7.44152 10.0661 7.29013 10.2606 7.22018C10.3766 7.17846 10.5214 7.17846 10.8111 7.17846H17.1889C17.4786 7.17846 17.6234 7.17846 17.7394 7.22018C17.9339 7.29013 18.087 7.44152 18.1578 7.6337C18.2 7.74833 18.2 7.8915 18.2 8.17783V12.0215C18.2 14.3142 16.3196 16.1728 14 16.1728ZM14 16.1728V18.2484M18.2 8.5622H19.95C20.2762 8.5622 20.4392 8.5622 20.5679 8.61486C20.7394 8.68508 20.8757 8.81977 20.9467 8.9893C21 9.11645 21 9.27763 21 9.6V9.94594C21 10.5894 21 10.9111 20.9284 11.175C20.7343 11.8913 20.1682 12.4508 19.4435 12.6427C19.1765 12.7134 18.851 12.7134 18.2 12.7134M9.8 8.5622H8.05C7.72384 8.5622 7.56076 8.5622 7.43212 8.61486C7.2606 8.68508 7.12433 8.81977 7.05328 8.9893C7 9.11645 7 9.27763 7 9.6V9.94594C7 10.5894 7 10.9111 7.07156 11.175C7.26574 11.8913 7.83179 12.4508 8.55648 12.6427C8.82353 12.7134 9.14902 12.7134 9.8 12.7134M10.8111 21.0158H17.1889C17.3607 21.0158 17.5 20.8782 17.5 20.7083C17.5 19.3497 16.3857 18.2484 15.0111 18.2484H12.9889C11.6143 18.2484 10.5 19.3497 10.5 20.7083C10.5 20.8782 10.6393 21.0158 10.8111 21.0158Z"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path d="M27.5 14.0971C27.5 21.4577 21.4614 27.4345 14 27.4345C6.53863 27.4345 0.5 21.4577 0.5 14.0971C0.5 6.73661 6.53863 0.759766 14 0.759766C21.4614 0.759766 27.5 6.73661 27.5 14.0971Z" />
                    </svg>
                    {/* <GiTrophyCup className="icon-style" /> */}
                  </span>
                  <span className="text">leaderboards</span>
                </li>
                <li className="total_points">
                  <span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="child_nav_icon"
                    >
                      <path
                        d="M3.32141 13.0643C3.74723 12.0611 4.74145 11.3574 5.9 11.3574H10.1C11.2586 11.3574 12.2528 12.0611 12.6786 13.0643M10.8 6.10742C10.8 7.65382 9.5464 8.90742 8 8.90742C6.4536 8.90742 5.2 7.65382 5.2 6.10742C5.2 4.56102 6.4536 3.30742 8 3.30742C9.5464 3.30742 10.8 4.56102 10.8 6.10742ZM15 7.85742C15 11.7234 11.866 14.8574 8 14.8574C4.13401 14.8574 1 11.7234 1 7.85742C1 3.99143 4.13401 0.857422 8 0.857422C11.866 0.857422 15 3.99143 15 7.85742Z"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    {/* <GoPersonFill /> */}
                  </span>
                  <span className="text">1296</span>
                </li>
              </NavLink>

              <NavLink
                to="/mint"
                className="menu_items"
                onClick={() => setShow(!show)}
              >
                <li className="list">
                  <span className="icon">
                    <svg
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="nav_icon"
                    >
                      <path
                        d="M6.625 17.9862L13.5002 21.0749L20.375 17.9862M26 13.6621C26 20.4854 20.4036 26.0169 13.5 26.0169C6.59644 26.0169 1 20.4854 1 13.6621C1 6.83869 6.59644 1.30725 13.5 1.30725C20.4036 1.30725 26 6.83869 26 13.6621ZM6.625 13.0443L13.5002 16.133L20.375 13.0443L13.5002 5.01369L6.625 13.0443Z"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    {/* <SiLinuxmint className="icon-style" /> */}
                  </span>
                  <span className="text"><span className="light_weight">MINT</span> YOUR ORIGO</span>
                </li>
              </NavLink>

              <NavLink
                to="/store"
                className="menu_items"
                onClick={() => setShow(!show)}
              >
                <li className="list">
                  <span className="icon">
                    <svg
                      width="25"
                      height="26"
                      viewBox="0 0 25 26"
                      fill="none"
                      className="nav_icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.25 6.56705H7.07093C7.22555 6.56705 7.30286 6.56705 7.36508 6.59499C7.41991 6.61962 7.46637 6.65923 7.49893 6.70909C7.53587 6.76568 7.54681 6.8409 7.56868 6.99135L7.86615 9.03801M7.86615 9.03801L8.52726 13.814C8.61116 14.4201 8.65311 14.7231 8.80053 14.9512C8.93042 15.1522 9.11665 15.3121 9.3368 15.4115C9.58663 15.5243 9.89779 15.5243 10.5201 15.5243H15.8988C16.4912 15.5243 16.7874 15.5243 17.0294 15.4195C17.2429 15.3272 17.4259 15.1782 17.5582 14.9895C17.7082 14.7753 17.7636 14.4894 17.8744 13.9174L18.7064 9.62467C18.7454 9.42336 18.7649 9.3227 18.7366 9.24402C18.7118 9.175 18.6629 9.11688 18.5985 9.08003C18.5252 9.03801 18.4209 9.03801 18.2124 9.03801H7.86615ZM11.278 18.3041C11.278 18.6453 10.9966 18.9219 10.6495 18.9219C10.3024 18.9219 10.021 18.6453 10.021 18.3041C10.021 17.9629 10.3024 17.6864 10.6495 17.6864C10.9966 17.6864 11.278 17.9629 11.278 18.3041ZM16.306 18.3041C16.306 18.6453 16.0246 18.9219 15.6775 18.9219C15.3304 18.9219 15.049 18.6453 15.049 18.3041C15.049 17.9629 15.3304 17.6864 15.6775 17.6864C16.0246 17.6864 16.306 17.9629 16.306 18.3041Z"
                        
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M24.5 12.7445C24.5 19.2862 19.1329 24.5993 12.5 24.5993C5.86706 24.5993 0.5 19.2862 0.5 12.7445C0.5 6.20272 5.86706 0.889648 12.5 0.889648C19.1329 0.889648 24.5 6.20272 24.5 12.7445Z"
                        
                      />
                    </svg>

                    {/* <MdOutlineLocalGroceryStore className="icon-style" /> */}
                  </span>
                  <span className="text">store</span>
                </li>
              </NavLink>
            </ul>
          </div>

          <div className="sidemenu_list-footer">
            <Progress />
            <button className="btn">Connect Wallet</button>
            <div className="social_icons">
              <div className="box">
                <img src={Image.instagram} alt="instagram" />
              </div>
              <div className="box">
                <img src={Image.discord} alt="discord" />
              </div>
              <div className="box">
                <img src={Image.cross} alt="cross" />
              </div>
              <div className="box">
                <img src={Image.boat} alt="cross" />
              </div>
            </div>
            <div className="copy-right">
              <p>Degan lab &copy; {getCurrentYear}</p>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default SideMenu;
