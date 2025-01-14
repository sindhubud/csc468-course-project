import React from "react";

import {ButtonType} from "../../../types";

export interface IProps {
    formSubmit: boolean;
    label: string;
    disabled: boolean;
    type: ButtonType;
    handlePress: (e: React.SyntheticEvent) => void;
}