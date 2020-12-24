import React, { useEffect, useState } from "react";
import { Camera , ShoppingBag, User, MapPin, ShoppingCart, Phone, MessageSquare, Share2, RefreshCw, Maximize, Share, MicOff, StopCircle, Video } from "react-feather";
import styled, { createGlobalStyle } from "styled-components";
import "../coreStyles/Home.css";
import { Link, BrowserRouter } from "react-router-dom";
import Signin from "../user/Signin";
import "../coreStyles/Base.css";
import Base from "./Base";
import { getAllUsers, getroomId } from "./helper/coreapicalls";
import { isAutheticated } from "../auth/helper";
import Modal from "react-modal";
import SearchBox from "./Searchbox";
import { API } from "../backend";
import { useClipboard } from 'use-clipboard-copy';
import { stopCapture } from "./Room";


function App({streaming}) {
  const [stream, setStream] = useState();
  
  const [rooms, setRooms] = useState();
  const [roomsshare, setRoomsshare] = useState();

  const [usersarr, setUsersarr] = useState([]);
  const [usersarray, setusersarray] = useState([]);
  const [error, setError] = useState(false);
  const { user } = isAutheticated();
  const [windowDimension, setWindowDimension] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false)
  var bar=[];
  const [searchfd, setSearchfd] = useState({
    searchfield: ''
  });

  const onSearchChange = (event) => {
    setSearchfd({ searchfield: event.target.value })
}
const { searchfield } = searchfd;

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
  var displayMediaOptions = {
    video: {
      cursor: "always"
    },
    audio: true
  };
  const startCapture=()=>{
    navigator.mediaDevices.getDisplayMedia(displayMediaOptions).then(stream => {
      setStream(stream);
    })
  }
  const stopCapture=()=>{
    let tracks = streaming.getTracks();
  tracks.forEach(track => track.stop());
  }
  const audioMute=()=>{
    if(displayMediaOptions.audio==true){displayMediaOptions.audio=false;
      console.log("Audio Muted");
    }
    else if(displayMediaOptions.audio==false){
      displayMediaOptions.audio=true;
      console.log("Audio Enabled");
    }
  }
  const loadAllUsers = ()=>{
    getAllUsers().then(data=>{
      if(data.error){
        setError(data.error);
      }else{
        setUsersarr(data);
      }
    })
  };
  useEffect(() => {
    loadAllUsers();
  }, []);
  const getroom=()=>{
};

  
  useEffect(()=>{
    const fetchPromise = 
    fetch(`${API}/share`);
fetchPromise.then(response => {
 return response.json();
}).then(room => {
 
setRooms(room); 
})

  }, []);
  console.log("Finally a single Room ID: " + rooms);
  //console.log(usersarr);
  //usersarr.forEach(user=>{
  //  console.log(user.name)
  //});
  //usersarr.forEach(user=>{
    //console.log(user._id)
 // })
 const PublicUrl=() =>{
  const clipboard = useClipboard();
  var url= `335bazaar/share/${rooms}`;
  return (
    <div>
      <input ref={clipboard.target} type="hidden" value={url} readOnly />
      <button onClick={clipboard.copy} className="copyurlbutton">{clipboard.copied ? 'Copied' : 'Copy Link'}</button>
    </div>
  );
};
 // console.log(("Current user" + user));

  bar=usersarr.slice();
  const filteredusers = usersarr.filter(filtering => {
    return filtering.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  return (
    <Styles.Wrapper>
      <CSSReset />
       
      {isMobile ? (
        <div className="containerofcontainer">
        <div><h1>335 BAZAAR</h1></div>
        <div>
      <Phone className="contacts" color="#FF1493" size={24}/>
      <MessageSquare className="contacts" color="#FF1493" size={24} />
      <Share2 className="contacts" color="#FF1493" size={24}/>
      <div className="flex-container">
              <div>
              <i className="fa fa-refresh fa-lg sidelogo" aria-hidden="true" onClick={getroom}></i>
                </div>
              <div>
              <a href="/qrscan"><Link to="/qrscan">QR</Link></a>
              </div>
              <div>
              <i className="fa fa-video-camera fa-lg sidelogo" aria-hidden="true" onClick={() => setModalIsOpen(true)}></i>
              {<Modal isOpen={modalIsOpen}
                    shouldCloseOnOverlayClick={false}
                    onRequestClose={() => setModalIsOpen(false)}
                    style={{
                        overlay: {
                            backgroundColor: 'transparent'
                        },
                        content: {
                            color: 'red'
                        }
                    }}
                    ariaHideApp={false}
                    >
                    <div>
                        <button id="modalclosebutton" onClick={() => setModalIsOpen(false)}>Close</button>
                        
                    </div>
                    <div>
                    <SearchBox searchChange={onSearchChange}/>
                    
                    <h3>SHOP TOGETHER!</h3>
                    <div className="abcd">
                    {bar.forEach(user => {
                      <p>{user.name}</p>
                    })}
                    {filteredusers.map(user => {
                      console.log(" Filtered Users: " + user.name)
                    })}
                    </div>
                    {usersarr.forEach(user => {
                      console.log(user.name);
                    })}
                    <div id="modalusername">
                    <p>Saurabh Rai</p>
                    <Link to={`/share/${rooms}`}><button className="modalusernameshare" onClick={getroom}>Share</button></Link>
                    {PublicUrl()}
                    </div>
                    </div>
                    
                </Modal>
                
                }
                </div>
                <div>
                {displayMediaOptions.audio==true?(<i className="fa fa-microphone-slash fa-lg sidelogo" aria-hidden="true" onClick={audioMute}></i>
                ):(<i className="fa fa-microphone fa-lg sidelogo" aria-hidden="true" onClick={audioMute}></i>)}
                </div> 
                <div>
                  <i className="fa fa-stop-circle-o fa-lg sidelogo" onClick={stopCapture}></i>
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
