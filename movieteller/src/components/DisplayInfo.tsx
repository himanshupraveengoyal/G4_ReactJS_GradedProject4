import { getMoviesComingFromServer, getMoviesInTheatreFromServer, getTopratedIndiaFromServer, getTopratedMoviesFromServer } from '../server/menu';
import { useState } from 'react'
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import './DisplayInfo.css'
import IDataList from '../model/IDataList'

export default function DisplayDetails() {
    const { id } = useParams()
    var [movies, setMovies] = useState<IDataList[]>([]);
    let movie;
    const fetchDataFromServer = async () => {
        if (id !== undefined && parseInt(id) > 369)
            setMovies(await getTopratedMoviesFromServer())
        if (id !== undefined && parseInt(id) < 369 && parseInt(id) > 120)
            setMovies(await getTopratedIndiaFromServer())
        if (id !== undefined && parseInt(id) > 95 && parseInt(id) < 370)
            setMovies(await getMoviesInTheatreFromServer());
        if (id !== undefined && parseInt(id) < 96)
            setMovies(await getMoviesComingFromServer());
    }

    fetchDataFromServer();
    movie = movies.find((x: any) => x.id === id);

    console.log(movie)
    return (
        <>
            <Card className='card-in-displayInfo'>
                <Card.Img className='card-in-displayInfo-img' variant="top" src={movie?.posterurl} style={{ width: '18rem', height: '20rem', margin: '2px' }} />
                <Card.Body>
                    <Card.Text style={{ fontFamily: "Lucida Console" }}>
                        Title &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :{movie?.title} <br />
                        IMDB Rating &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{movie?.imdbRating}  <br />
                        Content Rating&nbsp;&nbsp;&nbsp;:{movie?.contentRating}  <br />
                        Average Rating&nbsp;&nbsp;&nbsp;:{movie?.averageRating}  <br />
                        Duration&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{movie?.duration}  <br />
                        Genres &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{movie?.genres.map((genre) => (
                            genre + ", "
                        ))}  <br />
                        Actors &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{movie?.actors.map((actor) => (
                            actor + ", "
                        ))}  <br />
                        Story Line &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{movie?.storyline}  <br />
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}