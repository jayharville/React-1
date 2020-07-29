import React, {useState} from "react";
import Plants from "./Plants";

const PlantCreation = (props) => {

  const [plants, setPlant] = useState({

    plantName: " ",
    species: " ",
    care: " ",
    Happiness: " ",
    discription: " "

  });

  console.log(plants)

  const onChangeHandler = (event) => {
    setPlant({
      ...plants,
      [event.target.name]: event.target.value
    })
  }

  const onSubmitHandler = (event) => {
    //To prevent page from reloading all of react content
    event.preventDefault();
    //Adding results of this PlantCreation as input into
    props.runPlantSetup(plants)
  }

  console.log(onChangeHandler)

  return (
            <form onSubmit = {onSubmitHandler}>
                    <div>
                        <label htmlFor="plantName">Plant Name:</label>
                        <input
                            id = "plantName"
                            type = "text"
                            name = "plantName"
                            placeholder = "Please Enter Your Plant Name:"
                            value = {plants.plantName}
                            onChange ={onChangeHandler}
                        />
                    </div>

                    <div>
                        <label htmlFor="species">Plant Species:</label>
                        <input
                            id = "species"
                            type = "text"
                            name = "species"
                            placeholder = "Selec or create your plant species"
                            value = {plants.species}
                            onChange ={onChangeHandler}
                        />
                    </div>

                    <div>
                        <label htmlFor="care">Requirements:</label>
                        <input
                            id = "care"
                            type = "text"
                            name = "care"
                            placeholder = " Please set the care level required: "
                            value = {plants.care}
                            onChange ={onChangeHandler}
                        />
                    </div>

                    <div>
                        <label htmlFor="discription">Description:</label>
                        <textarea
                            id="discription"
                            name="discription"
                            value={plants.discription}
                            onChange ={onChangeHandler}
                        />
                    </div>

                <button type="submit"> Click To Add Plant!</button>
            </form>

  );
};

export default PlantCreation;