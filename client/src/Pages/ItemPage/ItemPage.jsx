import React, { useEffect, useState } from 'react';
import { Rating } from '@mui/material';
import ItemButtons from '../../components/ItemPageComponents/ItemButtons/ItemButtons';
import ItemDescription from '../../components/ItemPageComponents/ItemDescription/ItemDescription';
// import ItemFormats from '../../components/ItemPageComponents/ItemFormats';
import ItemImg from '../../components/ItemPageComponents/ItemImg/ItemImg';
import ItemInfo from '../../components/ItemPageComponents/ItemInfo/ItemInfo';
import ItemPrice from '../../components/ItemPageComponents/ItemPrice/ItemPrice';
import ItemTitle from '../../components/ItemPageComponents/ItemTitle/ItemTitle';
import { getItemProduct } from '../../api/products';
import { StyledContainer, StyledDescription } from './Styles';
import Loader from '../../components/ItemPageComponents/Loader/Loader';
import SectionTitles from '../../components/SectionTitles/SectionTitles';
import { pageTitles } from './pageTitles';

const ItemPage = () => {
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState(2);

  useEffect(() => {
    getItemProduct('41028')
      .then((data) => {
        setBook(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handleRatingChange = (event, newValue) => {
    setValue(newValue);
  };

  const {
    name,
    currentPrice,
    genre,
    shortDescription,
    imageUrls,
    author,
    publisher,
    yearOfPublishing,
    duration,
  } = book;
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <SectionTitles titles={pageTitles} />
      <StyledContainer>
        <ItemImg img={imageUrls} name={name} />
        <StyledDescription>
          <ItemTitle name={name} genre={genre} />
          <ItemPrice price={currentPrice} value={value} />
          <ItemDescription shortDescription={shortDescription} />
          {/* <ItemFormats /> */}
          <ItemInfo
            author={author.name}
            publisher={publisher}
            yearOfPublish={new Date(yearOfPublishing).getFullYear()}
            pages={duration}
            genre={genre}
          />
          <ItemButtons />
          <Rating
            name='simple-controlled'
            value={value}
            onChange={handleRatingChange}
          />
        </StyledDescription>
      </StyledContainer>
    </>
  );
};

export default ItemPage;
