'use client';
import Page from "./test/page";
import axios from "axios";
import { useEffect, useState } from "react";


// interface Users {
//   id: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   dob: string; // Формат: DD.MM.YYYY
//   gender: string; // Например: "Мужской", "Женский"
//   position: string;
//   photo: string; // URL фото
//   note: string;
// }

// async function getUsers(){
//   let users
//   await axios.post('/api/hello').then((res)=>{
//     users = res.data.message
//     console.log(res.data.message);
//   })
//   return users;
// }

const Home = () => {
  const [users, setUsers] = useState()
  const [sexFil, setSex] = useState("male")
  const handleSex = (event: React.ChangeEvent<HTMLSelectElement>) =>{
    setSex(event.target.value)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post('/api/hello', { params: { male: sexFil } });
        console.log(res.data);
        setUsers(res.data.message);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    };

    fetchData();
  }, [sexFil]);

  return (
    <div >
      <header>
        Esimgali Khamitov
        <div className="container flex w-full border-collapse border border-gray-300 p-5">
          <div className="border-collapse border border-gray-300">
            <select value={sexFil} onChange={handleSex}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
      </header>
      <main >
      <div className="container mx-auto mt-8">
        {users ? <Page users={users}></Page> : <div></div>}        
    </div>
      </main>
      <footer >
        
      </footer>
    </div>
  );
}
export default Home;