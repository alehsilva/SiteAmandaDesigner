 import React, {FC, InputHTMLAttributes } from 'react';

 interface InputProps extends InputHTMLAttributes<HTMLInputElement> {


 }

 const Input: FC<InputProps> = ({name, ...rest}) => {
   return (
       <input {...rest}></input>

   );
 };

export default Input;