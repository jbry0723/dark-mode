import {useLocalStorage} from "./useLocalStorage"

 const useDarkMode=()=>{
    const [someValue,setSomeValue]=useLocalStorage("on")
    return [someValue,setSomeValue]
}

export default useDarkMode