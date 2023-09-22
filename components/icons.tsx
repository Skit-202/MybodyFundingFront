import React from "react";
import type { PropsWithChildren } from "react";

import Icon from "react-native-vector-icons/FontAwesome"

type IconsProps = PropsWithChildren<{
    name: string;
}>

const Icons = ({name} : IconsProps) => {
   function Icons( ) {
    switch (name) {
        case "arrowR":
            return <Icon name="arrow-right" size={10}
            color="#000000" />
            break;
        case "arrowL":
            return <Icon name="arrow-left" size={10}
            color="#000000" />
            break;
        default:
            break;
    }
} 
}


export default Icons