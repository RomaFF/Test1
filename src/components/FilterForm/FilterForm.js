import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

import { useDispatch, useSelector } from 'react-redux';
import { filteredInputValue, changeProducts} from '../../actions/actions'
import { useEffect } from "react";

export const FilterForm = () => {
    const data = useSelector(state => state.defaultData.data);
    const filterValue = useSelector(state => state.filteredData.filterValue);
    const speciesList = useSelector(state => state.filteredData.speciesList)
    const selectedProduct = useSelector(state => state.filteredData.selectedProduct)
    const dispatch = useDispatch();

    const selectValues = speciesList.map((item) => {
        return <option value={item} key={item}>{item}</option>
    })

    return (
        <>
            <Formik
                initialValues = {{
                    filterInput: filterValue,
                    species: selectedProduct
                }}
                validationSchema = {Yup.object({
                    filterInput: Yup.string()
                        .min(2, 'Минимум 2 символа для заполнения')
                        .required('Обязательное поле!')
                })}
                
                >
                <Form className='form' onChange={(e) => {
                    dispatch(filteredInputValue(e.target.value))
                }}>
                    <label htmlFor="filterInput">Наименование товара</label>
                    <Field
                        id="filterInput"
                        name="filterInput"
                    />
                    <ErrorMessage component="div" className="error" name="filterInput"/>

                     <Field name="species" as="select" onChange={(e) => {
                         dispatch(changeProducts(e.target.value))
                     }}>
                         {selectValues}
                    </Field>
                </Form>
            </Formik>
        </>
    )
}