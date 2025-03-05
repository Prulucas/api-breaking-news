import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../images/LogoBN.png";
import {Nav, ImgLogo, InputSpace, Button} from "./navbarStyled.jsx"
import {useForm} from "react-hook-form"

export function Navbar(){
    const {register, handleSubmit, reset} = useForm();
    const navigate = useNavigate();

    function onSearch (data){
        const {title} = data;
        navigate(`/search/${title}`);
        reset();
    }
    return(
        <>
            <Nav>
                <form onSubmit={handleSubmit(onSearch)}>
                    <InputSpace>
                    <button type="submit">
                        <i className="bi bi-search"></i>
                    </button>  
                        <input {...register("title")} type="text" placeholder="Pesquise por um título" />
                    </InputSpace>
                </form>
                <Link to="/">
                    <ImgLogo src={logo} alt="Logo Breaking News" />
                </Link>

                <Button>Entrar</Button>
            </Nav>
            <Outlet/>
        </>
    )
}

