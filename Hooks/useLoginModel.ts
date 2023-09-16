import { useCallback } from "react";
import { create } from "zustand";

interface LoginModelsProps {
    isOpen : boolean ,
    onClose : () => void ,
    onOpen : () => void
}

// create custom hook
const useLoginModel = create<LoginModelsProps>((set) =>({
    isOpen : true ,
    onClose : () => set({isOpen : true}) ,
    onOpen : () => set({isOpen : false})

}))
export default useLoginModel