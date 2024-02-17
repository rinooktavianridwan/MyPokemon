import React from "react";
import "./AddToFav.css";

export const AddToFav = ({ handleAddToList }) => {
  return (
    <div className="mylist" onClick={handleAddToList}>
      <p>Add To Favorite +</p>
    </div>
  );
};

