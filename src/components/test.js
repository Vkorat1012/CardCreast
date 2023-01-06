import React, { useState } from "react";
import Slider from "react-slick";

export default function Test() {
  const [before, setBefore] = useState({
    activeSlide: 0,
  });

  const [after, setAfter] = useState({ activeSlide2: 0 });

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setBefore({ activeSlide: next }),
    afterChange: (current) => setAfter({ activeSlide2: current }),
  };
  return (
    <>
      <div>
        <h2>beforeChange and afterChange hooks</h2>
        <p>
          BeforeChange activeSlide: <strong>{before.activeSlide}</strong>
        </p>
        <p>
          AfterChange activeSlide: <strong>{after.activeSlide2}</strong>
        </p>
      </div>
      <div>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </>
  );
}
