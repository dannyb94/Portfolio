// import React from 'react';

// export default function Home() {
//     return (
//         <div>
//             <h1>Home w/Grid</h1>
//         </div>
//     );
// };


import React from 'react';
import {Link} from 'react-router-dom';
import { LoremIpsum } from "react-lorem-ipsum";
import PlaceHolder from '../../Assets/pexels-test-img.jpg'

export default function Grid() {
    return (
        <div id='FlexGridHome'>
            <Link className='boxH1 sameBox1' to='/Project1'>
                <div>
                    <img src={PlaceHolder} alt='placeholder'/>
                </div>
            </Link>
            <div className='boxH1 sameBox1'>
                <p><LoremIpsum avgWordsPerSentence={12} avgSentencesPerParagraph={4}/></p>
            </div>

            <div className='break'></div>

            {/* Another flex grid of 3-6 to get the columns I want. */}
            <Link className='boxH1 sameBox2' to='/Project3'>
                <div>
                    <img src={PlaceHolder} alt='placeholder'/>
                </div>
            </Link>
            <div className='boxH1 sameBox2'>
                <div>
                    <p>Social Media icon links</p>
                    <a href='https://www.linkedin.com/in/danielle-ussery-668961a3/'><p>LinkedIn</p></a>
                    <a href='https://github.com/dannyb94?tab=repositories'><p>GitHub</p></a>
                    <a href='https://www.behance.net/dannynicol4882'><p>Behance - maybe</p></a>
                </div>
            </div>
            <Link className='boxH1 soloBox1' to='/Project5'>
                <div>
                    <img src={PlaceHolder} alt='placeholder'/>
                </div>
            </Link>
            <Link className='boxH1 sameBox3' to='/Project6'>
                <div>
                    <img src={PlaceHolder} alt='placeholder'/>
                </div>
            </Link>

            <div className='break'></div>

            <Link className='boxH1 soloBox2' to='/Project7'>
                <div>
                    <img src={PlaceHolder} alt='placeholder'/>
                </div>
            </Link>
            
            <Link className='boxH1 sameBox2' to='/Project8'>
                <div>
                    <img src={PlaceHolder} alt='placeholder'/>
                </div>
            </Link>
            <Link className='boxH1 sameBox3' to='/Project9'>
                <div>
                    <img src={PlaceHolder} alt='placeholder'/>
                </div>
            </Link>
            <Link className='boxH1 sameBox2' to='/Project10'>
                <div>
                    <img src={PlaceHolder} alt='placeholder'/>
                </div>
            </Link>












            {/* <Link className='box sameBox1' to='/Project1'><div><img src='https://placehold.co/600x400'/></div></Link>
            <div className='box sameBox1'>
                <div className='boxInner'>
                    <p>Say "Hey"</p>
                    <p>What you do</p>
                </div>
            </div>
            <Link className='box box3' to='/Project3'><div></div></Link>
            <div className='box box4'>
                <div className='boxInner'>
                    <p>Social Media icon links</p>
                    <a href='https://www.linkedin.com/in/danielle-ussery-668961a3/'><p>LinkedIn</p></a>
                    <a href='https://github.com/dannyb94?tab=repositories'><p>GitHub</p></a>
                    <a href='https://www.behance.net/dannynicol4882'><p>Behance - maybe</p></a>
                </div>
            </div>
            <Link className='box box5' to='/Project5'><div></div></Link>
            <Link className='box sameBox1' to='/Project6'><div></div></Link>
            <Link className='box box7' to='/Project7'><div></div></Link>
            <Link className='box box8' to='/Project8'><div></div></Link>
            <Link className='box sameBox1' to='/Project9'><div></div></Link>
            <Link className='box box10' to='/Project10'><div></div></Link> */}
        </div>
    );
};