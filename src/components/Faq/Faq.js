import React from 'react';
import Container from '../Container/Cantainer';
import Hero from '../Hero/Hero';
import {faqContent} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={faqContent.title} image={faqContent.imgAddress}/>
    <p>{faqContent.content}</p>
  </Container>
);

export default Info;