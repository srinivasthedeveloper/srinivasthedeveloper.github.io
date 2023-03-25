import axios from "axios";
import { useEffect, useState, useId } from "react";
import ReactGA from "react-ga4";

import MouseTrail from "components/Common/MouseTrail";
import PreLoader from "components/Common/PreLoader";

import Mobile from "./mobile";
import Web from "./web/Index";
import ClickAnimation from "components/Common/ClickAnimation";
import isMobileOS from "Utils/AndroidDesktopViewFinder";

ReactGA.initialize([
  {
    trackingId: "G-S07E5C4KTM",
    gaOptions: {
      userId: 'test'
    }, // optional
    gtagOptions: {}, // optional
  }
]);

function App() {
  const [isMobielView, setisMobielView] = useState(false);
  const [isMouseTrailDisabled, setMouseTrailState] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const [isMobileDevice, setMobileDevice] = useState(false);
  const uniqueUserId = useId();
  const currentTimeStamp = Date?.now();

  const onWindowResize = () => {
    if ((window.innerWidth <= 768)) {// navigator.userAgentData.mobile //to detect is it from mobile or web 
      setMouseTrailState(true);
      return setisMobielView(true);
    } else {
      if (navigator?.userAgentData?.mobile || isMobileDevice) {
        setMouseTrailState(true);
      } else {
        setMouseTrailState(false);
      }
    }
    return setisMobielView(false);
  };

  useEffect(() => {
    onWindowResize();
    // ReactGA.event({
    //   category: 'Tester',
    //   action: 'Webpage loaded test'
    // });
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

  useEffect(()=>{

    function onPageLeave(e){
      if(document.hidden){
        document.title="Come Back :("
      } else {
        document.title = "Srinivas The Developer Personal Portfolio";
      }
    }
    window.addEventListener('visibilitychange',onPageLeave);
    return ()=> window.removeEventListener('visibilitychange',onPageLeave)
  })

  useEffect(()=>{
    const isMobileDesktopView = isMobileOS();
    setMobileDevice(isMobileDesktopView);
    setMouseTrailState(isMobileDesktopView);
  },[navigator?.userAgent])

  useEffect(()=>{
    const obj = {
      visitor: {
        id: uniqueUserId,
          email:        "Recommended if using Pendo Feedback, or NPS Email",
          full_name:    "Recommended if using Pendo Feedback",
          role:        " Optional",

          // You can add any additional visitor level key-values here,
          // as long as it's not one of the above reserved names.
      },
      account: {
        id: uniqueUserId,
        name:         "Optional",
        is_paying:    "Recommended if using Pendo Feedback",
        monthly_value:"Recommended if using Pendo Feedback",
        planLevel:    "Optional",
        planPrice:    "Optional",
        creationDate: "Optional",

        // You can add any additional account level key-values here,
        // as long as it's not one of the above reserved names.
      }
    }
    console.log(obj,"setUserInfosetUserInfo")
    if(window.pendo){
      window.pendo?.initialize(obj);
      // window.pendo?.validateInstall();
    }
  },[window.pendo])

  return (
    <>
      {isLoaded ? <>
        {isMouseTrailDisabled ? null : <MouseTrail />}
        <ClickAnimation />
        {isMobielView ? <Mobile /> : <Web />}
      </> : <PreLoader />}
    </>
  );
}

export default App;
