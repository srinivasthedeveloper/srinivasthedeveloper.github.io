import axios from "axios";
import { useEffect, useState } from "react";
import MouseTrail from "components/Common/MouseTrail";
import PreLoader from "components/Common/PreLoader";

import Mobile from "./mobile";
import Web from "./web/Index";

function App() {

  const [isMobielView, setisMobielView] = useState(false);
  const [isMouseTrailDisabled,setMouseTrailState] = useState(false);
  const [isLoaded, setLoaded] = useState(false);

  const isMobileOS = () =>{
    const mobileOs = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /Windows Phone/i,
      /BlackBerry/i,
    ];
    return mobileOs.some((item)=>{
      return navigator.userAgent.match(item);
    });
  }

  const onWindowResize = () => {
    if ((window.innerWidth <= 768)){// navigator.userAgentData.mobile //to detect is it from mobile or web 
      setMouseTrailState(true);
      return setisMobielView(true);
    }
    if(navigator?.userAgentData?.mobile || isMobileOS()){
      setMouseTrailState(true);
    }else{
      setMouseTrailState(false);
    }
    return setisMobielView(false);
  };

  useEffect(() => {
    onWindowResize();
    window.addEventListener("resize", onWindowResize);
    return () => window.removeEventListener("resize", onWindowResize);
  }, []);

  useEffect(() => {
    axios.get("/static/js/bundle.js")
      .then(() => {
        setLoaded(true);
      })
      .catch((e) => {
        setLoaded(true)
      })
  }, [])

  return (
    <>
      {isLoaded ? <>
        {isMouseTrailDisabled ? null : <MouseTrail />}
        {isMobielView ? <Mobile /> : <Web />}
      </> : <PreLoader />}
    </>
  );
}

export default App;
