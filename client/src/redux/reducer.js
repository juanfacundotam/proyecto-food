const initialState = {
    characters: [
        {
          id: 1,
          name: "Rick Sanchez",
          status: "Alive",
          species: "Human",
          gender: "Male",
          image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          url: "https://rickandmortyapi.com/api/character/1",
          created: "2017-11-04T18:48:46.250Z",
        },
        {
          id: 2,
          name: "Morty Smith",
          status: "Alive",
          species: "Human",
          gender: "Male",
          image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
          url: "https://rickandmortyapi.com/api/character/2",
          created: "2017-11-04T18:50:21.651Z",
        },
        {
          id: 3,
          name: "Summer Smith",
          status: "Alive",
          species: "Human",
          gender: "Female",
          image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
          url: "https://rickandmortyapi.com/api/character/3",
          created: "2017-11-04T19:09:56.428Z",
        },
        {
          id: 4,
          name: "Beth Smith",
          status: "Alive",
          species: "Human",
          gender: "Female",
          image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
          url: "https://rickandmortyapi.com/api/character/4",
          created: "2017-11-04T19:22:43.665Z",
        },
        {
          id: 5,
          name: "Jerry Smith",
          status: "Alive",
          species: "Human",
          gender: "Male",
          image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
          url: "https://rickandmortyapi.com/api/character/5",
          created: "2017-11-04T19:26:56.301Z",
        },
        {
          id: 6,
          name: "Abadango Cluster Princess",
          status: "Alive",
          species: "Alien",
          gender: "Female",
          image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
          url: "https://rickandmortyapi.com/api/character/6",
          created: "2017-11-04T19:50:28.250Z",
        },
        {
          id: 7,
          name: "Abradolf Lincler",
          status: "unknown",
          species: "Human",
          gender: "Male",
          image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
          url: "https://rickandmortyapi.com/api/character/7",
          created: "2017-11-04T19:59:20.523Z",
        },
        {
          id: 8,
          name: "Adjudicator Rick",
          status: "Dead",
          species: "Human",
          gender: "Male",
          image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
          url: "https://rickandmortyapi.com/api/character/8",
          created: "2017-11-04T20:03:34.737Z",
        },
        {
          id: 9,
          name: "Agency Director",
          status: "Dead",
          species: "Human",
          gender: "Male",
          image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
          url: "https://rickandmortyapi.com/api/character/9",
          created: "2017-11-04T20:06:54.976Z",
        },
      ]
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return {...state};
    }
}

export default rootReducer