import {ButtonSpace} from "./buttonStyled"

export function Button ({type, text }) {
    return <ButtonSpace type={type} > {text} </ButtonSpace>
}