import { Add_movies,Add_favourites, Remove_fav, Show_fav } from "../actions";
const inititalState={
    list:[],
    favourites:[],
    showFavourite:false
}
export default function movies(state=inititalState,action)
{
//     if(action.type===Add_movies){
//         return {
//             ...state,list:action.movies
//         }
//     }
//     return state;


    switch(action.type){
        case Add_movies: return{
                           ...state,list:action.movies
        }
        case Add_favourites:return{
                ...state,favourites:[action.movie, ...state.favourites]
        }
        case Remove_fav:
            const filter_array=state.favourites.filter(movie=>
                movie.Title !== action.movie.Title
            )
            return {
                ...state, favourites:filter_array
            }
        case Show_fav:{return{
            ...state, showFavourite:action.val
        }   
        }

        default: return state;             
    }
}