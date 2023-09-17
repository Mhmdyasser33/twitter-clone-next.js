
  import { useCallback, useState } from "react";
  import Input from "@/components/Input";
  import Model from "@/components/Model";
  import RegisterModel from './RegisterModel'
  import useRegisterModel from "@/Hooks/useRegisterModel";
import useLoginModel from "@/Hooks/useLoginModel";
import axios from "axios";


  const LoginModel = () => {
    const loginModels = useLoginModel();
    const registerModel = useRegisterModel() ;
    // console.log('isOpen:', loginModels.isOpen);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const handleToggle = useCallback(() =>{
      // function that will be memoized
      if(isLoading) return ;
      loginModels.onClose() ;
      registerModel.onOpen() ;

    } , [isLoading , loginModels,registerModel]) ;
    const onSubmit = useCallback(async () => {
      try {
        setIsLoading(true);
        loginModels.onClose();
      } catch (error) {
    console.log(error)
      } finally {
        setIsLoading(false);
      }
    }, [loginModels]);

    const bodyContent = (
      <div className="flex flex-col gap-4">
        <Input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          disabled={isLoading}
        />
        <Input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          disabled={isLoading}
        />
      </div>
    )

    const footerContent = (
      <div className="text-neutral-400 text-center mt-4">
      <p> First time using Twitter ?
        <span onClick={handleToggle} className="text-white cursor-pointer"> Create an account </span>
      </p>
      </div>
    )
    return (
      <Model
        disabled={isLoading}
        isOpen={loginModels.isOpen}
        title="Login"
        actionLabel="Sign in"
        onClose={loginModels.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        footer={footerContent}
      />

    );
  }

  export default LoginModel;