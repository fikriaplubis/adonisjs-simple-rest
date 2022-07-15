import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Employee from 'App/Models/Employee'

export default class EmployeeSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Employee.createMany([
      {
        name: 'John Doe',
        age: 27,
        position: 'Manager Finance'
      },
      {
        name: 'Michael',
        age: 30,
        position: 'Manager Sales'
      },
      {
        name: 'Abraham',
        age: 25,
        position: 'Manager Legal'
      },
      {
        name: 'Lincoln',
        age: 40,
        position: 'Manager Inventory'
      },
      {
        name: 'Bima',
        age: 18,
        position: 'Manager Purchasing'
      },
      {
        name: 'John Doe',
        age: 27,
        position: 'Manager Finance'
      },
      {
        name: 'Michael',
        age: 30,
        position: 'Manager Sales'
      },
      {
        name: 'Abraham',
        age: 25,
        position: 'Manager Legal'
      },
      {
        name: 'Lincoln',
        age: 40,
        position: 'Manager Inventory'
      },
      {
        name: 'Bima',
        age: 18,
        position: 'Manager Purchasing'
      },
      {
        name: 'John Doe',
        age: 27,
        position: 'Manager Finance'
      },
      {
        name: 'Michael',
        age: 30,
        position: 'Manager Sales'
      },
      {
        name: 'Abraham',
        age: 25,
        position: 'Manager Legal'
      },
      {
        name: 'Lincoln',
        age: 40,
        position: 'Manager Inventory'
      },
      {
        name: 'Bima',
        age: 18,
        position: 'Manager Purchasing'
      },
      {
        name: 'John Doe',
        age: 27,
        position: 'Manager Finance'
      },
      {
        name: 'Michael',
        age: 30,
        position: 'Manager Sales'
      },
      {
        name: 'Abraham',
        age: 25,
        position: 'Manager Legal'
      },
      {
        name: 'Lincoln',
        age: 40,
        position: 'Manager Inventory'
      },
      {
        name: 'Bima',
        age: 18,
        position: 'Manager Purchasing'
      }
    ])
  }
}
