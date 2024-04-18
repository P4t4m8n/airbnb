"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { debounce } from "../service/util";
import { ChangeEvent } from "react";

export default function StaySearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (ev: ChangeEvent) => {
    console.log("ev:", ev);
    const params = new URLSearchParams(searchParams);
    console.log("params:", params);
    replace(`${pathname}?${params.toString()}`);
  };

  const handleSearchDebounce = debounce(handleSearch, 2000);

  return (
    <div className="search">
      <input placeholder="search" onChange={(ev) => handleSearch}></input>
    </div>
  );
}
