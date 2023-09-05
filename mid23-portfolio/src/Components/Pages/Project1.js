import React from 'react';
import { LoremIpsum } from "react-lorem-ipsum";

// Projects 1 & 2 will use this layout.
export default function Project1() {
    return (
        <div>
            <div className='FlexGridTop'>
                <div className='col col1'>
                    {/* <img src='https://placehold.co/1000x350' alt='placeholder'/> */}
                </div>
            </div>
            <div className='FlexGridTop'>
                <div className='col col1-2'>
                    <p><LoremIpsum avgWordsPerSentence={11} avgSentencesPerParagraph={12}/></p>
                </div>
            </div>
            <div className='FlexGridTop'>
                <div className='col col1-3'>
                {/* <img src='https://placehold.co/1000x750' alt='placeholder'/> */}
                </div>
            </div>
            
        </div>
    );
};