import React, { useEffect, useState } from "react";
import { Camera , ShoppingBag, User, MapPin, ShoppingCart, Phone, MessageSquare, Share2, RefreshCw, Maximize, Share, MicOff, StopCircle } from "react-feather";
import styled, { createGlobalStyle } from "styled-components";
import "./App.css";
import { Link, BrowserRouter } from "react-router-dom";
import Base from "../core/Base";
import Signin from "./user/Signin";

function App() {


  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 768;
  return (
    <Styles.Wrapper>
      <CSSReset />
       
      {isMobile ? (
        <div>
        <div>
      <Phone className="contacts" color="#FF1493" size={24}/>
      <MessageSquare className="contacts" color="#FF1493" size={24} />
      <Share2 className="contacts" color="#FF1493" size={24}/>
      <div className="flex-container">
              <div>
                <RefreshCw color="#ffffff" size={16} />
                </div>
              <div>
                <Maximize color="#ffffff" size={16} />
              </div>
              <div>
                <Share color="#ffffff" size={16} />
                </div>
                <div>
                <MicOff color="#ffffff" size={16} />
                </div> 
                <div>
                <StopCircle color="#ffffff" size={16} />
                </div> 
      </div>
      </div>
        <Base />
        </div> 
      ) : (
        <Signin />
      )}
    </Styles.Wrapper>
  );
}
const Styles = {
  Wrapper: styled.main`
    display: flex;
    background-color: #000000;
    height: 100vh;
  `,
};

const CSSReset = createGlobalStyle`
  *,
  *::before, 
  *::after {
    margin: 0; 
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; /*1rem = 10px*/
    box-sizing: border-box;    
  }  

  body {
    font-size: 1.4rem;
    font-family: sans-serif;  
  }
`;
const Navbar = {
  Wrapper: styled.nav`
    flex: 1;

    align-self: flex-start;

    padding: 1rem 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: white;
  `,
  Logo: styled.h1`
    border: 1px solid gray;
    padding: 0.5rem 1rem;
  `,
  Items: styled.ul`
    display: flex;
    list-style: none;
  `,
  Item: styled.li`
    padding: 0 1rem;
    cursor: pointer;
  `,
};
const MobileNavbar = {
  Wrapper: styled(Navbar.Wrapper)`
    align-self: flex-end;

    justify-content: center;
    background: #FF1493;
    margin-top: 43vh;
    width: 100vw;
    height: 10vh;
    border-radius: 5px;
  `,
  Items: styled(Navbar.Items)`
    flex: 1;
    padding: 0 2rem;

    justify-content: space-around;
  `,
  Item: styled(Navbar.Item)`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    font-size: 1.2rem;
  `,
  Icon: styled.span``,
};

export default App;
