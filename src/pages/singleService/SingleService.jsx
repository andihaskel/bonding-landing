import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { ServicesData } from '../../components/ServicesData/ServicesData'
import EmptyList from '../../components/common/emptyList/EmptyList'
import { delay, motion } from 'framer-motion'
import Container from 'react-bootstrap/Container';

const SingleService = () => {

  const { id } = useParams();
  const [singleService, setSingleService] = useState(null);

  useEffect(() => {
    let singleService = ServicesData.find((singleService) => singleService.id === parseInt(id));
    if (singleService) {
      setSingleService(singleService);
    }
  }, []);

  return (
    <div className='single_service'>
      <Container>
        <Link className='blog-goBack' to='/'>
          <span> &#8592;</span> <span>Go Back</span>
        </Link>
        {singleService ? (
          <div className='blog-wrap'>
            <header>
              <p className='blog-date'>Published {singleService.createdAt}</p>
              <h1>{singleService.title}</h1>
            </header>
            <img src={singleService.cover} alt='cover' />
            <p className='blog-desc'>{singleService.description}</p>
          </div>
        ) : (
          <EmptyList />
        )}
      </Container>
    </div>
  )
}

export default SingleService