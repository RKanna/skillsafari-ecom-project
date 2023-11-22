import { useUser } from "../../context/UserContext.jsx";
const PostLogin = () => {
  const { userEmail } = useUser();
  return (
    <section className="postlogin">
      <h2>Login Success</h2>
      <h3>You are currently logged in with : {userEmail}</h3>
    </section>
  );
};

export default PostLogin;
