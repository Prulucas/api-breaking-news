import logo from "../../images/LogoBN.png";
import {Nav, ImgLogo, InputSpace, Button} from "./navbarStyled.jsx"

export function Navbar(){

    return(
        <>
            <Nav>
                <InputSpace>
                    <i className="bi bi-search"></i>
                    <input type="text" placeholder="Pesquise por um título" />
                </InputSpace>
                <ImgLogo src={logo} alt="Logo Breaking News" />

                <Button>Entrar</Button>
            </Nav>
        </>
    )
}

