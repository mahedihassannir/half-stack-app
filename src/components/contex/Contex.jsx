import React, { createContext } from 'react';

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import app from './Fiirebase/Firebase.config';

let auth = getAuth(app)

export let  contex = createContext(null)




const Contex = ({ children }) => {


    let loginq = (email, passeord) => {

        return signInWithEmailAndPassword(auth, email, passeord)


    }


    let create = (email, passeord) => {
        return createUserWithEmailAndPassword(auth, email, passeord)

    }

    let user = {

        loginq,
        create


    }

    return (
        <div>
            <contex.Provider value={user}>

                {children}

            </contex.Provider>
        </div>
    );
};

export default Contex;