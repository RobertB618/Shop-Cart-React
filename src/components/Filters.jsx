
import './Filters.css';
import { useId } from 'react';
import { useFilters } from '../hooks/useFilters';

export function Filters () {
    const { filters,setFilters } = useFilters();
    
    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const handleChangeMinPrice = (event) => {
       
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value,
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value,
        }))
    }
    
    return (
        <section className="filters">

        <div>
            <label htmlFor= {minPriceFilterId} >Price from:</label>
            <input
                type="range"
                id={minPriceFilterId}
                min='0'
                max='1000'
                onChange={handleChangeMinPrice}
                value={filters.minPrice}
            />
            <span>${filters.minPrice}</span>
        </div>

        <div>
            <label htmlFor={categoryFilterId}>Category:</label>
            <select id={categoryFilterId} onChange={handleChangeCategory}>
                <option valua="all">All</option>
                <option value="smartphones">Smartphones</option>
                <option value="laptops">Laptops</option>
                <option value="tablets">Tablets</option>
                <option></option>
            </select>
        </div>
        </section>
    ) 
}
