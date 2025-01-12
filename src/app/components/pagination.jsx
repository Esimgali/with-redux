// import { useSelector, useDispatch } from 'react-redux';

import {useEffect, useState } from "react"

export default function Pagination (props) {
    const [currentPage, setCurrentPage] = useState(props.page)
    const count = props.count
    const splitter = 10
    const changePage = (page) =>{
        if(page !== currentPage){
            setCurrentPage(page)
        }
    }
    useEffect(() => {
        props.onChange(currentPage);
    }, [currentPage]);
    return (
      <div>
        <nav>
            <ul className="inline-flex -space-x-px text-sm">

                <li>
                <button onClick={() => changePage(currentPage - 1)} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</button>
                </li>
                {Array.from({ length: Math. round(count/splitter) }, (_, index) => index + 1).map((page) => (
                    <button key={page} onClick={() => changePage(page)} className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 ${
                            currentPage === page
                                ? "text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                                : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}`}>
                        {page}
                    </button>
                ))}
                <li>
                <button onClick={() => changePage(currentPage + 1)} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button>
                </li>
            </ul>
        </nav>
      </div>
    );
  };
  