type Color = "success" | "info" | "warning" | "error";

export type message = {
    message: string;
    severity: Color;
    open: boolean;
};

export interface Message {
    messageObj: message;
}
