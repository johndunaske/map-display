import { NavLink } from "react-router"
import Modal from "react-modal"
import { useState } from "react";
import axios from "axios";

function MapDisplay({filename, url, update}) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleOpenDialog = () => {
      setIsDialogOpen(true);
    };
  
    const handleCloseDialog = () => {
      setIsDialogOpen(false);
    };
  
    const handleConfirm = () => {
      axios.post("http://127.0.0.1:5000/delete_map/" + filename).then(response => {
        if (response.status == 200){
            update(response.data)
        }
      })
      setIsDialogOpen(false);
    };

    return (
      <div className="mapimageContainer">
        <Modal
        isOpen={isDialogOpen}
        onRequestClose={handleCloseDialog}
        className="modal"
        >
            <h2>Are you sure you want to delete this map?</h2>
            <button style={{color: "green", cursor: "pointer"}} onClick={handleConfirm}>Yes</button>
            <button style={{color: "red", cursor: "pointer"}} onClick={handleCloseDialog}>No</button>
        </Modal>
        <NavLink className="mapimage" to={"/viewmap/" + filename} >
            <img className="mapImageThing" src={url} draggable="false"></img>
            
        </NavLink>
        <p>{filename}</p>
        <button className="delete" onClick={handleOpenDialog}>Delete</button>
      </div>
    )
  }
  
  export default MapDisplay
  