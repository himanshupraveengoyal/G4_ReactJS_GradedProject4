import { useState,useEffect } from 'react';
import NavigationBar from './NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './Main'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getMoviesComingFromServer, getMoviesInTheatreFromServer, getTopratedIndiaFromServer, getTopratedMoviesFromServer, getFavourateMoviesFromServer } from '../server/menu';
import IDataList from '../model/IDataList'

const App = (props: any) => {
    var [movies, setMovies] = useState<IDataList[]>([]);
    var [moviesBackup, setMoviesBackup] = useState<IDataList[]>([]);
    const [favouriteMovies, setFavouriteMovies] = useState<IDataList[]>([]);
    const [selectedMovieCategory, setSelectedMovieCategory] = useState();

    const loadDefaultData = async () => {
        if (movies.length === 0) {
            setMovies(await getMoviesInTheatreFromServer())
            setMoviesBackup(await getMoviesInTheatreFromServer())
            setFavouriteMovies(await getFavourateMoviesFromServer())
        }
    }

    useEffect(() => {
        loadDefaultData();
      }, []); 

    const addToFavourates = (movie: any) => {
        const exists = favouriteMovies.find((x: any) => x.id === movie.id);
        if (!exists) {
            setFavouriteMovies([...favouriteMovies, { ...movie }])
            toast.success("Added to favourate", {
                position: 'top-right',
                autoClose: 3000, // time in milli secondes
                draggable: true
            });
        }
        else {
            toast.error("Already exists in favourate", {
                position: 'top-right',
                autoClose: 3000, // time in milli secondes
                draggable: true
            });
        }
    }

    const removeFromFavourates = (movie: any) => {
        const exists = favouriteMovies.find((x: any) => x.id === movie.id);
        if (exists) {
            let filteredArray = favouriteMovies.filter((x: any) => x.id !== movie.id)
            setFavouriteMovies(filteredArray)
            toast.success("Removed from favourate", {
                position: 'top-right',
                autoClose: 3000, // time in milli secondes
                draggable: true
            });
        }
        navigationBarCategorySelection(selectedMovieCategory)
    }

    const navigationBarCategorySelection = async (movieCategory: any) => {
        setSelectedMovieCategory(movieCategory);
        switch (movieCategory) {
            case 'Movie in Threatres':
                setMovies(await getMoviesInTheatreFromServer())
                setMoviesBackup(await getMoviesInTheatreFromServer())
                break;
            case 'Coming Soon':
                setMovies(await getMoviesComingFromServer())
                setMoviesBackup(await getMoviesComingFromServer())
                break;
            case 'Top Rated Indian':
                setMovies(await getTopratedIndiaFromServer())
                setMoviesBackup(await getTopratedIndiaFromServer())
                break;
            case 'Top Rated Movies':
                setMovies(await getTopratedMoviesFromServer())
                setMoviesBackup(await getTopratedMoviesFromServer())
                break;
            case 'Favourites':
                setMovies(favouriteMovies)
                setMoviesBackup(favouriteMovies)
                break;
            default:
                break;
        }
    }

    const sortDataBasedOnInput = (input: any) => {
        if (input === '' || input === ' ') {
            setMovies(moviesBackup)
        }
        else {
            let filteredArray = [];
            for (let index = 0; index < moviesBackup.length; index++) {
                if (moviesBackup[index].title.toLowerCase().includes(input.toLowerCase()))
                    filteredArray.push(moviesBackup[index])
            }
            //let filteredArray = favouriteMovies.filter((x: any) => x.title.toLowerCase().includes(input.toLowerCase()))
            setMovies(filteredArray)
        }
    }

    return (
        <>
            <NavigationBar navigationBarCategorySelection={navigationBarCategorySelection}
                sortDataBasedOnInput={sortDataBasedOnInput} />
            <Main movies={movies} addToFavourates={addToFavourates}
                removeFromFavourates={removeFromFavourates} selectedMovieCategory={selectedMovieCategory}
                loadMoreData={props.loadMoreData} />
            <ToastContainer />
        </>
    )
}

export default App;