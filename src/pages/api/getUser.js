
export default function handler(req, res) {
    const id = req.query.id
    console.log(id);  
    let users =[
        {
          id: '1',
          firstName: 'Иван',
          lastName: 'Иванов',
          email: 'ivan.ivanov@example.com',
          dob: 480556800000, // 15.03.1985
          gender: 'male',
          position: 'Менеджер',
          photo: 'https://via.placeholder.com/150',
          note: 'Отличный сотрудник',
        },
        {
          id: '2',
          firstName: 'Анна',
          lastName: 'Смирнова',
          email: 'anna.smirnova@example.com',
          dob: 648806400000, // 22.07.1990
          gender: 'female',
          position: 'Аналитик',
          photo: 'https://via.placeholder.com/150',
          note: 'Хорошо работает с данными',
        },
        {
          id: '3',
          firstName: 'Петр',
          lastName: 'Сидоров',
          email: 'petr.sidorov@example.com',
          dob: 315532800000, // 10.01.1980
          gender: 'male',
          position: 'Директор',
          photo: 'https://via.placeholder.com/150',
          note: 'Отличные лидерские качества',
        },
        {
          id: '4',
          firstName: 'Мария',
          lastName: 'Васильева',
          email: 'maria.vasileva@example.com',
          dob: 582681600000, // 05.06.1988
          gender: 'female',
          position: 'Разработчик',
          photo: 'https://via.placeholder.com/150',
          note: 'Инициативная и внимательная к деталям',
        },
        {
          id: '5',
          firstName: 'Алексей',
          lastName: 'Кузнецов',
          email: 'alexey.kuznetsov@example.com',
          dob: 696902400000, // 14.02.1992
          gender: 'male',
          position: 'Дизайнер',
          photo: 'https://via.placeholder.com/150',
          note: 'Креативный и талантливый дизайнер',
        },
        {
          id: '6',
          firstName: 'Елена',
          lastName: 'Попова',
          email: 'elena.popova@example.com',
          dob: 818035200000, // 30.11.1995
          gender: 'female',
          position: 'Маркетолог',
          photo: 'https://via.placeholder.com/150',
          note: 'Эксперт в продвижении брендов',
        },
        {
          id: '7',
          firstName: 'Сергей',
          lastName: 'Михайлов',
          email: 'sergey.mikhailov@example.com',
          dob: 432057600000, // 17.09.1983
          gender: 'male',
          position: 'Инженер',
          photo: 'https://via.placeholder.com/150',
          note: 'Ответственный и пунктуальный',
        },
        {
          id: '8',
          firstName: 'Татьяна',
          lastName: 'Федорова',
          email: 'tatiana.fedorova@example.com',
          dob: 673056000000, // 28.04.1991
          gender: 'female',
          position: 'Менеджер по продажам',
          photo: 'https://via.placeholder.com/150',
          note: 'Успешно работает с клиентами',
        },
        {
          id: '9',
          firstName: 'Дмитрий',
          lastName: 'Сергеев',
          email: 'dmitry.sergeev@example.com',
          dob: 555187200000, // 07.08.1987
          gender: 'male',
          position: 'Программист',
          photo: 'https://via.placeholder.com/150',
          note: 'Специалист в области веб-разработки',
        },
        {
          id: '10',
          firstName: 'Ольга',
          lastName: 'Николаева',
          email: 'olga.nikolaeva@example.com',
          dob: 471859200000, // 13.12.1984
          gender: 'female',
          position: 'Координатор проектов',
          photo: 'https://via.placeholder.com/150',
          note: 'Организованная и ответственная',
        },
    ];
    if(id){
        users = users.filter(user => user.id == id)
    }
    res.status(200).json({ users });
}