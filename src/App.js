import { dogsData } from "./data"
import { useState } from "react";
import DogDetails, { dogDetails } from  "./DogDetails"
import { v1 as generateUniqueID } from "uuid";


function App() {
  const [dogs, setDogs] = useState(dogsData)

  function addDog() {
    console.log("Add Rover");
    //Create a new dog named Rover
    //give the dog a unique id (in real life, a database would handle this)
    //adding a basic object (of sorts)
    const rover = {
      id:     generateUniqueID(),
      name:   "Rover",
      present: false,
      grade:  "100",
      notes:  "The coolest new dog",
    };

    //make a copy of the dogs array using destructuring
    //add rover, in this case we are adding the dog in the 1st position

    setDogs([rover, ...dogs])

    //if we wanted this in the last position, it would be setDogs([...dogs, rover]);
  }

  function removeDog(dogID) {
    // console.log("remove dog with ID of ", dogID)
    //use a filter method to remove any dogs that have a matching id.
    
    const filteredDogArray = dogs.filter((dog) => dog.id !== dogID)
    
    //this will filter out all IDs that are not the dog.id I am looking for
    //set the dogs array to the new array that will not have the removed dog
    
    setDogs(filteredDogArray);
  }


//let us account for dog attendance (absent)
  //put a line through a dog's name to say that they are absent

  function updateDogAttendance(dogID) {
    // console.log("update dog attendance, dogID is ", dogID)
    const dogArray = [...dogs]; //this makes a copy
        //find the dog with the matching ID number's array position
    const index = dogArray.findIndex((dog) => dogID === dog.id)
        //Access the dog's present property and update the value
        //by using ! and we want it to toggle the value of present
    dogArray[index].present = !dogArray[index].present;
        //put the updated array into setDogs to update the state
    setDogs(dogArray);
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
            <li key={dog.id}>
              <span
                onClick={() =>  updateDogAttendance(dog.id)}
                style={
                  dog.present 
                  ? {textDecoration: "none"}
                  : {textDecoration: "line-through"}
                }
                >
                {dog.name}{" "}
                </span>
              <button onClick={() => removeDog(dog.id)}>remove</button>
              <DogDetails dog={dog} />
            </li>
            
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
