import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await User.createMany([
      {
        email: 'test@adonisjs.com',
        password: 'test',
      },
      {
        email: 'johndoe@adonisjs.com',
        password: 'johndoe'
      }
    ])

  }
}
