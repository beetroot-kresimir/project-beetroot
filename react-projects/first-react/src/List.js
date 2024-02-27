import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import Header from "./Header";

function List(props) {
  // console.log(props.firstname)
  const [someState, setSomeState] = useState("some state");
  const listOfNumbers = [1, 2, 3];

  const isShown = false;

  const isShown2 = false;

  let header = <div>No header</div>;

  if (isShown || isShown2) {
    header = <Header title="my title" content="kskssskks kssks ksms sks" />;
  }
  // called only once component is mounted
  useEffect(() => {
    // calling api
  }, []);

  // called whenever someState changes
  useEffect(() => {}, [someState]);

  // called whenever component is updated
  useEffect(() => {});

  useEffect(() => {
    // code that gets executed on component mount
    return () => {
      // code that gets executed on component unmount
    };
  }, []);

  return (
    <div>
      {header}
      {/* {isShown || isShown2 ? (    
        <Header title="my title" content="kskssskks kssks ksms sks" />
      ) : (
        <div>No header</div>  
      )} */}
      <ul>
        {listOfNumbers.map((num) => (
          <ListItem key={num} myNum={num} />
        ))}
      </ul>
    </div>
  );
}

export default List;
