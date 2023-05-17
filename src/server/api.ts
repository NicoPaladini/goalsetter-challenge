const login = (username: string, password: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        ["user@goalsetter.co", "(987) 654-3210"].includes(username) &&
        password === "Querty1234!"
      ) {
        // Login successful
        resolve(true);
      } else {
        // Login failed
        reject(new Error("Your email or password is incorrect. Try again."));
      }
    }, 2000);
  });
};

export default login;
