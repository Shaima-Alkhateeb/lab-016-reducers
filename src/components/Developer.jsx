
export const Developer = (state, action) => {

    switch (action.type) {
        case actionType.ADD_DEVELOPER:
        return [
            ...state, {
            name: action.payload.name,
            favoriteLanguage: action.payload.favoriteLanguage,
            favoriteTechnology: action.payload.favoriteTechnology,
            favoriteFood: action.payload.favoriteFood,
            favoriteDrink: action.payload.favoriteDrink,
            id: state.length + 1
        }]
        // case actionType.AUPDATE_DEVELOPER:
        // return state.map((developer, index) => {
        //     if (index === action.index) {
        //     return [
        //         ...developer,  {
        //         name: action.name,
        //         favoriteLanguage: action.favoriteLanguage,
        //         favoriteTechnology: action.favoriteTechnology,
        //         favoriteFood: action.favoriteFood,
        //         favoriteDrink: action.favoriteDrink
        //     }]
        // } 
        // })
        case actionType.DELETE_DEVELOPER:
            return state.filter(developer => developer.id !== action.payload.id);
        default:
        return state;
    }
}

export const actionType = {
    ADD_DEVELOPER: 'ADD_DEVELOPER',
    // AUPDATE_DEVELOPER: 'AUPDATE_DEVELOPER',
    DELETE_DEVELOPER: 'DELETE_DEVELOPER'
  }

//   return (
    // <div>
    //     <h1>Developer</h1>
    //     <p>Name: {state.name}</p>
    //     <p>Favorite Language: {state.favLang}</p>
    //     <p>Favorite Technology: {state.favTech}</p>
    //     <p>Favorite Food: {state.favFood}</p>
    //     <p>Favorite Drink: {state.favDrink}</p>
    // </div>
// )