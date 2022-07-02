import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../../../Rating';
import ILibrary from "../../../../models/ILibrary";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

type Props = {
    library: ILibrary;
};

const LibraryItem = ({ library }: Props) => {
    const {
        id,
        name,
        location,
        rating,
        noOfRatings,
        imageUrl
    } = library;

    return (
        <Card>
            <Card.Img variant="top" src={`${baseUrl}/${imageUrl}`} />
            <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-start">
                    <div style={{ maxWidth: '200px' }}>
                        {name}
                        <div className="text-sm">
                            <Rating value={rating} />
                            {rating}
                            ({noOfRatings})
                        </div>
                    </div>
                    <Link to={`/libraries/${id}`} className="btn btn-primary btn-sm">See more</Link>
                </Card.Title>
                <Card.Text>
                    <div>{location}</div>
                </Card.Text>
                
            </Card.Body>
        </Card>
    );
};

export default LibraryItem;
