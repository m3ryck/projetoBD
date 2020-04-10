'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TokenRSchema extends Schema {
  up () {
    this.create('token_rs', (table) => {
      table.increments()
      table.integer('rest_id').unsigned().references('id').inTable('restaurants')
      table.string('token_rs', 255).notNullable().unique().index()
      table.string('type', 80).notNullable()
      table.boolean('is_revoked').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('token_rs')
  }
}

module.exports = TokenRSchema
