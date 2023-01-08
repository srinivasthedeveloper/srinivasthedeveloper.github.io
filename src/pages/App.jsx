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

  const onWindowResize = () => {
    if ((window.innerWidth <= 768)){// navigator.userAgentData.mobile //to detect is it from mobile or web 
      return setisMobielView(true);
    }
    if(!isMouseTrailDisabled && navigator.userAgentData.mobile){
      setMouseTrailState(true);
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
