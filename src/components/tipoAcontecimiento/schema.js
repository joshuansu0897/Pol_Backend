'use strict'
module.exports = `
  # TipoAcontecimiento schema
  type TipoAcontecimiento {
    Id: ID
    Nombre: String
    Detalles: String
  }

  input NewTipoAcontecimiento {
    Nombre: String
    Detalles: String
  }

  input EditTipoAcontecimiento {
    Nombre: String
    Detalles: String
  }

  extend type Query {
    # regresa todos los Tipos de Acontecimientos
    getAllTipoAcontecimientos: [TipoAcontecimiento]
    # regresa un Tipo de Acontecimiento con el id que pases
    getTipoAcontecimiento(id: ID!): TipoAcontecimiento
  }

  extend type Mutation {
    # crea un Tipo de Acontecimiento con la informacion que mandes
    addTipoAcontecimiento(tipoAcontecimiento: NewTipoAcontecimiento): TipoAcontecimiento
    # edita con la informacion que mandes al Tipo de Acontecimiento con 'id'
    editTipoAcontecimiento(id: ID!, tipoAcontecimiento: EditTipoAcontecimiento): TipoAcontecimiento
  }
`;