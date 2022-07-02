import { useEffect, useState } from 'react';
import { Spinner, Alert, Row, Col } from 'react-bootstrap';
import { getLibraries } from '../../../services/libraries';

import LibraryItem from './LibraryItem';

import ILibrary from '../../../models/ILibrary';

const LibrariesList = () => {
    const [ libraries, setLibraries ] = useState<ILibrary[]>( [] );
    const [ loading, setLoading ] = useState( true );
    const [ error, setError ] = useState<Error | null>( null );

    useEffect(
        () => {
            const fetchLibraries = async () => {
                try {
                    const libraries = await getLibraries();
                    setLibraries( libraries );
                } catch( error ) {
                    setError( error as Error );
                } finally {
                    setLoading( false );
                }
            };

            fetchLibraries();
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
                    <Row xs={1} lg={3}>
                        {
                            libraries.map(
                                library => (
                                    <Col key={library.id} className="d-flex align-items-stretch my-3">
                                        <LibraryItem library={library} />
                                    </Col>
                                )
                            )
                        }
                    </Row>
                )
            }
        </div>
    );
}

export default LibrariesList;