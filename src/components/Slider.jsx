import React from "react";
import CardSlider from "./CardSlider";

export default function Slider({ movies }) {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };

  return (
    <div>
      <CardSlider title="Trending Now" data={getMoviesFromRange(0, 10)} />
      <CardSlider title="Only on Netflix" data={getMoviesFromRange(10, 20)} />
      <CardSlider title="New Releases" data={getMoviesFromRange(20, 30)} />
      <CardSlider title="Top Picks For You" data={getMoviesFromRange(30, 40)} />
      <CardSlider
        title="Popular on Netflix"
        data={getMoviesFromRange(40, 50)}
      />
      <CardSlider
        title="Critically Acclaimed Movies"
        data={getMoviesFromRange(50, 60)}
      />
    </div>
  );
}
