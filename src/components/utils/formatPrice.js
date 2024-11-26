const formatPrice = price => {
  if (price !== undefined && price !== null) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'đ';
  } else {
    return '0đ'; // Default value or appropriate fallback
  }
};

export default formatPrice;
