import React from "react";

function Hero() {
  return (
    <div className="h-auto w-full">
      <img
        className=" w-full hidden  md:block"
        src="https://thumbs.dreamstime.com/z/frontend-development-web-banner-concept-website-interface-frontend-development-web-banner-concept-website-interface-design-159250288.jpg?ct=jpeg"
        alt="image 1"
      />
      <img
        className=" w-full   md:hidden"
        src="https://thumbs.dreamstime.com/z/frontend-development-web-banner-concept-website-interface-frontend-development-web-banner-concept-website-interface-design-158158942.jpg?ct=jpeg"
        alt="image 2"
      />
    </div>
  );
}

export default Hero;
