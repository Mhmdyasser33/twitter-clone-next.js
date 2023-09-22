
  import { useCallback, useState , useEffect } from "react";
  import Input from "@/components/Input";
  import Model from "@/components/Model";
  import useRegisterModel from "@/Hooks/useRegisterModel";
  import useLoginModel from "@/Hooks/useLoginModel";
  import axios from "axios";
  import { toast} from 'react-hot-toast'
  import { signIn } from "next-auth/react";

  const RegisterModel = () => {

    const loginModels  = useLoginModel() ;
    const registerModels = useRegisterModel() ;
    const [email, setEmail] = useState('');
    const [name , setName] = useState('') ;
    const [username , setUserName] = useState('') ;
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // ! after click register make an input with empty...

    useEffect(() =>{
     if(isLoading) return ;
      setEmail('') ;
      setName('') ;
      setUserName('') ;
      setPassword('') ;
    } , [isLoading])

    const handleToggle = useCallback(() =>{
          if(isLoading) {
            return ;
          }
          registerModels.onClose() ;
          loginModels.onOpen() ;
    } , [isLoading , registerModels , loginModels]) ;

    const onSubmit = useCallback(async () => {
      try {
        setIsLoading(true);
        await axios.post("/api/register" , {
          email ,
        password ,
        username ,
        name ,
        })
        setName('') ;
      setEmail('') ;
      setPassword('') ;
      setUserName('') ;
      toast.success("account Created") ;
      signIn('credentials' , {
        email ,
        password
      })
      registerModels.onClose();
      } catch (error) {
    toast.error("Something went wrong") ;
      } finally {
        setIsLoading(false);
      }
    }, [registerModels , email , password , username ,name]);

    const bodyContent = (
      <div className="flex flex-col gap-4">
        <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
        <Input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}
      />
        <Input
          placeholder="UserName"
          onChange={(e) => setUserName(e.target.value)}
          value={username}
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
      <p> Already have an account ?
        <span onClick={handleToggle} className=" text-white cursor-pointer hover:underline"> Sign in </span>
      </p>
      </div>
    )
    return (
      <Model
        disabled={isLoading}
        isOpen={registerModels.isOpen}
        title="Create an account"
        actionLabel="Register"
        onClose={registerModels.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        footer={footerContent}
      />

    );
  }

  export default RegisterModel;