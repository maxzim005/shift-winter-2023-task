import { Dispatch } from "redux"
import { PizzaAction, PizzaActionTypes } from "../../types/pizza"
import axios from 'axios';


export const fetchPizzas = () => {
    return async (dispatch: Dispatch<PizzaAction>) => {
         try {
            dispatch({type: PizzaActionTypes.FETCH_PIZZAS})
            const response = await axios.get('https://shift-winter-2023-backend.onrender.com/api/pizza')
            setTimeout(() => {
                dispatch({type: PizzaActionTypes.FETCH_PIZZAS_SUCCESS, payload: response.data})
            }, 500)
         } catch (error) {
            dispatch({
                type: PizzaActionTypes.FETCH_PIZZAS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
         }
    }
}