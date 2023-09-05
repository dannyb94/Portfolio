import React from 'react';
import { LoremIpsum } from "react-lorem-ipsum";

export default function Project7() {
    return (
        <div>
            <div className='FlexGridTop'>
                <div className='col col1'>
                    {/* <img src='https://placehold.co/1000x350' alt='placeholder'/> */}
                </div>
            </div>
            <div className='FlexGridTop'>
                <div className='col col1-2'>
                    <p><LoremIpsum avgWordsPerSentence={12} avgSentencesPerParagraph={4}/></p>
                </div>
            </div>
            <div className='FlexGridQuadRow'>
                <div className='quadRow quadRow1-2'></div>
                <div className='quadRow quadRow1-2'></div>
                <div className='quadRow quadRow3'></div>
                <div className='quadRow quadRow4'></div>
            </div>
        </div>
    );
};