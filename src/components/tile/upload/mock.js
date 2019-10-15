import React from 'react';
import mock1 from '../../../assets/photos/1A.jpg'
import mock2 from '../../../assets/photos/1B.jpg'
import mock3 from '../../../assets/photos/1C.jpg'
import mock4 from '../../../assets/photos/2A.jpg'
import mock5 from '../../../assets/photos/2B.jpg'
import mock6 from '../../../assets/photos/2C.jpg'
import {UploadLayout} from "../layout/uploadLayout";

export const MockUploadPhoto = ({setPhoto}) => {
    const randomImages = [mock1, mock2, mock3, mock4, mock5, mock6];
    const onUpload = () => {
        const random = randomImages[Math.floor(Math.random() * randomImages.length)];
        setPhoto(random);
    };
    return (
        <UploadLayout onUpload={onUpload} isMock={true}/>
    );
};
