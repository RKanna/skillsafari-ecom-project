import { useUser } from "../../context/UserContext.jsx";
const PostLogin = () => {
  const { userEmail } = useUser();
  return (
    <section className="postlogin">
      <h1>Login Success</h1>
      <h2>You are currently logged in with : {userEmail}</h2>
    </section>
  );
};

export default PostLogin;
