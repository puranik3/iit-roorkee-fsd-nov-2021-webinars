import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

import './index.css';

type Props = {
    value: number
}

const Rating = ( { value } : Props ) => {
    const fullStars = Math.floor( value );
    const halfStars = Math.round( value ) - fullStars;
    const emptyStars = 5 - ( fullStars + halfStars );


    return (
        <span className="rating-stars">
            {
                Array( fullStars ).fill( 1 ).map(
                    ( item, idx ) => <FontAwesomeIcon icon={faStar} key={idx} />
                )
            }
            {
                Array( halfStars ).fill( 1 ).map(
                    ( item, idx ) => <FontAwesomeIcon icon={faStarHalfAlt} key={idx} />
                )
            }
            {
                Array( emptyStars ).fill( 1 ).map(
                    ( item, idx ) => <FontAwesomeIcon icon={faStarEmpty} key={idx} />
                )
            }
        </span>
    );
}

export default Rating;