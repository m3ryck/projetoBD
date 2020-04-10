'use strict'


const Rest = use('App/Models/Restaurant')

class RestaurantController {
    async create ({ request }) {
        const data = request.only(["username", "email", "password","availability","category"])
        const restaurant = await Rest.create(data)    
        return restaurant
      }

    async login ({ auth, request }) {
        const { email, password } = request.all()
        const tokenRes = await auth.authenticator('authRes').attempt(email, password)    
        return tokenRes
    }
}

module.exports = RestaurantController
