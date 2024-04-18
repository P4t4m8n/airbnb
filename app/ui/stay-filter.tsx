"use client";

import { useEffect, useRef, useState } from "react";
import NationalParkSvg from "./svgs/national-park";

export default function StayFilter() {
  const [currItems, setCurrItems] = useState([]);
  const svgArray = Array.from({ length: 50 });

  useEffect(() => {});

  const page = useRef(1);
  const itemsPerPage = 10;
  const paginate = (dir: number) => {};

  return (
    <div className="stay-filter">
      <div>
        <NationalParkSvg />
        <NationalParkSvg />
        <NationalParkSvg />
        <NationalParkSvg />
        <NationalParkSvg />
        <NationalParkSvg />
        <NationalParkSvg />
        <NationalParkSvg />
        <NationalParkSvg />
        <NationalParkSvg />
      </div>
      <button>Filters</button>
    </div>
  );
}
