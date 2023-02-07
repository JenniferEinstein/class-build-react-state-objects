import { dogsData } from "./data"
import { useState } from "react";
import { v1 as generateUniqueID } from "uuid";


function App() {
  const [dogs, setDogs] = useState(dogsData)

  function addDog() {
    console.log("Add kelev");
    //adding a basic object (of sorts)
    const rover = {
      id:     generateUniqueID(),
      name:   "Rover",
      present: "false",
      grade:  "100",
      notes:  "The coolest new dog",
    };



    setDogs([rover, ...dogs])

  }

  function removeDog(dogID) {
    // console.log("remove dog with ID of ", dogID)
    //use a filter method to remove any dogs that have a matching id.
    
    const filteredDogArray = [dogs.filter((dog) => dog.id !== dogID)]
    
    //this will filter out all IDs that are not the dog.id I am looking for
    //set the dogs array to the new array that will not have the removed dog
    
    setDogs(filteredDogArray);
  }


//let us account for dog attendance (absent)
  //put a line through a dog's name to say that they are absent

  function updateDogAttendance(dogID) {
    console.log("update dog attendance, dogID is ", dogID)
  }

  return (
    <div className="App">
      <header>
        <h1> Bark and Bowl Doggy Day Care</h1>
        <h2>{new Date().toDateString()}</h2>
      </header>
      <button onClick={addDog}>Add a new dog</button>
      <aside></aside>
      <main></main>
      <ul>
        {
          dogs.map((dog) => {
            return (
            <li key={dog}>
              <span>
                onClick={() =>  updateDogAttendance(dog.id)}
                style={
                  dog.present 
                  ? {textDecoration: "none"}
                  : {textDecoration: "line-through"}
                }
                

                {dog.name}{""}
                </span>
              <button onClick={() => removeDog(dog.id)}>remove</button>
            </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
