export type InputSearchPropType = {
    value: string,
    inputStyle?: object,
    inputWrapperStyle?: object,
    placeholder: string,
    hasIconLeft: boolean,
    hasIconRight: boolean,
    leftIconStyle?: object,
    rightIconStyle?: object,
    containerStyle?: object,
    leftIcon?: any,
    rightIcon?: any,
    rightIconClickHandler?: (e: React.MouseEvent) => void,
    leftIconClickHandler?: (e: React.MouseEvent) => void,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
