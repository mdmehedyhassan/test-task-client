import React, { useContext } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { AdminContext } from '../../../App';


const firebaseConfig = {
    apiKey: "AIzaSyDU4Wy6C_yxVYoj4fr0ri49VoBSVH7bvok",
    authDomain: "test-task-client.firebaseapp.com",
    projectId: "test-task-client",
    storageBucket: "test-task-client.appspot.com",
    messagingSenderId: "358396968130",
    appId: "1:358396968130:web:c10db6e38196dd05d6cf5b"
};
initializeApp(firebaseConfig);

const Login = () => {
    const [user, setUser] = useContext(AdminContext);
    const googleLoginHandle = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const getUser = {
                    email: result?.user?.email
                };
                setUser(getUser)
            }).catch((error) => {
                console.log(error);
            });
    }

    const logoutHandler = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            alert('logout successfully!');
        }).catch((error) => {
        });
    }

    return (
        <div className="text-center text-danger m-5">
            {
                user?.email ?
                    <>
                        <h1 className="p-4">Login user email: {user?.email}</h1>
                        <button
                            onClick={logoutHandler}
                            className="btn btn-danger rounded-pill"
                        >
                            Logout
                        </button>
                    </>
                    :
                    <>
                        <h1 className="p-4">Only Google login is available. And if you log in, you will automatically become an admin.</h1>
                        <button
                            onClick={googleLoginHandle}
                            className="btn btn-danger rounded-pill"
                        >
                            Google Login
                        </button>
                    </>
            }

        </div>
    );
};

export default Login;