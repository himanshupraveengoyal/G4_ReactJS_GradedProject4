import Movie from './Movie'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function main(props: any) {
    const movies = props.movies;
    //console.log(movies)
    return (
        <main>
            <div>
                <div className="row" style={{ margin: '20px' }}>
                    {
                        movies.length !== 0 ?
                            movies.map((oneMovie: any) => (
                                <Movie key={oneMovie.id} movie={oneMovie}
                                    addToFavourates={props.addToFavourates}
                                    removeFromFavourates={props.removeFromFavourates}
                                    selectedMovieCategory={props.selectedMovieCategory} ></Movie>
                            )) : <div>No movies</div>
                    }
                </div>
            </div>
        </main>
    );
};