import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import coverPhoto from '../../assets/cover/0.jpg';

import { Image } from 'react-bootstrap';
import Nav from '../Nav';

function Cover() {
    return(
        <div fluid className='cover-bg'>
            <Nav></Nav>
                <p className='mission'>The mission has always been to succeed, defy odds, and conquer mountains: one step at a time. So how do I do that with programming? Now its one bug at a time, a new language implemented, one feature, a vision adopted on screen, a business venture with the perfect website; publish! I sign my name on every piece I touch leaving it better than I found it, </p>
                <p className='cover-text'>
                ‘Who are you, O great mountain?
                <span>Zechariah 4:7</span>
                </p>
            <Image
            fluid
            src={coverPhoto}
            alt=''
            className='cover-photo'
            />
        </div>
    )
}

export default Cover;