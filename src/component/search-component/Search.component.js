import './Search.component.css';

export const Search = ({ placeholder, className, onChangeHandler }) => {

    return (
        <>
            <input type='search' className={className} placeholder={placeholder} onChange={onChangeHandler} />
        </>

    )


}
export default Search;