'use client';
import { useEffect, useState } from "react";

const Home = (props)=> {
  const users = props.users
  const [sort, setSort] = useState({
    "column":"lastname",
    "sort" : "byorder"
  })
  const sortNameHandler = async (event) =>{
    setSort({
      "column":"name",
      "sort" : event.target.value
    })
  }
  const sortLastNameHandler = async (event) =>{
    setSort({
      "column":"lastname",
      "sort" : event.target.value
    })
  }
  useEffect(() => {
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
 
  return (
    <div >
      <header>
      </header>
      <main >
      <div className="container mx-auto mt-8">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">
              Фамилия
              <div>
                  <select value={sort.lastName} onChange={sortLastNameHandler}>
                    <option value="byorder">По алфавиту</option>
                    <option value="against">Против алфавита</option>
                  </select>
                </div>
            </th>
            <th className="border border-gray-300 px-4 py-2">
              <div className="flex">
                Имя
                <div>
                  <select value={sort.name} onChange={sortNameHandler}>
                    <option value="byorder">По алфавиту</option>
                    <option value="against">Против алфавита</option>
                  </select>
                </div>
              </div>
            </th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Дата рождения</th>
            <th className="border border-gray-300 px-4 py-2">Пол</th>
            <th className="border border-gray-300 px-4 py-2">Должность</th>
            <th className="border border-gray-300 px-4 py-2">Фото</th>
            <th className="border border-gray-300 px-4 py-2">Примечание</th>
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
              <td className="border border-gray-300 px-4 py-2">
                <img src={user.photo} alt="Фото" className="w-16 h-16 object-cover" />
              </td>
              <td className="border border-gray-300 px-4 py-2">{user.note}</td>
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