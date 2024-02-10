
import {ReactNode} from "React";


const authLayout = ({children} : {children:ReactNode}) => {
    return (  

        <div className = "bg-indigo-500 h-screen"> 
            {children}
        </div>
    );
}
 
export default authLayout ;