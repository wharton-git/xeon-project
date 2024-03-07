import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase-config";
import './../styles/css/Style.css'


import Cookies from 'universal-cookie';
const cookies = new Cookies()

const Auth = (props) => {
    const { setIsAuth} = props;

    const signInWithGoogle = async () => {
        try {
            const result= await signInWithPopup(auth, provider);
            cookies.set("auth-token", result.user.refreshToken);
            setIsAuth(true);
        } catch (error) {
            console.error("Error signing in with Google:", error);
        }
    };

    return (
        <div className="authe text-center ">
            <p className="ggTitle">Sign with Google to continue</p>
            <button onClick={signInWithGoogle} className="ggAction p-3 bg-blue-600 rounded-xl text-white">Sign in with Google</button>
        </div>
    );
}

export default Auth; // Export Auth as default
