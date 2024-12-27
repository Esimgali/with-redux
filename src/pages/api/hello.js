// src/pages/api/hello.js

export default function handler(req, res) {
  const users =[
    {
      id: '1',
      firstName: 'Иван',
      lastName: 'Иванов',
      email: 'ivan.ivanov@example.com',
      dob: '15.03.1985',
      gender: 'Мужской',
      position: 'Менеджер',
      photo: 'https://via.placeholder.com/150',
      note: 'Отличный сотрудник',
    },
    {
      id: '2',
      firstName: 'Анна',
      lastName: 'Смирнова',
      email: 'anna.smirnova@example.com',
      dob: '22.07.1990',
      gender: 'Женский',
      position: 'Аналитик',
      photo: 'https://via.placeholder.com/150',
      note: 'Хорошо работает с данными',
    },
  ];
    res.status(200).json({ message: users });
  }
  