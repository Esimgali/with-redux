import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface Users {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  dob: string; // Формат: DD.MM.YYYY
  gender: string; // Например: "Мужской", "Женский"
  position: string;
  photo: string; // URL фото
  note: string;
}

// Начальное состояние
interface UsersState {
  users: Users[];
}

const initialUsers = [
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

const initialState: UsersState = {
  users: initialUsers,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      addUser: (state, action: PayloadAction<Users>) => {
        state.users.push(action.payload);
      },
      removeUser: (state, action: PayloadAction<string>) => {
        state.users = state.users.filter(
          (users) => users.id !== action.payload
        );
      },
    },
  });

  export const { addUser, removeUser } = usersSlice.actions;
  export default usersSlice.reducer;