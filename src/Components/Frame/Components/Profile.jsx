/* eslint-disable jsx-a11y/img-redundant-alt */
import { useSelector } from "react-redux";
import { selectName, selectDescription, selectImg } from "../../../Features/user/userSlice";

export default function Profile() {
    const [name, img, description] = [
        useSelector(selectName), 
        useSelector(selectImg), 
        useSelector(selectDescription)
    ];
    return (
        <div className="profile-container">
            <picture className="profile-photo">
                <img className="img" src={img} alt="Spotify's user profile photo" />
            </picture>
            <div className="profile-text">
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}