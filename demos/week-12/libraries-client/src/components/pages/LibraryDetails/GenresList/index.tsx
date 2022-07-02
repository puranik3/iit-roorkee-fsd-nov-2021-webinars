import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner, Alert, Row, Col } from 'react-bootstrap';
import { getGenresForLibrary } from '../../../../services/genres';
import IGenre from '../../../../models/IGenre';

const baseUrl = process.env.REACT_APP_API_BASE_URL;

const GenresList = () => {
    const { id } = useParams<{id: string}>();

    const [ genres, setGenres ] = useState<IGenre[]>( [] );
    const [ loading, setLoading ] = useState( true );
    const [ error, setError ] = useState<Error | null>( null );

    useEffect(
        () => {
            const fetchGenres = async () => {
                try {
                    const genres = await getGenresForLibrary( parseInt( id ));
                    setGenres( genres );
                } catch( error ) {
                    setError( error as Error );
                } finally {
                    setLoading( false );
                }
            };

            fetchGenres();
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
                !loading && !error && (
                    <>
                        <h2 className="mt-4 mb-3">Genres in this library</h2>
                        {
                            genres.map(
                                genre => (
                                    <Row key={genre.id} className="my-2">
                                        <Col xs={12} lg={3}>
                                            <img src={`${baseUrl}/${genre.imageUrl}`} alt={genre.name} className="img-fluid" />
                                        </Col>
                                        <Col xs={12} lg={9}>
                                            {genre.description}
                                        </Col>
                                    </Row>
                                )
                            )
                        }
                    </>
                )
            }
        </div>
    );
}

export default GenresList;