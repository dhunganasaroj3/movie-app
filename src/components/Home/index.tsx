import React, {useEffect} from "react";
import {get} from "../../utils/apiHelper";
import * as stream from "stream";
import AppBar from "../../wrapper-components/AppBar";

const Home: React.FC = () => {
    const getMovies = async () => {
        const movies = await get("movies/list");
        console.log({movies});
    };
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <>
            <AppBar />
            <h1>Hello World</h1>

            <hr />

            <h3>Environmental variables:</h3>
            <p>
                process.env.PRODUCTION: <b>{process.env.PRODUCTION.toString()}</b>
            </p>
            <p>
                process.env.NAME: <b>{process.env.NAME}</b>
            </p>
            <p>
                process.env.VERSION: <b>{process.env.VERSION}</b>
            </p>
        </>
    );
};
export default Home;
