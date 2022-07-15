import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'App/Models/User';

export default class AuthController {

  public async login({ request, auth, response }: HttpContextContract) {
    try {
      const { email, password } = request.all();
      const token = await auth.use('api').attempt(email, password, {
        expiresIn: "12hours",
      });

      return response
        .status(200)
        .send({
          success: true,
          message: "Login success",
          data: null,
          ...token
      })
    } catch {
      return response
        .status(400)
        .send({
          success: false,
          message: "Invalid credentials",
          data: null
      })
    }
  }

  public async register({ request, auth, response }: HttpContextContract) {
    try{
      const newUser = request.all() as Partial<User>
      const user = await User.create(newUser)
      const token = await auth.use("api").login(user, {
        expiresIn: "12hours",
      });

      return response
        .status(201)
        .send({
          success: true,
          message: "User created",
          data: null,
          ...token
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

  public async logout({auth, response}: HttpContextContract) {
    await auth.logout()

    return response
        .status(200)
        .send({
          success: true,
          message: "Logout Success",
          data: null
      })
  }

}
