import React from "react";
import "./RemoveToFav.css";

export const RemoveToFav = ({ handleRemoveToList, close }) => {
  const combinedActions = () => {
    handleRemoveToList();
    close();
  };

  return (
    <div className="mylist" onClick={combinedActions}>
      <p>Remove To List -</p>
    </div>
  );
};
