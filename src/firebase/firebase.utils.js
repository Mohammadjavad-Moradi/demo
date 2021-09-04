import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "***",
    authDomain: "cbi-intranet.firebaseapp.com",
    projectId: "cbi-intranet",
    storageBucket: "cbi-intranet.appspot.com",
    messagingSenderId: "471825400147",
    appId: "***",
    measurementId: "G-E2H4L1NLFG",
    //storageBucket: 'gs://cbi-intranet.appspot.com'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

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

export const addHeader = async (collectionKey, headerData) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef)
    console.log(headerData)
    const batch = firestore.batch();
    headerData.forEach(el => {
        const newDoc = collectionRef.doc(el.tempTitle);
        console.log(newDoc)
        batch.set(newDoc, el)
    })
    return await batch.commit()
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
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

export const getHeaderData = async (collectionData) => {
    const headerData = await Promise.all(collectionData.docs.map( doc => {
        return doc.data()
    }))
    return headerData.reduce((accumulator, content) => {
        accumulator[content.tempTitle] = content;
        return accumulator;
    }, {})
}

const getContents = async (doc) => {
    const contentRef = await firestore.collection(`announcements/${doc.id}/contents`).orderBy('time', 'desc').limit(6).get();
    const myContent = contentRef.docs.map( item => {
        const obj =  item.data()
        return { ...obj, id: item.id}
    })
    const contentObj = myContent.reduce((accumulator, content) => {
        accumulator[content.id] = content;
        return accumulator
    },{}) 
    return contentObj;             
}

export const getAnnouncementsData = async (announcementsCollection) => {
    const final = await Promise.all(announcementsCollection.docs.map( async doc => {
        const { title, tempTitle } = doc.data();       
        const content = await getContents(doc);  
        return {
            linkUrl: encodeURI(`/announcements/${doc.id.toLowerCase()}`),
            title,
            tempTitle,
            content           
        }      
    }))   

    return final.reduce((accumulator, content) => {
        accumulator[content.tempTitle] = content;
        return accumulator
    }, {})    
}

export const getPageData = (snapshot) => {
    const newsData = snapshot.docs.map(doc => {
        const obj =  doc.data()
        return { ...obj, id: doc.id}
    })

    const newsDataObj = newsData.reduce((accumulator, data) => {
        accumulator[data.id] = data;
        return accumulator;
    },{})

    return newsDataObj;
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    });
}

export default firebase;
