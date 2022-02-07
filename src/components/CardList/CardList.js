import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';



import { fetchData } from '../../actions/actions'
import { useDataService } from '../../useDataService'
import { dataFetched, filteredInputValue, dataFiltered} from '../../actions/actions'

import { DataCard } from "../DataCard/DataCard"
import "./CardList.scss"
import { FilterForm } from '../FilterForm/FilterForm';

export const CardList = () => {
    const data = useSelector(state => state.defaultData.data);
    const filterValue = useSelector(state => state.filteredData.filterValue);
    const selectedProduct = useSelector(state => state.filteredData.selectedProduct)
    const productSpecies = useSelector(state => state.filteredData.productSpecies)
    const dispatch = useDispatch();

    console.log(selectedProduct);
    const filtered = data.filter((item) => item.name.includes(filterValue) && item.bsr_category === selectedProduct )
    console.log(filtered);


    return (
        <div className="cardList__border">
            <FilterForm/>
            <div  className="cardList__wrapper">
                {
                    filtered ? 
                    filtered.map((item) => 
                        <DataCard {...item} key={item.asin}/>
                    ) :
                    data.map((item) => 
                        <DataCard {...item} key={item.asin}/>
                    )
                }
            </div>
        </div>
    )
}