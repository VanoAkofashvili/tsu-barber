import { map } from 'lodash';
import StartRatings from 'react-star-ratings';
import clientAvatar from '../../../static/default_avatar.png';

const BarberReviews = ({ reviews = [] }) => {
  return (
    <div className="bg-slate-300 w-2/3 border-t border-r border-b border-grey-10 rounded-tr-md rounded-br-md">
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
                  numberOfStars={6}
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
    </div>
  );
};
export default BarberReviews;
