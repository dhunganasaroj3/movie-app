import React, {memo} from "react";
import {ButtonProps} from "@material-ui/core/Button/Button";
import ButtonComponent from "@material-ui/core/Button";

const Button: React.FC<ButtonProps> = ({name, type, onClick, color, variant, disabled}) => (
    <ButtonComponent
        variant={variant}
        onClick={onClick}
        color={color}
        disabled={disabled}
        type={type}
    >
        {name}
    </ButtonComponent>
);

export default memo(Button);
