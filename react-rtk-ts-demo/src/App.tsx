import { useState } from "react";
import CakeView from "./features/cake/CakeView";
import IceCreamView from "./features/icecream/IcecreamView";
import UserView from "./features/user/UserView";

function App() {
  return (
    <div>
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  );
}

export default App;
