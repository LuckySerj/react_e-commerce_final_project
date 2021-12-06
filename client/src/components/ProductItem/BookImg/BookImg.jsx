import React from 'react';
import PropTypes from 'prop-types';
import BookSaleTag from '../BookSaleTag';
import BookFormatTag from '../BookFormatTag';
import FavouriteBtn from '../FavouriteBtn';
import LightToolTip from '../Tooltip';
import {
  StyledCardMediaWrapper,
  StyledCardMediaBox,
  StyledCardMedia,
} from './Styles';

const ProductImg = ({ url, name, categories, itemNo, salePrice }) => {
  return (
    <LightToolTip title={name} placement='top'>
      <StyledCardMediaWrapper>
        <StyledCardMediaBox>
          <StyledCardMedia height='243' src={url} alt={name} />
        </StyledCardMediaBox>
        <BookSaleTag salePrice={salePrice} />
        <FavouriteBtn itemNo={itemNo} />
        <BookFormatTag categories={categories} />
      </StyledCardMediaWrapper>
    </LightToolTip>
  );
};

ProductImg.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  categories: PropTypes.string.isRequired,
  itemNo: PropTypes.string.isRequired,
  salePrice: PropTypes.string,
};

ProductImg.defaultProps = {
  salePrice: null,
};

export default ProductImg;
