import { useEffect, useState } from "react"
import axios from "axios"
import MapDisplay from "./mapDisplay";
import UploadImage from "./uploadimage";
import { Link, NavLink } from "react-router";

function MapList({setPage}) {

    const [maps, updateMaps] = useState([]);

    useEffect(() => {
        if (maps != []) {
            axios.get("http://127.0.0.1:5000/get_maps").then(response => {
                var mapsList = response.data;
                updateMaps(mapsList);
            })
        }
        
    }, [])

    function addNewMap() {

    }

    return (
      <div className="mapContainer">
          {maps.map((map) => {
            return (<MapDisplay key={map.filename} url={map.file_url} filename={map.filename} update={updateMaps}></MapDisplay>)
          })}
          <NavLink className="newMap" to="/addmap">+</NavLink>
      </div>
    )
  }
  
  export default MapList
  