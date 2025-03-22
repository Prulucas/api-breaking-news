import { Input } from "../../components/input/input";
import { AuthContainer, Section } from "./authenticationStyled";
import {Button} from "../../components/button/button.jsx";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { signinSchema } from "../../schemas/signinSchema.js";

import {ErrorSpan} from "../../components/navbar/navbarStyled.jsx"
import { signupSchema } from "../../schemas/signupSchema.js";
import { signup } from "../../services/usersService.js";


export function Authentication() {

    const {register: registerSignup, handleSubmit: handleSubmitSignup, formState: {errors: errorsSignup}} = useForm({resolver: zodResolver(signupSchema)});

    const {register: registerSignin, handleSubmit: handleSubmitSignin, formState: {errors: errorsSignin}} = useForm({resolver: zodResolver(signinSchema)});

    function inHandleSubmit(data){
        console.log(data)
    }

    async function upHandleSubmit(data){
        try {
            const response = await signup(data);
            console.log(response)
        } catch (error){
            console.log(error)
        }
 
    }

    return (
        <AuthContainer>
            <Section type="signin">
                <h2>Entrar</h2>
                <form onSubmit={handleSubmitSignin(inHandleSubmit)}>
                    <Input type="email" placeholder="Email" name="email" register={registerSignin} />
                    {errorsSignin.email && <ErrorSpan>{errorsSignin.email.message} </ErrorSpan>}
                    <Input type="password" placeholder="Senha" name="password" register={registerSignin} />
                    {errorsSignin.password && <ErrorSpan>{errorsSignin.password.message}</ErrorSpan> }
                    <Button type="submit" text="Entrar" />
                </form>
            </Section>


            
            <Section type="signup">
                <h2>Cadastrar</h2>
                <form onSubmit={handleSubmitSignup(upHandleSubmit)}>
                    <Input type="text" placeholder="Nome" name="name" register={registerSignup} />
                    {errorsSignup.name && <ErrorSpan>{errorsSignup.name.message} </ErrorSpan>}
                    <Input type="email" placeholder="Email" name="email" register={registerSignup} />
                    {errorsSignup.email && <ErrorSpan>{errorsSignup.email.message} </ErrorSpan>}
                    <Input type="password" placeholder="Senha" name="password" register={registerSignup} />
                    {errorsSignup.password && <ErrorSpan>{errorsSignup.password.message} </ErrorSpan>}
                    <Input type="password" placeholder="Confirmar senha" name="confirmPassword" register={registerSignup} />
                    {errorsSignup.confirmPassword && <ErrorSpan>{errorsSignup.confirmPassword.message} </ErrorSpan>}
                    <Button type="submit" text="Cadastrar" />
                </form>
            </Section>
        </AuthContainer>
    )
}