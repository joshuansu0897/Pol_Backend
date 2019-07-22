'use strict'
module.exports = `
  # Partido schema
  type Partido {
    Id: ID
    Nombre: String
    Alias: String
    Detalles: String
    FechaFundacion: String 
  }

  input NewPartido {
    Nombre: String
    Alias: String
    Detalles: String
    FechaFundacion: String 
  }

  input EditPartido {
    Nombre: String
    Alias: String
    Detalles: String
    FechaFundacion: String 
  }

  extend type Query {
    # regresa todos los partidos
    getAllPartidos: [Partido]
    # regresa un partido con el id que pases
    getPartido(id: ID!): Partido
  }

  extend type Mutation {
    # crea un partido con la informacion que mandes
    addPartido(partido: NewPartido): Partido
    # edita con la informacion que mandes al partido con 'id'
    editPartido(id: ID!, partido: EditPartido): Partido
  }
`;