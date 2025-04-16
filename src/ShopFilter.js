import React from "react";

const ShopFilter = ({ filter, setFilter }) => {
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        id="filter"
        value={filter}
        onChange={handleChange}
        placeholder="検索キーワードをいれてください(ジャンル)"
      />
    </div>
  );
};

export default ShopFilter;
