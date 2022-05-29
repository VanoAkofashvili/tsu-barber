import { map } from 'lodash';
import { useState } from 'react';
import StartRatings from 'react-star-ratings';
import clientAvatar from '../../../static/default_avatar.png';
import { Button } from '../../Atoms';

import { useAuth } from '../../../contexts/Auth.context';
import { createReview } from '../../../services/barbers.service';
import { useLazyQuery } from '../../../hooks/useLazyQuery';

const BarberReviews = ({ barberId, reviews = [], isOrdered, refetch }) => {
  const [rating, setRating] = useState(0);
  const [value, setValue] = useState('');

  const { token } = useAuth();

  const [handleReview] = useLazyQuery(createReview, {
    onCompleted: () => refetch(),
  });

  // function handleReview() {
  //   createReview(barberId, token, value, rating).then(() => refetch());
  // }

  return (
    <div className="bg-slate-300 w-2/3 border-t border-r border-b border-grey-10 rounded-tr-md rounded-br-md overflow-y-auto">
      {map(reviews, function renderEachReview({ client, star, review }, index) {
        return (
          <div
            key={index}
            className="flex items-center p-5 bg-white m-5 rounded-md shadow-md gap-5"
          >
            <img
              src={clientAvatar}
              className="w-8 h-8 rounded-full border border-purple-dark p-1"
            />
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-5">
                <p className="text-sm text-grey-50">{client.email}</p>
                <StartRatings
                  rating={star}
                  numberOfStars={5}
                  starEmptyColor="#cfcece"
                  starRatedColor="#5138ED"
                  starDimension="15px"
                  starSpacing="3px"
                />
              </div>
              <p className="mt-2">{review}</p>
            </div>
          </div>
        );
      })}

      {token && isOrdered && (
        <div className="p-5 m-5">
          <textarea
            placeholder="Say something about this barber"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="p-5 w-full shadow-md max-h-28 rounded-md outline-none"
          />
          <div className="flex justify-between items-center">
            <StartRatings
              rating={rating}
              changeRating={setRating}
              starDimension="20px"
              starSpacing="3px"
              starEmptyColor="#000"
              starRatedColor="#5138ED"
              numberOfStars={5}
              starHoverColor="#5138ed"
              name="rating"
            />
            <Button
              className={'w-20'}
              onClick={() => handleReview(barberId, token, value, rating)}
            >
              Submit
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
export default BarberReviews;
