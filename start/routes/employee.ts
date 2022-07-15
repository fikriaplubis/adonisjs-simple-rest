import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.group(() => {
    Route.post("employee", "EmployeesController.create")
    Route.get("employee", "EmployeesController.getAll")
    Route.get("employee/:id", "EmployeesController.getById")
    Route.patch("employee/:id", "EmployeesController.update")
    Route.delete("employee/:id", "EmployeesController.delete")
  }).middleware("auth:api")
}).prefix("api")
