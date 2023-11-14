import React from "react";
import Lottie from "react-lottie";
import loadingAnimation from "./LoadingIcon.json"
import "./LoadingIcon.css"

function LoadingIcon(){
        const defaultOptions = {
          loop: true,
          autoplay: true,
          animationData: loadingAnimation,
        };
      

    return(
        <div className="loading-animation">
      <Lottie options={defaultOptions} height={100} width={100} />
        </div>
    );
 }

export {LoadingIcon}