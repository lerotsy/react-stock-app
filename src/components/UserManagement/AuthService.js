class AuthService {
    login(username, password) {
      // using this for now, but will later build a backend for this app
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username === "user" && password === "password") {
            localStorage.setItem("user", username);
            resolve();
          } else {
            reject("Invalid username or password");
          }
        }, 1000);
      });
    }
  
    logout() {
      localStorage.removeItem("user");
    }
  
    getCurrentUser() {
      return localStorage.getItem("user");
    }
  }
  
  export default new AuthService();
  