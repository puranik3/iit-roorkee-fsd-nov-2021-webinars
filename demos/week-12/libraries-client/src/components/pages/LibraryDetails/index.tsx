import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { Spinner, Alert, Row, Col } from 'react-bootstrap';

import GenresList from './GenresList';
import Rating from '../../Rating';

import { getLibraryById } from '../../../services/libraries';

import ILibrary from '../../../models/ILibrary';

const baseUrl = process.env.REACT_APP_API_BASE_URL;

const LibraryDetails = () => {
    const { id } = useParams<{id: string}>();

    const [ library, setLibrary ] = useState<ILibrary | null>( null );
    const [ loading, setLoading ] = useState( true );
    const [ error, setError ] = useState<Error | null>( null );

    useEffect(
        () => {
            const fetchLibrary = async () => {
                try {
                    const library = await getLibraryById( parseInt( id ) );
                    setLibrary( library );
                } catch( error ) {
                    setError( error as Error );
                } finally {
                    setLoading( false );
                }
            };

            fetchLibrary();
        },
        [] // this ensures the effect runs ONLY on first page load
    )

    return (
        <div>
            {
                loading && (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )
            }
            {
                !loading && error && (
                    <Alert variant="danger">
                        {error.message}
                    </Alert>
                )
            }
            {
                !loading && !error && library && (
                    <>
                        <Row>
                            <Col xs={12} className="my-2">
                                <h1>{library.name}</h1>
                            </Col>
                            <Col xs={12} lg={4}>
                                <img src={`${baseUrl}/${library.imageUrl}`} className="img-fluid" alt={library.name} />
                            </Col>
                            <Col xs={12} lg={8}>
                                <div className="my-2">{library.description}</div>
                                <Row xs={3} className="my-2">
                                    <Col>
                                        <FontAwesomeIcon icon={faClock} className="me-2" />
                                        {library.opens} - {library.closes} 
                                    </Col>
                                    <Col>
                                        <Rating value={library.rating} />
                                        {library.rating} ({library.noOfRatings})
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <GenresList />
                    </>
                )
            }
        </div>
    );
}

export default LibraryDetails;