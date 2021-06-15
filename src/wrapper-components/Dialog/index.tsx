import React, {FC, memo} from "react";
import DialogComponent from "@material-ui/core/Dialog";
import {DialogTitle} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import {useStyles} from "./style";
import {DialogProp} from "./types";

const Dialog: FC<DialogProp> = ({maxWidth, onClose, open, children}) => {
    const classes = useStyles();
    const handleClose = () => {
        onClose(false);
    };

    return (
        <DialogComponent
            maxWidth={maxWidth}
            onClose={handleClose}
            aria-labelledby="simple-dialog-title"
            open={open}
        >
            <DialogTitle id="simple-dialog-title">
                <div>
                    <Close className={classes.closeIcon} onClick={handleClose} />
                </div>
            </DialogTitle>
            {children}
        </DialogComponent>
    );
};

export default memo(Dialog);
