import axios from "axios";

export const resolvers = {
  Query: {
    package: async (parent,{name}) => {
      const { data } = await axios.get( `https://registry.npmjs.org/${name}`)
      const downloadRates = await axios.get(`https://api.npmjs.org/versions/${name}/last-week`)

      const versions = []
      for( let [key,value] of Object.entries(downloadRates.data.downloads)){
        versions.push({
          version:key,
          downloadsLast7Days:value
        })
      }

      return {
        userName:data.author.name.split(' ')[0],
        userSurname:data.author.name.split(' ')[1],
        versions
      }
    },
  },
};