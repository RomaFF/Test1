import {useState} from 'react'
import { ProdactCard } from "../ProdactCard/ProdactCard";
import "./ProdactCardList.scss"

export const ProdactCardList = ({products}) => {

    const [inputValue, setInputValue] = useState("")
    console.log(inputValue);

    const filtered = products.filter((item) => item.name.includes(inputValue))
    
    return (
        <div className="prodactCardList__wrapper">
        <form>
            <label>
            Наименование товара
            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
            </label>
        </form>
            {
                inputValue ? 
                filtered.map((item) => 
                    <ProdactCard {...item} key={item.asin}/>
                ) :
                products.map((item) => 
                    <ProdactCard {...item} key={item.asin}/>
                )
            }
        </div>
    )

}