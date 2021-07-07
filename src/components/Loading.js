import React from "react";

import Loader from "./Loader";
import "./styles/Loading.css";

function Loading() {
  return (
    <React.Fragment>
      <div className="PageLoading">
        <Loader />
      </div>
    </React.Fragment>
  );
}

export default Loading;
