import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "../Spinner/Spinner";
import { useState, useEffect } from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently, logout } =
    useAuth0();
  console.log("Ran from Profile", "isAuthenticated - " + isAuthenticated);
  const [userMetadata, setUserMetadata] = useState(null);
  // console.log(user);
  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "dev-eggyuo3hd8fqyl5b.us.auth0.com";

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user?.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const { user_metadata } = await metadataResponse.json();

        setUserMetadata(user_metadata);
      } catch (e: any) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    // <>
    //   {isAuthenticated && (
    //     <div style={{ margin: 0 }}>
    //       <img src={user?.picture} alt={user?.name} style={{ width: "50px" }} />
    //       {/* {userMetadata ? (
    //         <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
    //       ) : (
    //         "No user metadata defined"
    //       )} */}
    //       <button
    //         onClick={() => logout({ returnTo: window.location.origin })}
    //         className="ui button"
    //       >
    //         Log Out
    //       </button>
    //     </div>
    //   )}
    // </>
    isAuthenticated ? (
      <div style={{ margin: 0 }}>
        <img src={user?.picture} alt={user?.name} style={{ width: "50px" }} />
        <button
          onClick={() => logout({ returnTo: window.location.origin })}
          className="ui button"
        >
          Log Out
        </button>
      </div>
    ) : null
  );
};

export default Profile;
