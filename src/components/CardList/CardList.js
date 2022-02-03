import { Card } from "../Card/Card"
import "./CardList.scss"

export const CardList = ({data}) => {

    console.log(data);
    const listItems = data.map((item) =>
        <Card {...item} key={item.id}/>
    );
    
    return (
        <div className="cardList__wrapper">
            {listItems}
        </div>
    )

}