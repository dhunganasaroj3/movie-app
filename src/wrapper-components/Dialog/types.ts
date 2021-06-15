type maxWidth = "xs" | "sm" | "md" | "lg" | "xl" | false;

export interface DialogProp {
    onClose: (args) => void;
    open: boolean;
    children: JSX.Element | JSX.Element[];
    maxWidth?: maxWidth;
}
