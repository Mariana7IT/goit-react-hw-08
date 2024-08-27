import React from "react";
import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      {isLoading && (
        <div className={s.container}>
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#00BFFF"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName="color-ring-wrapper"
            visible={true}
          />
        </div>
      )}
    </>
  );
};

export default Loader;
