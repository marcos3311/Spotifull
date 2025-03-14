/* eslint-disable jsx-a11y/img-redundant-alt */
import { useSelector } from "react-redux";
import { selectName, selectDescription, selectImg, selectUrl } from "../../../Features/user/userSlice";

export default function Profile() {
    const [name, img, description, url] = [
        useSelector(selectName), 
        useSelector(selectImg), 
        useSelector(selectDescription),
        useSelector(selectUrl),
    ];
    return (
        <div className="profile-container">
            <picture className="profile-photo">
                <img className="img" src={img} alt="Spotify's user profile photo" />
            </picture>
            <div className="profile-text">
                <a href={url} target="blank">{name}</a>
                <p>{description}</p>
            </div>
        </div>
    )
}