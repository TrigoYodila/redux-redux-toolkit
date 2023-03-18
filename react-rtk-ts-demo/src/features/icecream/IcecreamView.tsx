import React from "react";
import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ordered, restocked } from "./icecreamSlice";

const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const numOficeCream = useAppSelector((state) => state.icecream.numOficeCream);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Number of ice creams - {numOficeCream}</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(ordered())}>Ordered ice cream</button>
      <button onClick={() => dispatch(restocked(value))}>Restock ice cream</button>
    </div>
  );
};

export default IceCreamView;
