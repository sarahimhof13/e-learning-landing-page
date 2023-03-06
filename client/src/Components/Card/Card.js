import { CardContainer, CardImg } from "./Card.styled";

const Card = ({title, description, link, linkName, cardImgSrc}) => {
    return ( 
        <CardContainer>
            <CardImg src={cardImgSrc}/>
            <h4>{title}</h4>
            <p>{description}</p>
            <a href={link}>{linkName}</a>
        </CardContainer>
     );
}
 
export default Card;