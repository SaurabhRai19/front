import React, {useState, useEffect, useRef } from 'react'
import Home from "./Home";
import io from "socket.io";
import Peer from "peer";
import { signout, isAutheticated} from "../auth/helper/index";



export default function Room({match})
 {

  

  const [stream, setStream] = useState();
  var recordstatus=false;
  
    var displayMediaOptions = {
        video: {
          cursor: "always"
        },
        audio: true
      };
      
      useEffect(()=>{
        navigator.mediaDevices.getDisplayMedia(displayMediaOptions).then(stream => {
      
          recordstatus=true;
          setStream(stream);
        })
      }, []);

      
      if(stream){
        console.log("Stream filled");
      }
      else{
        console.log("Stream unfilled");
      }
      var url="335bazaar.com/share/"+match.params.roomId;
      console.log(url);
      console.log(recordstatus);
      
      
    return (
      
      <div>
      
            <Home streaming={stream} />
        </div>
      
    )
}
