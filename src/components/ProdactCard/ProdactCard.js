import './ProdactCard.scss'

export const ProdactCard = ({img ,asin, price, bsr_category, link, name}) => {
    return (
        <div className="proCard__wrapper">
            <img className="proCard__img" src={img} alt="Logo" />
            <div>{price}</div>
            <div>{asin}</div>
            <div><a href={link}>{bsr_category}</a></div>
            <div>{name}</div>
        </div>
    )

}