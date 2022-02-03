import { ProdactCardList } from '../ProdactCardList/ProdactCardList';

import './Card.scss'

export const Card = ({createdAt, name, avatar, products, id}) => {

    return (
        <div className="card__wrapper">
            <div className="card__header">
                <img className="card__img" src={avatar} alt="Logo" />
                <div>{name}</div>
            </div>
            
            <ProdactCardList products={products}/>
        </div>
    )

}