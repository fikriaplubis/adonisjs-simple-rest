import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post("register", "AuthController.register");
  Route.post("login", "AuthController.login");
  Route.group(() => {
    Route.post("logout", "AuthController.logout");
  }).middleware("auth:api");
}).prefix("api");
