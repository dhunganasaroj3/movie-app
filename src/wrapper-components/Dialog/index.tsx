import React, {FC, memo} from "react";
import DialogComponent from "@material-ui/core/Dialog";
import {DialogTitle} from "@material-ui/core";

type maxWidth = "xs" | "sm" | "md" | "lg" | "xl" | false;

interface DialogProp {
    onClose: (arg) => void;
    open: boolean;
    children: JSX.Element | JSX.Element[];
    maxWidth?: maxWidth;
}

const Dialog: FC<DialogProp> = ({maxWidth, onClose, open, children}) => {
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
                    <img
                        onClick={handleClose}
                        src="https://d30y9cdsu7xlg0.cloudfront.net/png/53504-200.png"
                        style={{cursor: "pointer", float: "right", marginTop: "5px", width: "20px"}}
                    />
                </div>
            </DialogTitle>
            {children}
        </DialogComponent>
    );
};

export default memo(Dialog);
