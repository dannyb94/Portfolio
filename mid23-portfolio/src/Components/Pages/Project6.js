import React from 'react';
import { LoremIpsum } from "react-lorem-ipsum";

export default function Project6() {
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
            <div className='FlexGridQuad'>
                <div className='quadcol'>
                </div>
                <div className=''>
                </div>
            </div>
            
        </div>
    );
};