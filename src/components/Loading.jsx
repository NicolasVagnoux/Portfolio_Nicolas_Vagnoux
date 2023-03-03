import React, { useState, useEffect } from "react";

const Loading = () => {
  const [pageIsLoading, setPageIsLoading] = useState(true);

  const loading = () => {
    setTimeout(() => {
      setPageIsLoading(false);
    }, 3000);
  };

  useEffect(() => {
    loading();
  }, []);

  return (
    <>
      {pageIsLoading && (
        <div className="loading">
          <img
            className="loading__rocket"
            src="./assets/loading-rocket.png"
            alt="rocket"
          />
          <div className="loading__text">
            {/* <img src="./assets/loading_text1.svg" alt="en" />
            <img src="./assets/loading_text2.svg" alt="attente" />
            <img src="./assets/loading_text3.svg" alt="du" />
            <img src="./assets/loading_text4.svg" alt="décollage..." /> */}
            <img src="./assets/loading_text_v2.svg" alt="loading" />
          </div>
        </div>
      )}
    </>
  );
};

export default Loading;
