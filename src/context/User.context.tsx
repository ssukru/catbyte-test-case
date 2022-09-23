import React, { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import { UserContextType, UserType } from "../types/User";

const UserContext = createContext<UserContextType>({
  CreateNewUser: () => true,
  GetUser: () => undefined,
  DeleteUser: () => {},
  loading: true,
  users: [],
});

const ProvideUser = (): UserContextType => {
  const [users, setUsers] = useState<UserType[]>([
    {
      id: 1,
      firstName: "Terry",
      lastName: "Medhurst",
      age: 50,
      image: "https://robohash.org/hicveldicta.png",
      company: {
        address: "629 Debbie Drive",
        postal: "37076",
        state: "TN",
      },
    },
  ]);
  const [loading, setLoading] = useState<boolean>(true);

  const FetchUsers = async () => {
    setLoading(() => true);
    try {
      const response = await fetch("https://dummyjson.com/users");
      const json = await response.json();

      const tempUsers: UserType[] = [];
      const responseUsers: any[] = json.users;

      responseUsers.forEach((usr) => {
        const company = usr.company;
        tempUsers.push({
          age: usr.age,
          company: {
            address: company.address.address,
            postal: company.address.postal,
            state: company.address.state,
          },
          firstName: usr.firstName,
          id: usr.id,
          image: usr.image,
          lastName: usr.lastName,
        });
      });

      setUsers(() => [...tempUsers]);
      setLoading(() => false);
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "An error occured, please try again");
      setLoading(() => false);
    }
  };

  const CreateNewUser = (
    firstName: string,
    lastName: string,
    age: string,
    imgUrl: string
  ): boolean => {
    const tmpUsers = [...users];
    const parsedAge = parseInt(age);
    tmpUsers.unshift({
      id: Math.floor(Math.random() * 10000),
      firstName: firstName,
      lastName: lastName,
      age: parsedAge,
      image: imgUrl,
      company: {
        address: "629 Debbie Drive",
        postal: "37076",
        state: "TN",
      },
    });
    setUsers(() => [...tmpUsers]);
    return true;
  };

  const GetUser = (id: number): UserType | undefined => {
    return users.find((usr) => usr.id === id);
  };

  const DeleteUser = (id: number) => {
    const newUsers = [...users].filter((usr) => usr.id !== id);
    setUsers(() => [...newUsers]);
  };

  useEffect(() => {
    FetchUsers();
  }, []);

  return {
    users,
    loading,
    CreateNewUser,
    GetUser,
    DeleteUser,
  };
};

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<any> = ({ children }) => {
  const user = ProvideUser();
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
