import React, { useState, useEffect } from "react";

const Loading = () => {
  const [pageIsLoading, setPageIsLoading] = useState(true);

  const loading = () => {
    setTimeout(() => {
      setPageIsLoading(false);
    }, 2500);
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
          <p>En attente de décollage...</p>
        </div>
      )}
    </>
  );
};

export default Loading;
