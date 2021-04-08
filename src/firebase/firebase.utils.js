import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyASRjjU4KHBZnz2PDgxlRqQYprysVwEscM",
    authDomain: "cbi-intranet.firebaseapp.com",
    projectId: "cbi-intranet",
    storageBucket: "cbi-intranet.appspot.com",
    messagingSenderId: "471825400147",
    appId: "1:471825400147:web:06e1e6ced1a875092f61a6",
    measurementId: "G-E2H4L1NLFG"
};

firebase.initializeApp(config);

export const createUserProfile = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if(!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createDate = new Date();

        try {
            userRef.set({
                displayName,
                email,
                createDate,
                ...additionalData
            })
        } catch( error ) {
            console.log(error)
        }

    }

    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    //const collectionRef = firestore.collection('announcements').doc
    //console.log(collectionRef)
    //console.log(objectsToAdd)

    const batch = firestore.batch();
    const newObj = objectsToAdd.map(({content, tempTitle}) => ({content, tempTitle}))
    console.log(newObj)
    newObj.forEach(obj => {
        const collectionRef = firestore.collection('announcements').doc(obj.tempTitle).collection(collectionKey)
        console.log(collectionRef)
        const contentArray = Object.keys(obj.content).map(key => obj.content[key])
        console.log(contentArray)
        contentArray.map(item => {
            const newDocRef = collectionRef.doc();
            return batch.set(newDocRef, item);
        })
    })

    return await batch.commit();
}


const getContents = (doc) => {
    const contentRef = firestore.collection(`announcements/${doc.id}/contents`);
    const limit = contentRef.limit(10);
    const contentObj = limit.onSnapshot( async snapshotContents => {

        const myContent = snapshotContents.docs.map( item => {
  
            const obj =  item.data()
            return { ...obj, id: item.id}
        })
        
        console.log(myContent)
        return myContent.reduce((accumulator, content) => {
            accumulator[content.id] = content;
            return accumulator
        },{}) 
                     
    }) 
    return contentObj
}

export const getAnnouncementsData = (announcementsCollection) => {
    const final = announcementsCollection.docs.map( doc => {
        const { title } = doc.data();
        
        const { contents } = getContents(doc);
        
    
        return {
            linkUrl: encodeURI(`/announcements/${doc.id.toLowerCase()}`),
            title,
            contents           
        }      
    })   
    console.log(final);
    return final;    
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;