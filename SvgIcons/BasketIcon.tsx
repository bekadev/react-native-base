import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
export const BasketIcon = (props: SvgProps & {colorFill?: string}) => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        {...props}
    >
        <Path
            d="M7 22C6.45 22 5.97933 21.8043 5.588 21.413C5.196 21.021 5 20.55 5 20C5 19.45 5.196 18.979 5.588 18.587C5.97933 18.1957 6.45 18 7 18C7.55 18 8.02067 18.1957 8.412 18.587C8.804 18.979 9 19.45 9 20C9 20.55 8.804 21.021 8.412 21.413C8.02067 21.8043 7.55 22 7 22ZM17 22C16.45 22 15.9793 21.8043 15.588 21.413C15.196 21.021 15 20.55 15 20C15 19.45 15.196 18.979 15.588 18.587C15.9793 18.1957 16.45 18 17 18C17.55 18 18.021 18.1957 18.413 18.587C18.8043 18.979 19 19.45 19 20C19 20.55 18.8043 21.021 18.413 21.413C18.021 21.8043 17.55 22 17 22ZM6.15 6L8.55 11H15.55L18.3 6H6.15ZM5.2 4H19.95C20.3333 4 20.625 4.17067 20.825 4.512C21.025 4.854 21.0333 5.2 20.85 5.55L17.3 11.95C17.1167 12.2833 16.8707 12.5417 16.562 12.725C16.254 12.9083 15.9167 13 15.55 13H8.1L7 15H19V17H7C6.25 17 5.68333 16.6707 5.3 16.012C4.91667 15.354 4.9 14.7 5.25 14.05L6.6 11.6L3 4H1V2H4.25L5.2 4Z"
            fill={props.colorFill ? props.colorFill : 'black'}
        />
    </Svg>
);
