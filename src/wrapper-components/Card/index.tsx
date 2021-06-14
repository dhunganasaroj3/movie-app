import React, {memo} from "react";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./style";

const Card = ({children}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/*<Typography className={classes.title} color="textSecondary" gutterBottom>*/}
            {children}
            {/*</Typography>*/}
        </div>
    );
};

export default memo(Card);
