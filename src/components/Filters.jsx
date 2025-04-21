import './Filters.css';

export function Filters () {
    
    return (
        <section className="filters">

        <div>
            <label htmlFor="category">Price</label>
            <input
                type="range"
                id='price'
                min='0'
                max='1000'
            />
        </div>

        <div>
            <label htmlFor="category">Category</label>
            <select id='category'>
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
