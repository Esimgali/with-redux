'use client';
import { useEffect, useState } from "react";
import Modal from "./modal";

const Home = (props)=> {
  const users = props.users
  const [sort, setSort] = useState({
    "column":"lastname",
    "sort" : "byorder"
  })
  const [archiveSort, setArchiveSort] = useState({
    "lastname": "byorder",
    "name" : "byorder",
    "date": "increase"
  })
  const sortHandler = async (event) =>{
    const name = event.currentTarget.name
    const value = event.currentTarget.children[0].getAttribute('values')
    if(name == "lastname"){
      setArchiveSort((prev)=>({
        ...prev,
        lastname: value 
      }))
    }else if(name == "name"){
      setArchiveSort((prev)=>({
        ...prev,
        name: value 
      }))
    }else{
      setArchiveSort((prev)=>({
        ...prev,
        date: value 
      }))
    }
    setSort({
      "column": name,
      "sort" : value
    })
  }

  const handleButton = (event) =>{
    console.log(event.currentTarget.children[0].getAttribute('values'));
  }
  useEffect(() => {
    console.log(sort);
    
    props.onChange(sort);
  }, [sort]);
  const toDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // В JavaScript месяц начинается с 0
    const year = date.getFullYear();
    const formattedDate = `${day}.${month}.${year}`;
    return formattedDate
  }

  const handleRow = (event) => {
    console.log(event.target);
    
  }
 
  return (
    <div >
      <header>
      </header>
      <main >
      <div className="container mx-auto mt-8">
        <button onClick={props.chooseClient}>Show user info</button>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">
              <div className="flex">
                Фамилия
                <button name="lastname" className={sort.column == 'lastname' ? "text-gray-800" : "text-gray-400"} onClick={sortHandler}>
                  {archiveSort.lastname == "byorder" ?
                    <svg values="against" className={`w-6 h-6 dark:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
                    </svg>
                    :
                    <svg values="byorder" className="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7"/>
                    </svg>
                  }
                </button>
              </div>
            </th>
            <th className="border border-gray-300 px-4 py-2">
              <div className="flex">
                Имя
                <button name="name" className={sort.column == 'name' ? "text-gray-800" : "text-gray-400"} onClick={sortHandler}>
                {archiveSort.name == "byorder" ?
                  <svg values="against" className="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
                  </svg>
                  :
                  <svg values="byorder" className="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7"/>
                  </svg>
                }
              </button>
              </div>
            </th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">
              <div className="flex">
                <div className="container">Дата рождения</div>
                <button name="date" className={sort.column == 'date' ? "text-gray-800" : "text-gray-400"} onClick={sortHandler}>
                  {archiveSort.date == "increase" ?
                    <svg values="decrease" className="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
                    </svg>
                    :
                    <svg values="increase" className="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7"/>
                    </svg>
                  }
                </button>
              </div>
            </th>
            <th className="border border-gray-300 px-4 py-2">Пол</th>
            <th className="border border-gray-300 px-4 py-2">Должность</th>
            {/* <th className="border border-gray-300 px-4 py-2">Фото</th>
            <th className="border border-gray-300 px-4 py-2">Примечание</th> */}
          </tr>
        </thead>
        <tbody>
        {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{user.id}</td>
              <td className="border border-gray-300 px-4 py-2">{user.lastName}</td>
              <td className="border border-gray-300 px-4 py-2">{user.firstName}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">{toDate(user.dob)}</td>
              <td className="border border-gray-300 px-4 py-2">{user.gender}</td>
              <td className="border border-gray-300 px-4 py-2">{user.position}</td>
              {/* <td className="border border-gray-300 px-4 py-2">
                <img src={user.photo} alt="Фото" className="w-16 h-16 object-cover" />
              </td>
              <td className="border border-gray-300 px-4 py-2">{user.note}</td> */}
            </tr>))}
        </tbody>
      </table>
    </div>
      </main>
      <footer >
      </footer>
    </div>
  );
}
export default Home;