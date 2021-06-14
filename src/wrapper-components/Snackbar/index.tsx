import React, {FunctionComponent, memo, useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import SnackbarComponent from "@material-ui/core/Snackbar";
import MuiAlert, {AlertProps} from "@material-ui/lab/Alert";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {SnackbarProps} from "@material-ui/core/Snackbar/Snackbar";

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: "100%",
        "& > * + *": {
            marginTop: theme.spacing(2)
        }
    }
}));
type Color = "success" | "info" | "warning" | "error";

type message = {
    message: string;
    severity: Color;
    open: boolean;
};

interface Message {
    messageObj: message;
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

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }

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
