import { TextLimit } from "../textLimit/textLimit.jsx";
import { CardBody, CardContainer, CardFooter, CardHeader } from "./cardStyled.jsx";

export function Card(props) {

  console.log(props); // Verifique se title está sendo passado corretamente

return (
<CardContainer>
<CardBody>
<div>
        <CardHeader $top={props.top}>
            <h2>{props.title}</h2>
            <TextLimit text={props.text} limit={150} />
          </CardHeader>
          <CardFooter>
            <section>
              <i className="bi bi-hand-thumbs-up"></i>
              <span>{props.likes?.length}</span>
            </section>

            <section>
              <i className="bi bi-chat"></i>
              <span>{props.comments?.length}</span>
            </section>
          </CardFooter>
</div>

        <img src={props.banner} alt="Imagem" />
      </CardBody>
</CardContainer>
);
}