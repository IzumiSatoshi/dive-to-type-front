import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBIVN4iwipeJ-PnAZuX2aOfAKK5VaULZDc",
  authDomain: "dive-to-type.firebaseapp.com",
  projectId: "dive-to-type",
}
export const firebaseApp = initializeApp(firebaseConfig)
export const db = getFirestore(firebaseApp);

