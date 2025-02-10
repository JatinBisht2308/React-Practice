// A function that wraps a component and returns an enhanced version.
const withAuthentication = (WrappedComponent) => {
    return ({ isAuthenticated, ...props }) => {
      return isAuthenticated ? <WrappedComponent {...props} /> : <h1>You are not allowed, login first!!!</h1>;
    };
  };
  
  // ✅ Pass `isAuthenticated` dynamically
  export const Dashboard = withAuthentication((props) => <h2>{props?.name} Welcome To Dashboard!</h2>);
  export const Profile = withAuthentication((props) => <h2>{props?.name}'s Profile Page</h2>);

