import './App.css';
import { Button } from '@material-ui/core'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './Firebase'
import firebase from 'firebase';
import Details from './Details'


function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="App">
     <section>
       {
         user ? <Home /> : <SignIn />
       }
     </section>
    </div>
  );
}
function SignIn(){
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  return(
    <div className="Sign">
      <Button onClick={signInWithGoogle} variant="contained" color="secondary">Sign In With Google</Button>
    </div>
  )
}
function SignOut(){
  return auth.currentUser && (
    <div className="navigation">
      <img className="user_image" src={auth.currentUser.photoURL} alt="User"/>
      <p>{auth.currentUser.displayName}</p>
      <Button variant="contained" color="primary" onClick={() => auth.signOut()}>Sign Out</Button>
    </div>
  )
}
function Home(){
  return( 
      <div>
        <SignOut />
        <Details />
    </div>
  )
}
export default App;
