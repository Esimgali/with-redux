import "./modalStyle.css"
const Modal = ({isModal, setModal, userInfo}) =>{

    const visible =["MyModal"];
    if(isModal){
      visible.push("MyModal_active");
    }
    const renameKeys = {
      id: "ID",
      firstName: 'Имя',
      lastName: 'Фамилия',
      email: 'Почта',
      dob: "Дата рождения", // 28.04.1991
      gender: 'Пол',
      position: 'Роль',
      photo: 'Фото',
      note: 'Детали',
    }
    const user = userInfo
    const toDate = (timestamp) => {
      const date = new Date(timestamp);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // В JavaScript месяц начинается с 0
      const year = date.getFullYear();
      const formattedDate = `${day}.${month}.${year}`;
      return formattedDate
    }
      return(
          <div className= {visible.join(" ")} onClick={() => setModal(false)}>
            <div className="MyModal_Content" onClick={(e) => e.stopPropagation()}>
              <div className="absolute right-6 top-6" onClick={() => setModal(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </div>
                {isModal ?
                 <div className="container w-full gap-3 divide-y divide-stone-950 divide-dashed">
                    <div className="mb-3">
                        <img className="justify-self-center" src={user.photo}></img>
                        <p className="justify-self-center">{user.firstName + " " + user.lastName}</p>
                    </div>
                    <div>
                      <div className="mt-3">
                        {Object.keys(user).map((key, i) => (  
                          <div className="flex justify-between w-full h-7" key={i}>
                            <p className="w-32">{renameKeys[key]}</p>
                            <p>{key !== "dob" ? user[key] : toDate(user[key])}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                 </div>
                : ""}
            </div>
          </div>
      );
  }
export default Modal;