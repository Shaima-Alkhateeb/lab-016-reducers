import { actionType } from "./Developer"

export const DeveloperList = ({ developers, dispatch}) => {
  return (
    <div>
        <h2>Developer List</h2>
        {developers.map((developer) => (
            <div key={developer.id}>
                <p>Name: {developer.name}</p>
                <p>Favorite Language: {developer.favoriteLanguage || 'JavaScript'}</p>
                <p>Favorite Technology: {developer.favoriteTechnology || 'React'}</p>
                <p>Favorite Food: {developer.favoriteFood}</p>
                <p>Favorite Drink: {developer.favoriteDrink}</p>
                <button onClick={() => dispatch({type: actionType.DELETE_DEVELOPER, payload: developer})}>Delete</button>

            </div>
        ))}
    </div>
  )
}
