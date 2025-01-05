import "./modalStyle.css"
const Modal = ({isModal, setModal, userInfo}) =>{

    const visible =["MyModal"];
    if(isModal){
      visible.push("MyModal_active");
    }
    const user = {
        id: '5',
        firstName: 'Алексей',
        lastName: 'Кузнецов',
        email: 'alexey.kuznetsov@example.com',
        dob: 696902400000, // 14.02.1992
        gender: 'male',
        position: 'Дизайнер',
        photo: 'https://via.placeholder.com/150',
        note: 'Креативный и талантливый дизайнер',
      }
      return(
          <div className= {visible.join(" ")} onClick={() => setModal(false)}>
            <div className="MyModal_Content" onClick={(e) => e.stopPropagation()}>
                {/* {isModal ? */}
                 <div className="container w-full divide-y divide-stone-950 divide-dashed">
                    <div>
                        <img className="justify-self-center" src={user.photo}></img>
                        <p className="justify-self-center">{user.firstName + " " + user.lastName}</p>
                    </div>
                    <div>
                      <div>
                        {Object.keys(user).map((key, i) => (  
                          <div className="flex justify-between w-full" key={i}>
                            <p className="w-20">{key}</p>
                            <p>{user[key]}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                 </div>
                 {/* : ""} */}
            </div>
          </div>
      );
  }
export default Modal;