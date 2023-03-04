import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Movie(props: any) {
    const movie = props.movie;

    const favouratesAction = (selectedMovie: any) => {
        if (props.selectedMovieCategory === 'Favourites') { props.removeFromFavourates(selectedMovie) }
        else { props.addToFavourates(selectedMovie) }
    }

    return (
        <Card style={{ width: '15rem', margin: '2px' }}>
            <Card.Img variant="top" alt={movie.title} src={movie.posterurl} style={{ height: '200px', marginTop: '4px' }} />
            <Card.Body>
                <Card.Title ><a href={"/moreInfo/" + movie.id} style={{ textDecoration: 'none' }}>{movie.title}</a></Card.Title>
                {
                    props.selectedMovieCategory !== 'Favourites' ?
                        <Button onClick={() => favouratesAction(movie)} style={{ padding: '0', border: 'none', background: 'none', color: 'grey', fontSize: '14px' }}>
                            Add to favourates <FontAwesomeIcon icon={faHeart} /></Button> :
                        <Button onClick={() => favouratesAction(movie)} style={{ padding: '0', border: 'none', background: 'none', color: 'grey', fontSize: '14px' }}>
                            Remove from favourates <FontAwesomeIcon icon={faHeartBroken} /></Button>
                }
            </Card.Body>
        </Card>
    )
}