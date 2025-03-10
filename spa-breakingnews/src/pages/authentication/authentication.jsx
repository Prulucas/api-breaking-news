import { Input } from "../../components/input/input";
import { AuthContainer, Section } from "./authenticationStyled";
import {Button} from "../../components/button/button.jsx"


export function Authentication() {
    return (
        <AuthContainer>
            <Section type="signin">
                <h2>Entrar</h2>
                <form>
                    <Input type="email" placeholder="Email" name="email" />
                    <Input type="password" placeholder="Senha" name="password" />
                    <Button type="submit" text="Entrar" />
                </form>
            </Section>

            <Section type="signup">
                <h2>Cadastrar</h2>
                <form>
                    <Input type="text" placeholder="Nome" name="name" />
                    <Input type="email" placeholder="Email" name="email" />
                    <Input type="password" placeholder="Senha" name="password" />
                    <Input type="password" placeholder="Confirmar senha" name="password" />
                    <Button type="submit" text="Cadastrar" />
                </form>
            </Section>
        </AuthContainer>
    )
}