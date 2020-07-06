export type ButtonPropType = {
    buttonStyle?: object,
    disabled?: boolean,
    iconLeft?: any,
    textStyle?: object,
    imgStyle?: object,
    value?: string,
    hasIconLeft?: boolean,
    start?: boolean,
    simpleMode?: boolean,
    special?: boolean,
    onClick?: (e: React.MouseEvent) => void,
    isDanger?: boolean
}
