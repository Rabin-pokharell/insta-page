import "./ui.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function Interface() {
  return (
    <div className="container">
      <div className="left">
        <h3 id="h31">Dunkers gram</h3>
        <ul>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faHouse} id="insta-logo" />
              Home
            </a>
          </li>
        </ul>
      </div>
      <div className="center"></div>
      <div className="right"></div>
    </div>
  );
}

export default Interface;
