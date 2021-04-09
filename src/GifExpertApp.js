import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { PropTypes } from "prop-types";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  //const categories = ["One Punch", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState(["One Punch"]);

  const handleAdd = () => {
    setCategories([...categories, "Hunter"]);
  };

  return (
    <>
      <h2>Gif Search App </h2>
      <h3>By: reveron.franklin@gmail.com </h3>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
