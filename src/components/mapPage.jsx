import { useParams } from "react-router";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function MapPage() {
  const { map } = useParams();

  return (
      <TransformWrapper>
        <TransformComponent>
        <div className="mapContainer">
          <img
            className="mapPageImage"
            src={"http://localhost:5000/images/" + map}
            style={{ transition: "transform 0.2s ease-out" }}
          ></img>
        </div>
        </TransformComponent>
      </TransformWrapper>
  );
}

export default MapPage;
