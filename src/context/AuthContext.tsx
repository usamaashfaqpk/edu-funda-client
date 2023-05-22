import { createContext, useContext, useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { auth, db } from '../config/firebase'
import { addDoc, collection, doc, getDoc, setDoc } from '@firebase/firestore'
import { toast } from 'react-toastify'

const AuthContext = createContext<any>({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState<any>(null)
  const [userData, setUserData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const signup = (email: string, password: string, username: string) => {
    return createUserWithEmailAndPassword(auth, email, password).then( async (result) => {
      try {
        const ref = doc(db, "users", result.user.uid)
        await setDoc(ref, {
          email: email,
          uid: result.user.uid,
          name: username
        })
        toast.success("New user added successfully");
      } catch {
        toast.error("Error Adding user Data");
      }
    })
  }

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password).then(async(result) => {
      const docRef = doc(db, "users", result.user.uid);
      const docSnap = await getDoc(docRef);
      setUserData(docSnap.data())
    })
  }

  const logout = async () => {
    setUser(null)
    await signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, userData, setUserData }}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}
