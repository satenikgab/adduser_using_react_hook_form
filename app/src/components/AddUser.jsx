import { useContext } from "react";
import {useForm} from "react-hook-form";
import { UserContext } from "../context";
import* as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";


export const AddUser = () => {

  const schema = yup.object({
    name: yup
    .string()
    .required("name is required"),
    
    surname: yup
    .string()
    .required("surname is required"),
    
    age: yup
    .number()
    .min(18)
    .positive("must be older then 18")
    .required("age is required"),
    
    login: yup
    .string()
    .required("login must me valid email"),
    
    password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, "Password must contain uppercase letter, lowercase letter, number,special character ")
    
  })

  const {register, handleSubmit, reset,formState:{errors}} = useForm({
    resolver:yupResolver(schema)
  });

  const {addUser} = useContext(UserContext);

  const handleAdd = (data) => {
    addUser(data);
    reset()
  }

  return <>
    <form onSubmit={handleSubmit(handleAdd)}>
    
      <div>
      {errors.name && <p>{errors.name.message}</p>}
        <input type="text" placeholder="name" {...register("name")} />
      </div>
      <div>
      {errors.surname && <p>{errors.surname.message}</p>}
        <input type="text" placeholder="surname" {...register("surname")} />
      </div>
      <div>
      {errors.age && <p>{errors.age.message}</p>}
        <input type="number" placeholder="age" {...register("age")} />
      </div>
      <div>
      {errors.login && <p>{errors.login.message}</p>}
        <input type="text" placeholder="login" {...register("login")} />
      </div>
      <div>
      {errors.password && <p>{errors.password.message}</p>}
        <input type="text" placeholder="password" {...register("password")}/>
      </div>
      <button>Add</button>
      
    </form>
  </>
}