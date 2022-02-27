import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import coverPhoto from '../../assets/cover/0.jpg';
import { Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import Nav from '../Nav';

function Cover() {
    return(
        <Container fluid className='cover-bg'>
            <Nav></Nav>
                <p className='cover-text'>
                ‘Who are you, O great mountain? Before Zerubbabel you shall become a plain! And he shall bring forth the capstone With shouts of “Grace, grace to it!” ’ ”
                <span>Zechariah 4:7</span>
                </p>
            <Image
            fluid
            src={coverPhoto}
            alt=''
            className='cover-photo'
            />
        </Container>
    )
}

export default Cover;