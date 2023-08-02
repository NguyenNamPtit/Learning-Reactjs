import { useCallback, useMemo, useRef, useState } from "react";

import "./App.css";
import Chillcomponents from "./components/Chillcomponents";
import ListingProduct from "./components/ListingProduct";

function App() {
  const [uer, setUser] = useState({
    firstname: "Nguyen Hoài",
    lastname: "A",
  });

  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log("useCallback");
    setCount(count + 1);
  }, [count]);
  // console.log("re-reander");

  const fullname = useMemo(() => {
    console.log("useMemo");
    return uer.firstname + uer.lastname;
  }, [uer]);
  // console.log(fullname);

  //use Ref

  const inputSearchEl = useRef(null);
  const handleClickRef = () => {
    inputSearchEl.current.focus();
    console.log(inputSearchEl.current);
  };
  return (
    <>
      {/* <h1> Số đếm : {count}</h1>
      <button onClick={handleClick}>Count</button>
      <Chillcomponents count={count} />
      <h2>{fullname}</h2> */}

      <hr></hr>
      <input ref={inputSearchEl} type="text" placeholder="Search" />
      <button onClick={handleClickRef}> Search</button>
      <hr />
      <ListingProduct />
    </>
  );
}

export default App;
