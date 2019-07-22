'use strict'
module.exports = `
  # Cargo schema
  type Cargo {
    Id: ID
    Nombre: String
    Detalles: String
  }

  input NewCargo {
    Nombre: String
    Detalles: String
  }

  input EditCargo {
    Nombre: String
    Detalles: String
  }

  extend type Query {
    # regresa todos los cargos
    getAllCargos: [Cargo]
    # regresa un cargo con el id que pases
    getCargo(id: ID!): Cargo
  }

  extend type Mutation {
    # crea un cargo con la informacion que mandes
    addCargo(cargo: NewCargo): Cargo
    # edita con la informacion que mandes al cargo con 'id'
    editCargo(id: ID!, cargo: EditCargo): Cargo
  }
`;