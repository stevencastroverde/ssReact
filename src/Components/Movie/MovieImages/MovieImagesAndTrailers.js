import React from 'react';
import './MovieImagesAndTrailers.css';


const MovieImagesAndTrailers = props => {
    console.log(props)
    return (
        <div className="images-trailer">
            <iframe
                src={props.trailer}
                id="Example2"
                title="Example2"
                width="600"
                height="350"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
            >
            </iframe>
            {props.images.map((image, index) => {
                return <img key={index} src={image.small.url} alt="Image from the movie"/>
            }
                )}
        </div>

    )
}


export default MovieImagesAndTrailers