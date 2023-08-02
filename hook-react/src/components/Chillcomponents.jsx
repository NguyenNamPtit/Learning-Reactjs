import React, { memo } from "react";

const Chillcomponents = () => {
  console.log("Chillier components");
  return (
    <div>
      <h2>Chill components</h2>
    </div>
  );
};

export default React.memo(Chillcomponents);
