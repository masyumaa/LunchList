import React from "react";
import ReactStars from "react-stars";

const ShopList = ({ shops }) => {
  return (
    <ul>
      {shops.map((shop) => (
        <li key={shop.id}>
          <h3>{shop.name}</h3>
          <span>ジャンル：{shop.category}</span>
          <span>予算：{shop.budget}円</span>
          <span>徒歩時間：{shop.time}分</span>
          <ReactStars value={shop.rating} size={25} edit={false} />
          <a href={shop.url}>リンク</a>
        </li>
      ))}
    </ul>
  );
};

export default ShopList;
