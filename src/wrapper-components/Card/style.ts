import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    root: {
        minWidth: 275,
        // padding: "2em",
        // marginTop: "1em",
        "&:hover": {
            boxShadow: "rgb(0 0 0 / 20%) -2px 6px 20px -2px",
            cursor: "pointer"
        }
    },
    bullet: {
        display: "inline-block",
        // margin: "0 2px",
        transform: "scale(0.8)"
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    }
});
