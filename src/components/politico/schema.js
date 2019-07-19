module.exports = `
  # Politico schema
  type Politico {
    Id: ID
    Nombre: String
    Detalles: String
    FechaNacimiento: String 
  }

  input NewPolitico {
    Nombre: String
    Detalles: String
    FechaNacimiento: String 
  }

  input EditPolitico {
    Nombre: String
    Detalles: String
    FechaNacimiento: String 
  }

  extend type Query {
    # regresa todos los politicos
    getAllPoliticos: [Politico]
    # regresa un politico con el id que pases
    getPolitico(id: ID!): Politico
  }

  extend type Mutation {
    # crea un politico con la informacion que mandes
    addPolitico(politico: NewPolitico): Politico
    # edita con la informacion que mandes al politico con 'id'
    editPolitico(id: ID!, politico: EditPolitico): Politico
  }
`;