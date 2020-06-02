import React from 'react';
import ContactCards from "./components/contact-cards";
import Greeting from "./components/greeting";


function App() {
  return (
    <div>
      {/* <div>
        <Greeting name="Aaron" age="47"/>
        <Greeting name="Kathy"/>
        <Greeting name="Parker"/>
        <Greeting name="Sabrina"/>
      </div> */}
      <div className="cardInfo">
          <img src="https://image.flaticon.com/icons/svg/2494/2494965.svg"></img>
        <div>
        <ContactCards firstName="Aaron" lastName="Donaldson" phoneNumber="307-555-1234"/>
        </div>
      </div>
    </div>
  );
}

export default App;
