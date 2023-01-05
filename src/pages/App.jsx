import axios from "axios";
import { useEffect, useState } from "react";
import MouseTrail from "components/Common/MouseTrail";
import PreLoader from "components/Common/PreLoader";

import Mobile from "./mobile";
import Web from "./web/Index";

function App() {

  const [isMobielView, setisMobielView] = useState(false);
  const [isLoaded, setLoaded] = useState(false);

  const onWindowResize = () => {
    if (window.innerWidth <= 768) {
      return setisMobielView(true);
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
        console.log("error", e)
      })
  }, [])

  return (
    <>
      {isLoaded ? <>
        {isMobielView ? null : <MouseTrail />}
        {isMobielView ? <Mobile /> : <Web />}
      </> : <PreLoader />}
    </>
  );
}

export default App;
