import React from 'react';
import Slick from 'react-slick';
import './Slider.less';

export default ({settings, children}) => {
    return <Slick {...settings}>{children}</Slick>;
}