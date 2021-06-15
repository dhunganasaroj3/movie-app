import React, {FunctionComponent, memo, useEffect, useState} from "react";
import SnackbarComponent from "@material-ui/core/Snackbar";
import MuiAlert, {AlertProps} from "@material-ui/lab/Alert";
import {useStyles} from "../Card/style";
import {Message, message} from "./types";

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Snackbar: FunctionComponent<Message> = ({messageObj}) => {
    const classes = useStyles();
    const [isOpen, setIsOpen] = React.useState(true);
    const [message, setMessage] = useState<message>();

    useEffect(() => {
        setMessage(messageObj);
        setIsOpen(true);
        return () => {
            setMessage({
                message: "",
                severity: "success",
                open: false
            });
        };
    }, [messageObj]);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className={classes.root}>
            {message?.message && (
                <SnackbarComponent open={isOpen} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={message?.severity}>
                        {message?.message}
                    </Alert>
                </SnackbarComponent>
            )}
        </div>
    );
};

export default memo(Snackbar);
