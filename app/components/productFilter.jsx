//Content just to test position of the product List
import {useState} from 'react'

export default function ProductFilter({page,setPage,isDarkMode}){
    //var [page, setPage] = useState("Category 1");

    return(
        <div>
            <div className={`${isDarkMode? 'text-white': 'text-black'} flex flex-row text-[25px]`}>
            <button className={`${(page == "All")? 'text-yellow-500' : 'text-white'} pr-16 hover:text-yellow-500`} 
                    onClick={() => setPage( page = "All")}>All</button>
            <button className={`${(page == "Clothes")? 'text-yellow-500' : 'text-white'} pr-16 hover:text-yellow-500`}
                    onClick={() => setPage( page = "Clothes")}>Clothes</button>
            <button className={`${(page == "Pen")? 'text-yellow-500' : 'text-white'} hover:text-yellow-500`}
                    onClick={() => setPage( page = "Pen")}>Pen</button>
            <button className={`${(page == "Technology")? 'text-yellow-500' : 'text-white'} pl-16 hover:text-yellow-500`}
                    onClick={() => setPage( page = "Technology")}>Technology</button>
            </div>
        </div>
        
    )
}

