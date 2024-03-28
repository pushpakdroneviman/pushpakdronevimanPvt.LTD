import React from 'react';
import './advantagesImagas.css';


const AdvantagesImages = (props) => {
    return (
        <>
            <div className='adv-images'>
                <div className='adv-img-box'>
                    <img src={props.images1} />
                    <div className='img-title'>{props.imagetitle1}</div>
                </div>
                <div className='adv-img-box'>
                    <img src={props.images2} />
                    <div className='img-title'>{props.imagetitle2}</div>
                </div>
                <div className='adv-img-box'>
                    <img src={props.images3} />
                    <div className='img-title'>{props.imagetitle3}</div>
                </div>
                <div className='adv-img-box'>
                    <img src={props.images4} />
                    <div className='img-title'>{props.imagetitle4}</div>
                </div>
            </div>
        </>
    )
}

export default AdvantagesImages