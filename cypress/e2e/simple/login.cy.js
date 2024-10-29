class login {
  //inicializamos "userData" con un array vacio
    userData = [];
  
  //METODO PARA OBTENER LOS CAMPOS 
  loginUsername() {
    return cy.get("#loginusername");
  }
  loginPassword() {
    return cy.get("#loginpassword");
  }
  btnModalLogin() {
    return cy.get("#login2");
  }
  contentModalLogin() {
    return cy.get("#logInModal");
  }
  submitLoginButton() {
    return cy.get(
      "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    );
  }

  //METODO PARA CARGAR LOS DATOS DE FIXTURE
  loadUserData() {
    cy.fixture("example").then((data) => {
      this.userData = data; // Almacena los datos del fixture
    });
  }

  //Método para realizar el login con un nombre de usuario y contraseña específicos
  loginUser(username, password) {
    this.btnModalLogin().should("be.visible").click();
    this.loginUsername().should("be.visible").type(username);
    this.loginPassword().type(password);
    this.submitLoginButton().click();
  }

  //Método para iniciar sesión con múltiples usuarios
  loginMultipleUsers() {
    //Itera sobre cada usuario almacenado en "userData"
    this.userData.forEach((user) => {
      this.loginUser(user.username, user.userpassword); //iNICIA SESION CON CADA USUARIO
      cy.reload(); // Recargar para el siguiente intento de login
    });
  }
}

export default new login();
