//Content just to test position of the product List
import {useState} from 'react'

export default function ProductFilter({page,setPage,isDarkMode}){
    //var [page, setPage] = useState("Category 1");

    return(
        <div>
            <div className={`${isDarkMode? 'text-white': 'text-black'} flex flex-row text-[25px]`}>
            <button className="pr-8 hover:text-yellow-500"
                    onClick={() => setPage( page = "Category 1")}>Category 1</button>
            <button className="hover:text-yellow-500"
                    onClick={() => setPage( page = "Category 2")}>Category 2</button>
            <button className="pl-8 hover:text-yellow-500"
                    onClick={() => setPage( page = "Category 3")}>Category 3</button>
            </div>
            <div>
                {page}
            </div>
        </div>
        
    )
}

