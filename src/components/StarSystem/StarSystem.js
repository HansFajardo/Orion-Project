import React from "react";
import EmptyStar from "../../assets/img/star.svg";
import StarHalf from "../../assets/img/star-half.svg";
import FullStar from "../../assets/img/star-fill.svg";

export default function StarSystem(props) {
  const rating = props.rating;
  return (
    <div className="d-flex align-items-center">
      {Array(5)
        .fill(null)
        .map((_, index) => {
          const isHalfStar = rating > index && rating < index + 1;
          const starImage = isHalfStar
            ? StarHalf
            : rating > index
            ? FullStar
            : EmptyStar;
          const altText = isHalfStar
            ? "half star"
            : rating > index
            ? "full star"
            : "empty star";

          return (
            <img
              width={24}
              key={index}
              src={starImage}
              alt={altText}
              style={{ cursor: "pointer",paddingLeft:'3px' }
              }
              
              // Update on click
            />
          );
        })}
    </div>
  );
}
