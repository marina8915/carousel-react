import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

export default class MyCarousel extends Component {
    render() {
        const images = ['carousel/1.jpg', 'carousel/2.jpg', 'carousel/3.jpg']
        const legend = ['Flowers']
        return (
            <Carousel showArrows={true} showThumbs={true} autoPlay>
                {
                    images.map((url, index) => (
                        <div key={index}>
                            <img src={url} />
                            <p className="legend">{legend}</p>
                        </div>
                    ))
                }
            </Carousel>
        );
    }
}
const images = ['carousel/1.jpg', 'carousel/2.jpg', 'carousel/3.jpg']
ReactDOM.render(<MyCarousel images={images}/>, document.getElementById('root'));