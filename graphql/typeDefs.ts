export const typeDefs = `#graphql
  scalar JSON

  type Package {
    userName: String
    userSurname: String
    versions: [JSON]
  }

  type Query {
    package(name:String): Package
  }
`;
