//Content just to test position of the product List
export default function ProductFilter({isDarkMode}){
    return(
        <div className={`${isDarkMode? 'text-white': 'text-ACMDARK'}`}>
        <h1>Category 1</h1>
        <h1>Category 2 </h1>
        <h1>Category 3</h1>
        </div>
    )
}