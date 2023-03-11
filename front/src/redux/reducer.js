import{ ADD_FAVORITE, DELETE_FAVORITE} from './types'

const initialState = {
    myFavorites:[]
}

const reducer = (state = initialState , {type , payload}) => {
    switch (type) {
       case ADD_FAVORITE:
        return{
            ...state,
            myFavorites:[...state.myFavorites, payload],
        }
        case DELETE_FAVORITE:
        const myFavoritesFiltered = state.myFavorites.filter((ele) => ele.id !== payload)
        return{
            ...state,
            myFavorites: myFavoritesFiltered,
        }
        default:
        return{...state}    
    }
}

export default reducer