import { useCallback } from "react"

export const useDataService = () => {
    const request = useCallback(async () => {
        try {
            const response = await fetch(`https://61fbc6493f1e34001792c5dd.mockapi.io/data/test`)

            if (!response.ok) {
                throw new Error('Ошибка загрузки');
            }
            const data = await response.json();
            console.log(data);

            return data
        } catch(e) {
            throw e
        }
    }, [])

    return request
}