import { formatQuantity } from '@/utils/format';
import React from 'react'



type PropertyDetailsProps = {
  details: {
    bedrooms: number;
    baths: number;
    guests: number;
    beds: number;
  };
};



const PropertyDetails = ({details:{baths,bedrooms,beds,guests}}: PropertyDetailsProps) => {

  return (
   <p className='text-md font-light '>
      <span>{formatQuantity(bedrooms, 'bedroom')} &middot; </span>
      <span>{formatQuantity(baths, 'bath')} &middot; </span>
      <span>{formatQuantity(guests, 'guest')} &middot; </span>
      <span>{formatQuantity(beds, 'bed')}</span>
    </p>
  )
}

export default PropertyDetails