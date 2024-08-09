import React from 'react';
import { Link } from 'react-router-dom';
import { Icon as Phone } from '@iconify/react';
import { Icon as Mail} from '@iconify/react';
import { Icon as RtArrow } from '@iconify/react';

const inlineStyles = {
    link: {
        textDecoration: 'none',
        color: "#c4c4c4",

        "&:hover": {
            color: "#838c86",
        },

        "&:active": {
            color: "#cecdc1",
        }
    },

    icons: {
        padding: "2px 12px 2px 6px",
        color: "000000",
    },

    rtArrow: {
        padding: "0px 0px 0px 60px",
        color: "#000000"
    },

    innerContact: {
        textAlign: "left",
    }
}


export default function Footer(){

    return (
        <div>
            <footer>
                <table id='moreInfo'>
                    <tbody>
                    <tr>
                        <td>Company</td>
                        <td>Support</td>
                    </tr>
                    <tr>
                        <td>About Us</td>
                        <td>Shipping & Returns</td>
                    </tr>
                    <tr>
                        <td>Reviews</td>
                        <td>Financing</td>
                    </tr>
                    <tr>
                        <td>Careers</td>
                        <td>Will It Fit?</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>FAQ</td>
                    </tr>
                    </tbody>
                </table>

                <div id='contactBox'>
                    <p>Questions? We're here to help.</p>
                    <p>Available 9am-8pm PST, 7 days a week.</p>
                    <Link to='/Home' className='footer'>
                        <table>
                            <tbody>
                            <tr>
                                <td>
                                    <Phone icon="bi:phone" height="30" id='phone' style={inlineStyles.icons} />
                                </td>
                                <td>
                                    <p>Call</p>
                                    <p>800-734-4312</p>
                                </td>
                                <td>
                                    <RtArrow icon="ep:arrow-right" height="20" style={inlineStyles.rtArrow} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Mail icon="fontisto:email" height="30" id='email' style={inlineStyles.icons} />
                                </td>
                                <td>
                                    <p>Email</p>
                                    <p>Send us a message</p>
                                </td>
                                <td>
                                    <RtArrow icon="ep:arrow-right" height="20" style={inlineStyles.rtArrow} />
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </Link>
                </div>
            </footer>
        </div>
    )
}