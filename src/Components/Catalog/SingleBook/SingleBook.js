import React  from 'react';
import {useHistory, useLocation} from "react-router-dom";
import "./SingleBook.css";

export default function SingleBook(props) {

    const location = useLocation();

    return(
    <div className="ui all">
            <div className="Picture">
                <img className="imagee" alt="cover" src={location.state.image}/>
            </div>
            <div className="Title">
                <h1>{location.state.name}</h1>
            </div>
            <div className="Info">
                <p className="infoo">{location.state.author}</p>
                <p className="infoo">Genre: {location.state.genre.name}</p>
                <p className="infoo">Created On: {location.state.createOn.slice(0,10)}</p>
                <p className="infoo">Updated On: {location.state.lastUpdateOn.slice(0,10)}</p>
                <p></p>
                <p></p>
                <p className="infoo"><b>Short Description:</b></p>
                <p className="infoo">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis ut dignissim ante. Integer rhoncus semper aliquet.
                    Sed ut semper metus. Phasellus nec blandit est. Aliquam volutpat nulla et mauris maximus lobortis. Maecenas ultricies nec felis vitae rhoncus. Morbi facilisis aliquam felis sit amet blandit. Suspendisse sed vehicula sapien, tincidunt mollis ante. Duis faucibus pharetra quam vel pulvinar. Cras at mauris et metus gravida eleifend in id ligula. Nulla vehicula, dui sit amet eleifend rutrum, purus risus dignissim sapien, quis tristique arcu diam in nulla. Pellentesque suscipit ac lacus iaculis facilisis.
                    Integer et purus scelerisque, feugiat justo malesuada, convallis felis. Fusce tincidunt sed elit ac vehicula.</p>
            </div>
        </div>
        );

}