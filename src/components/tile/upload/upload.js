import React from 'react';
import {UploadLayout} from "../layout/uploadLayout";

export const UploadPhoto = ({setPhoto}) => {
    const onUpload = (e) => {
        const pattern = /image-*/;
        if (!e.target.files[0].type.match(pattern)) {
            alert('Invalid format');
            setPhoto();
        } else {
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (e) => setPhoto(e.target.result);
        }

    };
    return (
        <UploadLayout onUpload={onUpload}/>
    );
};
