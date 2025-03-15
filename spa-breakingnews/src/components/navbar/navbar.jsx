import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../images/LogoBN.png";
import {Nav, ImgLogo, InputSpace, ErrorSpan} from "./navbarStyled.jsx"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {Button} from "../button/button.jsx"
import { searchSchema } from "../../schemas/searchSchema.js";



export function Navbar(){
    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        resolver: zodResolver(searchSchema)
    });
    const navigate = useNavigate();

    function onSearch (data){
        const {title} = data;
        navigate(`/search/${title}`);
        reset();
    }

    function goAuth(){
        navigate("/auth")
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
                <Link to="/auth">
                    <Button onClick={goAuth} type="button" text="Entrar" />
                </Link>
                
            </Nav>
            {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
            <Outlet/>
        </>
    )
}

