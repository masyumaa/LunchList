import React, { useState, useMemo } from "react";
import ShopList from "./ShopList.js";
import ShopFilter from "./ShopFilter.js";
import { shops } from "./data.js";

const App = () => {
  const [filter, setFilter] = useState("");
  const [sortField, setSortField] = useState("rating");
  const [sortOrder, setSortOrder] = useState("desc");
  const filteredShops = useMemo(() => {
    return shops
      .filter((shop) =>
        shop.category.toLowerCase().includes(filter.toLowerCase())
      )
      .sort((a, b) => {
        if (sortField === "category") {
          return sortOrder === "asc"
            ? a[sortField].localeCompare(b[sortField])
            : b[sortField].localeCompare(a[sortField]);
        } else {
          return sortOrder === "asc"
            ? a[sortField] - b[sortField]
            : b[sortField] - a[sortField];
        }
      });
  }, [filter, sortField, sortOrder]);
  return (
    <div className="container">
      <h2>池袋本社おすすめランチ</h2>
      <ShopFilter filter={filter} setFilter={setFilter} />
      <button
        onClick={() => {
          setSortField("budget");
          setSortOrder("asc");
        }}
      >
        予算(昇順)
      </button>
      <button
        onClick={() => {
          setSortField("budget");
          setSortOrder("desc");
        }}
      >
        予算(降順)
      </button>
      <button
        onClick={() => {
          setSortField("time");
          setSortOrder("asc");
        }}
      >
        徒歩時間(昇順)
      </button>
      <button
        onClick={() => {
          setSortField("time");
          setSortOrder("desc");
        }}
      >
        徒歩時間(降順)
      </button>
      <button
        onClick={() => {
          setSortField("rating");
          setSortOrder("asc");
        }}
      >
        評価(昇順)
      </button>
      <button
        onClick={() => {
          setSortField("rating");
          setSortOrder("desc");
        }}
      >
        評価(降順)
      </button>
      <ShopList shops={filteredShops} />
    </div>
  );
};

export default App;
