import React, { useState } from "react";

const ReadMore = ({ text }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="testimonials__quote__text">
      {isReadMore ? !!text?.length && `${text?.slice(0, 400)}...` : text}
      {text?.length > 400 && (
        <span className="response_text" onClick={toggleReadMore}>
          {isReadMore ? " Read more " : " Show less"}
        </span>
      )}
    </p>
  );
};

export default ReadMore;
