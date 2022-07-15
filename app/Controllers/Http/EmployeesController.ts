import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Database from '@ioc:Adonis/Lucid/Database'

import Employee from 'App/Models/Employee';

export default class EmployeesController {
  public async create({ request, response }: HttpContextContract) {
    try {
      const newEmployee = request.all() as Partial<Employee>
      const employee = await Employee.create(newEmployee)

      return response
        .status(201)
        .send({
          success: true,
          message: "Employee created",
          data: employee
      })
    } catch {
      return response
        .status(500)
        .send({
          success: false,
          message: "Internal server error",
          data: null
      })
    }
  }

  public async getAll({ request, response }: HttpContextContract) {
    try {
      const page = request.input('page', 1)
      const limit = request.input('limit', 10)

      const employees = await Database
        .from('employees')
        .paginate(page, limit)

      const result = employees.toJSON()

      return response
        .status(200)
        .send({
          success: true,
          message: "Employee list",
          meta: result.meta,
          data: result.data
      })
    } catch {
      return response
        .status(500)
        .send({
          success: false,
          message: "Internal server error",
          data: null
      })
    }
  }

  public async getById({ params, response }: HttpContextContract) {
    try {
      const employee = await Database
        .from('employees')
        .where('id', params.id)

      if (employee.length === 0) {
        return response
          .status(400)
          .send({
            success: true,
            message: "Employee not found",
            data: null
          })
      }

      return response
        .status(200)
        .send({
          success: true,
          message: "Success get employee",
          data: employee[0]
      })
    } catch {
      return response
        .status(500)
        .send({
          success: false,
          message: "Internal server error",
          data: null
      })
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const body = request.all();

      const result = await Database
        .from('employees')
        .where('id', params.id)
        .update(
          body,
          ['id', 'name', 'age', 'position']
        )

      return response
        .status(200)
        .send({
          success: true,
          message: "Success update employee",
          data: result[0]
        })
    } catch {
      return response
        .status(500)
        .send({
          success: false,
          message: "Internal server error",
          data: null
      })
    }
  }

  public async delete({ params, response }: HttpContextContract) {
    try {
      const result = await Database
        .from('employees')
        .where('id', params.id)
        .delete()

      return response
        .status(200)
        .send({
          success: true,
          message: "Success delete employee",
          data: result
        })
    } catch {
      return response
        .status(500)
        .send({
          success: false,
          message: "Internal server error",
          data: null
      })
    }
  }
}
