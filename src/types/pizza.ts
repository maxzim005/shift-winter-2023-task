export interface PizzaState {
    pizzas: any[];
    loading: boolean;
    error: null | string;
}

export enum PizzaActionTypes {
    FETCH_PIZZAS = 'FETCH_PIZZAS',
    FETCH_PIZZAS_SUCCESS = 'FETCH_PIZZAS_SUCCESS',
    FETCH_PIZZAS_ERROR = 'FETCH_PIZZAS_ERROR',
}

interface FetchPizzasAction {
    type: PizzaActionTypes.FETCH_PIZZAS;
}

interface FetchPizzasSuccessAction {
    type: PizzaActionTypes.FETCH_PIZZAS_SUCCESS;
    payload: any[];
}

interface FetchPizzasErrorAction {
    type: PizzaActionTypes.FETCH_PIZZAS_ERROR;
    payload: string;
}

export type PizzaAction = FetchPizzasAction | FetchPizzasSuccessAction | FetchPizzasErrorAction;