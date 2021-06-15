import React, {memo} from "react";
import {useStyles} from "./style";

const Card = ({children}) => {
    const classes = useStyles();
    return <div className={classes.root}>{children}</div>;
};

export default memo(Card);
