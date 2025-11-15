export default function FacebookLoginButton() {
    const loginWithFacebook = () => {
      window.location.href = "https://testing-backend-xi.vercel.app/auth/facebook";
    };
  
    return (
      <button
        onClick={loginWithFacebook}
        style={{
          padding: "10px 20px",
          background: "#1877F2",
          color: "#fff",
          borderRadius: "8px",
          border: "none"
        }}
      >
        Login with Facebook
      </button>
    );
}