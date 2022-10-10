import { actionType } from "./Developer"
import '../index.css';

export const DeveloperList = ({ developers, dispatch}) => {
  return (
    <div>
        <h2>Developer List</h2>
        {developers.map((developer) => (
            <div className="forAllList" key={developer.id}>
                <p className="forList">Name: {developer.name}</p>
                <p className="forList">Favorite Language: {developer.favoriteLanguage || 'JavaScript'}</p>
                <p className="forList">Favorite Technology: {developer.favoriteTechnology || 'React'}</p>
                <p className="forList">Favorite Food: {developer.favoriteFood}</p>
                <p className="forList">Favorite Drink: {developer.favoriteDrink}</p>
                <button className='forBotton' onClick={() => dispatch({type: actionType.DELETE_DEVELOPER, payload: developer})}>Delete</button>

            </div>
        ))}
    </div>
  )
}
