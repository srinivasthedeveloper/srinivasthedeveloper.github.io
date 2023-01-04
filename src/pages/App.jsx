import MouseTrail from "components/Common/MouseTrail";
import { useEffect, useState } from "react";

import Mobile from "./mobile";
import Web from "./web/Index";

function App() {

  const [isMobielView, setisMobielView] = useState(false);

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

  return (
    <>
      {isMobielView ? null : <MouseTrail />}
      {isMobielView ? <Mobile /> : <Web />}
    </>
  );
}

export default App;
