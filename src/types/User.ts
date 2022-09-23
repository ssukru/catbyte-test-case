export type UserContextType = {
  users: UserType[];
  loading: boolean;
  CreateNewUser: (
    firstName: string,
    lastName: string,
    age: string,
    imgUrl: string
  ) => boolean;
  GetUser: (id: number) => UserType | undefined;
  DeleteUser: (id: number) => void;
};

export type UserType = {
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  age: number;
  company: CompanyType;
};

type CompanyType = {
  address: string;
  postal: string;
  state: string;
};
