import React, {SetStateAction, useEffect, useState} from "react";
import {get} from "../../utils/apiHelper";
import Card from "../../wrapper-components/Card";
import {CardMedia, CircularProgress, Grid} from "@material-ui/core";
import {useStyles} from "./style";
import Typography from "@material-ui/core/Typography";
import Button from "src/wrapper-components/Button";
import {decryptEncryption, encryptAndSave} from "../../utils/useLocalStorage";
import Snackbar from "../../wrapper-components/Snackbar";
import {Message, Selected, MovieDetail, Movie, MovieDetailData} from "components/Home/types";
import getMoviesList from "../../utils/mokeData";
import Dialog from "../../wrapper-components/Dialog";

const Home: React.FC = () => {
    const classes = useStyles();
    const [moviesList, setMoviesList] = useState<Movie>([]);
    const [favouriteList, setFavouriteList] = useState<string[]>([]);
    const [selected, setSelected] = useState<Selected>();
    const [message, setMessage] = useState<Message>();
    const [isModal, setIsModal] = useState<boolean>(false);
    const [selectedDirector, setSelectedDirector] = useState<MovieDetail>(MovieDetailData);
    const getMovies: () => void = async () => {
        // const response = await get("movies/list");
        // if (response?.status === 200 && !!Object.keys(response?.data).length) {
        //     const {
        //         data: {movies}
        //     } = response;
        //     setMoviesList(movies);
        // }
        const response: Movie = await getMoviesList();
        setMoviesList(response);
        console.log({response});
    };

    useEffect(() => {
        getMovies();
        const fav: {id: string; title: string}[] = decryptEncryption("favourite");
        console.log({fav}, "<<<<<FAV MOUNT");
        if (fav?.length) {
            const mapped: string[] = fav.map((o) => o?.id);
            setFavouriteList(mapped);
        }
    }, []);

    const handleGridClick = (selectedObj: Selected): void => {
        const reset: Selected = {
            id: "",
            title: ""
        };
        selected?.id === selectedObj?.id ? setSelected(reset) : setSelected(selectedObj);
    };

    const handleFavourite = ({id, title}: Selected): void => {
        const localData = decryptEncryption("favourite");
        let arr: {id: string; title: string}[] = localData ? [...localData] : [];
        if (arr.map((o) => o?.id)?.includes(id)) {
            setMessage({message: "Removed from favourite.", severity: "warning", open: true, id});
            arr = arr.filter((o) => o?.id !== id);
        } else {
            setMessage({
                message: "Added to favourite successfully.",
                severity: "success",
                open: true,
                id
            });
            arr.push({id, title});
        }
        const data: string[] = arr.map((o) => o?.id);
        setFavouriteList(data);
        console.log({arr}, "<<<<<<<<<<<<<ARR");
        encryptAndSave("favourite", arr);
    };

    const getFavourite: (arg1) => string = (each) =>
        favouriteList?.includes(each?.id) ? "REMOVE FROM FAVOURITE" : "ADD TO FAVOURITE";

    const handleClickDirector = (value: MovieDetail) => {
        console.log({value}, "<<<<<<<<<<");
        setSelectedDirector(value);
        setIsModal(true);
    };
    return (
        <>
            {/*<AppBar />*/}
            <Dialog open={isModal} onClose={setIsModal}>
                <img src={selectedDirector?.director_image} />
                <p>{selectedDirector?.director_description}</p>
            </Dialog>
            <Snackbar messageObj={message} />
            {moviesList?.map((each: MovieDetail) => (
                <Card key={JSON.stringify(each)}>
                    <Grid container spacing={2} onClick={() => handleGridClick(each)}>
                        <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
                            <CardMedia
                                className={classes.cover}
                                image={each?.poster}
                                title="Live from space album cover"
                            />
                        </Grid>
                        <Grid item xl={9} lg={9} md={9} sm={12} xs={12}>
                            <h1>{each?.title}</h1>
                            <Typography color="textSecondary">{each?.genre}</Typography>
                            <Typography onClick={() => handleClickDirector(each)}>
                                {each?.director}
                            </Typography>
                            {selected?.id === each?.id && (
                                <>
                                    <p>{each?.movie_description?.substr(0, 2000)}...</p>
                                    <Button
                                        variant="contained"
                                        onClick={() => handleFavourite(each)}
                                        color="primary"
                                        name={getFavourite(each)}
                                    />
                                </>
                            )}
                        </Grid>
                    </Grid>
                </Card>
            ))}
            {!moviesList.length && <CircularProgress size="3em" color="secondary" />}
        </>
    );
};
export default Home;
