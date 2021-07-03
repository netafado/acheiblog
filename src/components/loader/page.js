import React, {useEffect, useRef} from 'react';
import lottie from "lottie-web"
import animation from "/assets/json/deal.json"

function Loader({loading}) {
    const container = useRef(null)
    useEffect(()=>{
        lottie.loadAnimation({
          container: container.current,
          renderer: "svg",
          autoplay: true,
          animationData: animation
        })
      }, [])

      if(!loading)
        return null
    return (
        
        <div className="loaderContainer" >
            <div>
                <div ref={container}></div>
            </div>

        </div>
    )
}

export default Loader;