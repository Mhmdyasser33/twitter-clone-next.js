
import { create } from "zustand";

interface LoginModelsProps {
    isOpen : boolean ,
    onOpen : () => void
    onClose : () => void ,
}

// create custom hook
const useRegisterModel = create<LoginModelsProps>((set) =>({
    isOpen : false,
    onOpen : () => set({isOpen : true}) ,
    onClose : () => set({isOpen : false})

})) ;
export default useRegisterModel