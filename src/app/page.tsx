'use client';
import Page from "./test/page";
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "./test/modal";
import Pagination from "./components/pagination"

const Home = () => {
  const [users, setUsers] = useState()
  const [page, setPage] = useState(1)
  const [count, setCount] = useState(1)
  const [filters, setFilters] = useState({
    "male": "all",
    "splitter": 10,
    "page": page
  })
  const [date, setDate] = useState({
    "start": "",
    "end": ""
  })
  const [isFilled, setIsFilled] = useState(false)
  const [userInfo, setUserInfo] = useState({})
  const [isModal, setModal] = useState(false)

  const handleSex = (event: React.ChangeEvent<HTMLSelectElement>) =>{
    setFilters((prevFilters) => ({
      ...prevFilters,
      "male" : event.target.value,
    }))
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/users`, { params: filters });
        console.log(res.data);
        setUsers(res.data.users);
        setCount(res.data.count);
        setPage(res.data.page);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    };

    fetchData();
  }, [filters]);
  const handleSort = (sort: {column: string, sort: string}) =>{
    if (sort.column && sort.sort) {
      setFilters((prevFilters) => ({
      ...prevFilters,
      "column" : sort.column,
      "sort" : sort.sort
      }))
    }
   }
  
  const handleDate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const start = date.start !== "" ? Math.floor(new Date(date.start).getTime()) : ""
    const end = date.end !== "" ? Math.floor(new Date(date.end).getTime()) : ""
    if(start > end){
      setDate({
        "start" : date.end,
        "end" : date.start
      })
      setFilters((prevFilters) => ({
        ...prevFilters,
        "date" : [end, start],
      }))
    }else{
      setFilters((prevFilters) => ({
        ...prevFilters,
        "date" : [start, end],
      }))
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDate((prevDate) => ({
      ...prevDate,
      [name]: value,
    }));
  };

  const chooseClient = (id : number) =>{
    axios.get(`http://localhost:5000/users/${id}`).then((res)=>{
      setUserInfo(res.data[0])
      setModal(true)
    })
  }
  const changePage = (page: number) =>{
    setFilters((prevFilters) => ({
      ...prevFilters,
      "page": page,
    }))
  }

  const cleanDateInput = () => {
    setDate({"start": "","end": ""})
    setIsFilled(false)
  }

  useEffect(()=>{
    setIsFilled(date.start !== "" || date.end !== "")
  }, [date])
  return (
    <div >
      <header>
        <div className="container flex align-center justify-center w-full p-5">
          <div >
            <select className="border-collapse border border-gray-300" value={filters.male} onChange={handleSex}>
              <option value="all">Все</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="ml-5">
            <form className=" flex flex-col" onSubmit={handleDate}>
              <div className="pb-2">
                <input name="start" value={date.start} onChange={handleInputChange} className={"mr-2 border-collapse border border-gray-300 rounded-md " +  (date.start !== "" ? "text-dark":"text-gray-500")} type="date"></input>
                <input name="end" value={date.end} onChange={handleInputChange} className={"border-collapse border border-gray-30 rounded-md " +  (date.end !== "" ? "text-dark":"text-gray-500")} type="date"></input>
              </div>
              <div className={isFilled ? "flex justify-between": "flex justify-end"}>
                <button type="button" onClick={cleanDateInput} className={isFilled ? "p-1 text-sm border-collapse border border-red-300 bg-red-200 hover:bg-red-100": "hidden"}>Очистить</button>
                <button type="submit" className="p-1 text-sm border-collapse border border-green-300 bg-green-200  hover:bg-green-100">Применить фильтр</button>
              </div>
            </form>
          </div>
        </div>
      </header>
      {users ?
        <div>
          <main >
            <Modal isModal={isModal} setModal={setModal} userInfo={userInfo}></Modal>
            <div className="container mx-auto mt-8">
              <Page chooseClient={chooseClient} onChange={handleSort} users={users}></Page>        
            </div>
          </main>
          <footer className="my-5 flex justify-center">
            <Pagination onChange={changePage} page={page} count={count}></Pagination>
          </footer>
        </div>
         :<div className="flex justify-center">Loading...</div>}
      
    </div>
  );
}
export default Home;