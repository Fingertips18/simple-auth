const AuthController = {
  signUp: async (_, res) => {
    res.send("Sign up route");
  },
  signIn: async (_, res) => {
    res.send("Sign in route");
  },
  signOut: async (_, res) => {
    res.send("Sign out route");
  },
};

export default AuthController;
