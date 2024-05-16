import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { app } from "../firebase";
import { signInFailure, signInSuccess } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Oauth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resFromGoogle = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: resFromGoogle.user.displayName,
          email: resFromGoogle.user.email,
          photoUrl: resFromGoogle.user.photoURL,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(data.message));
    }
  };
  return (
    <Button
      type="button"
      gradientDuoTone="pinkToOrange"
      outline
      onClick={handleGoogle}
    >
      <AiFillGoogleCircle className="w-6 h-6 mr-2" />
      Continue with Google
    </Button>
  );
}
