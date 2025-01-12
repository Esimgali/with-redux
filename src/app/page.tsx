'use client';
import Page from "./test/page";
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "./test/modal";

const Home = () => {
  const [users, setUsers] = useState()
  const [filters, setFilters] = useState({
    "male": "all"
  })
  const [date, setDate] = useState({
    "start": "",
    "end": ""
  })
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
        console.log(process.env.REACT_APP_BACKEND_URL);
        
        const res = await axios.get(`http://localhost:5000/users`, { params: filters });
        console.log(res.data);
        setUsers(res.data);
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
  return (
    <div >
      <header>
        <div className="container flex w-full border-collapse border border-gray-300 p-5">
          <div >
            <select className="border-collapse border border-gray-300" value={filters.male} onChange={handleSex}>
              <option value="all">Все</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          {/* <div className="ml-5 p-2 border-collapse border border-gray-300">
            <p>Сортировка по дате</p>
            <div className="p-2">
              <input value={date.start} className="border-collapse border border-gray-300" type="date"></input>
              <input value={date.end} className="border-collapse border border-gray-300" type="date"></input>
            </div>
            <div className="flex justify-end">
            </div>
          </div> */}
          <div className="ml-5 p-2 border-collapse border border-gray-300">
            <p>Сортировка по дате</p>
            <form className="p-2 flex flex-col" onSubmit={handleDate}>
              <div className="py-2">
                <input name="start" value={date.start} onChange={handleInputChange} className="mr-2 border-collapse border border-gray-300" type="date"></input>
                <input name="end" value={date.end} onChange={handleInputChange} className="border-collapse border border-gray-300" type="date"></input>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="p-1 text-sm border-collapse border border-gray-300  hover:bg-gray-100">Применить фильтр</button>
              </div>
            </form>
          </div>
        </div>
      </header>
      <main >
      <Modal isModal={isModal} setModal={setModal} userInfo={userInfo}></Modal>
      <div className="container mx-auto mt-8">
        {users ? <Page chooseClient={chooseClient} onChange={handleSort} users={users}></Page> : <div></div>}        
    </div>
      </main>
      <footer >
        
      </footer>
    </div>
  );
}
export default Home;