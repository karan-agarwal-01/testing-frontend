import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function FacebookSuccess() {
  const search = useLocation().search;
  const params = new URLSearchParams(search);

  const id = params.get("id");
  const name = params.get("name");
  const email = params.get("email");
  const picture = params.get("picture");

  useEffect(() => {
    console.log("Facebook Login Success:", { id, name, email, picture });
  }, [id, name, email, picture]);

  return (
    <div>
      <h1>Login Successful</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>

      {picture && (
        <img src={picture} alt="profile" style={{ width: "150px", borderRadius: "50%" }} />
      )}
    </div>
  );
}
