import { PizzaAction, PizzaActionTypes,PizzaState } from "../../types/pizza"

const initialState: PizzaState = {
    pizzas: [],
    loading: false,
    error: null,
}

export const pizzaReducer = (state = initialState, action: PizzaAction): PizzaState => {
    switch(action.type) {
        case PizzaActionTypes.FETCH_PIZZAS:
            return {loading: true, error: null, pizzas: []}
        case PizzaActionTypes.FETCH_PIZZAS_SUCCESS:
            return {loading: false, error: null, pizzas: action.payload}
        case PizzaActionTypes.FETCH_PIZZAS_ERROR:
            return {loading: false, error: action.payload, pizzas: []}
        default:
            return state;
    }
}