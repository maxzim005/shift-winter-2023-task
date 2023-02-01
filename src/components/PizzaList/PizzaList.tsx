import React, { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchPizzas } from '../../store/action-creators/pizza';
import { useActions } from '../../hooks/useActions';
import styles from './PizzaList.module.css';

const PizzaList: React.FC = () => { //FC - functional components
    const pizzaList : string = styles.pizza_list;

    const {pizzas, error, loading} = useTypedSelector(state => state.pizza);
    const {fetchPizzas} = useActions();

    useEffect(() => {
        fetchPizzas()
    }, [])

    if (loading) {
        return <h1>Loading in progress...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className={pizzaList}>
             {pizzas.map(pizza => 
                 <div key={pizza.id}>{pizza.name}</div>
                 )}
        </div>
    );
};

export default PizzaList;