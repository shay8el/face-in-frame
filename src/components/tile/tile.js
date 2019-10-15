import React, {useState, useRef} from 'react';
import {TileLayout} from "./layout/tileLayout";
import {UploadPhoto} from "./upload/upload";
import {MockUploadPhoto} from "./upload/mock";
import './tile.css';
import {getStyles} from "./locator/locator";
import {LoadingSpinner} from "./layout/loadingSpinner";
import {ResetButton} from "./layout/resetButton";
import {OnTileContentLayout} from "./layout/onTileContentLayout";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";


export const Tile = (props) => {
    const imageSizeInTile = 138;
    const imgEl = useRef(null);
    const [imgSrc, setImgSrc] = useState('');
    const [imgStyle, setImgStyle] = useState({display: 'none'});
    const [isLoading, setIsLoading] = useState('');
    const [isMock, setIsMock] = useState(true);
    const setPhoto = (photo) => {
        setImgSrc(photo);
        setIsLoading(true);
        if (photo) {
            getStyles(imgEl.current, imageSizeInTile).then((style) => {
                setImgStyle(style);
                setIsLoading(false);
            });
        } else {
            setImgStyle({display: 'none'})
        }
    };
    const handleMock = event => {
        setIsMock(event.target.checked);
    };
    return (
        <div className="tile-holder">
            <TileLayout>
                {<img alt="" ref={imgEl} className="image" style={imgStyle} src={imgSrc}/>}
                <OnTileContentLayout>
                    {(!imgSrc) ? ((!isMock) ? (<UploadPhoto setPhoto={setPhoto}/>) : (
                        <MockUploadPhoto setPhoto={setPhoto}/>)) : (isLoading && (<LoadingSpinner/>))}
                </OnTileContentLayout>
            </TileLayout>
            <div style={{margin: 'auto'}}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={isMock}
                            onChange={handleMock}
                            color="secondary"
                        />
                    }
                    label="Mock"
                    labelPlacement="end"
                />

                <ResetButton isActive={!Boolean(imgSrc)} onReset={() => setPhoto('')}/>
            </div>
        </div>
    )
};
