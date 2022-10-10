import React, { useState } from 'react'
import { actionType } from './Developer'
import '../index.css';

export const DeveloperForm = ({dispatch}) => {
    const [name, setName] = useState('');
    const [favoriteLanguage, setFavoriteLanguage] = useState('');
    const [favoriteTechnology, setFavoriteTechnology] = useState('');
    const [favoriteFood, setFavoriteFood] = useState('');
    const [favoriteDrink, setFavoriteDrink] = useState('');
    // const dispatch = useDispatch();

    // console.log(name)
    // console.log(favLang)
    // console.log(favTech)
    // console.log(favFood)
    // console.log(favDrink)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: actionType.ADD_DEVELOPER,
            payload: {name, favoriteLanguage, favoriteTechnology, favoriteFood, favoriteDrink}
        });

        setName('');
        setFavoriteLanguage('');
        setFavoriteTechnology('');
        setFavoriteFood('');
        setFavoriteDrink('');
    };

    // add list of developers

    return (
        <div className='theForm'>
            <form onSubmit={handleSubmit}>
                <label className='forLabel'>
                    Name:
                    <input
                        className='forInput'
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} //rather than using the name and id attributes, we use the value and onChange attributes to set the value of the input field and update the state when the value changes.
                    /> <br></br> <br></br>
                </label>
                <label className='forLabel'>
                    Favorite Language:
                    <select
                        className='forInput'
                        value={favoriteLanguage}
                        onChange={(e) => setFavoriteLanguage(e.target.value)}
                    >
                        <option value="JavaScript">JavaScript</option>
                        <option value="Python">Python</option>
                        <option value="Java">Java</option>
                        <option value="C#">C#</option>
                        <option value="C++">C++</option>
                    </select> <br></br><br></br>
                </label>
                <label className='forLabel'>
                    Favorite Technology:
                    <select
                        className='forInput'
                        value={favoriteTechnology}
                        onChange={(e) => setFavoriteTechnology(e.target.value)}
                    >
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                        <option value="Node">Node</option>
                        <option value="Express">Express</option>
                    </select> <br></br><br></br>
                </label>
                <label className='forLabel'>
                    Favorite Food:
                    <input
                        className='forInput'
                        type="text"
                        value={favoriteFood}
                        onChange={(e) => setFavoriteFood(e.target.value)}
                    /> <br></br><br></br>
                </label>
                <label className='forLabel'>
                    Favorite Drink:
                    <input
                        className='forInput'
                        type="text"
                        value={favoriteDrink}
                        onChange={(e) => setFavoriteDrink(e.target.value)}
                    /> <br></br><br></br>
                </label>
                <input className='forBotton' type="submit" value="Submit" />
                <hr></hr>
            </form>
        </div>
    );
}
