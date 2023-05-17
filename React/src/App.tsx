// import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alert from "./components/Alert";

import Button from "./components/Button";

function App() {
  //   let items = ["New York", "Tokyo", "London", "Delhi", "Toronto"];

  //   const handleSelectedItem = (item: string) => {
  //     console.log(item);
  //   };

  const [alertVisible, setAlertV] = useState(false);

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="cities"
        onSelectItem={handleSelectedItem}
      /> */}

      {alertVisible && <Alert onClose={() => setAlertV(false)}>help?</Alert>}
      <Button color="dark" onClick={() => setAlertV(true)}>
        brrr
      </Button>
    </div>
  );
}

export default App;
