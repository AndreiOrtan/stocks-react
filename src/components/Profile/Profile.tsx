import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "../Spinner/Spinner";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {isAuthenticated && (
        <div>
          <img src={user?.picture} alt={user?.name} style={{ width: "50px" }} />
        </div>
      )}
    </>
  );
};

export default Profile;
