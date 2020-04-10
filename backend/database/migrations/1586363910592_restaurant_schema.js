'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RestaurantSchema extends Schema {
  up () {
    this.create('restaurants', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('availability', 80).notNullable()
      table.string('category', 10).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('restaurants')
  }
}

module.exports = RestaurantSchema
