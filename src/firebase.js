import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


    let firebaseConfig = {
        apiKey: "AIzaSyCqotB8PgYrvPe9DF4sN-K14iaUBLoECBc",
        authDomain: "reactapp-e1f5c.firebaseapp.com",
        databaseURL: "https://reactapp-e1f5c.firebaseio.com",
        projectId: "reactapp-e1f5c",
        storageBucket: "reactapp-e1f5c.appspot.com",
        messagingSenderId: "29143494506",
        appId: "1:29143494506:web:b3a7021863b83372c73f13",
        measurementId: "G-HXD6EFB2RJ"
    };


class Firebase{
    constructor(){
        app.initializeApp(firebaseConfig);

        this.app = app.database();
    }

    login(email, password){
        return app.auth().signInWithEmailAndPassword(email, password)
    }

    async register(nome, email,password){
        await app.auth().createUserWithEmailAndPassword(email, password)

        const uid = app.auth().currentUser.uid;

        return app.database().ref('usuarios').child(uid).set({
            nome: nome
        })
    }

    isInitialized(){
        return new Promise(resolve => {
            app.auth().onAuthStateChanged(resolve);
        })
    }


}

export default new Firebase();