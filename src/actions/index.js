// {
//     type:'Add_Movies',
//     movies:[m1,m2,m3]
// }


export const Add_movies='Add_movies'
export const Add_favourites='Add_favourites'
export const Remove_fav='Remove_fav'
export const Show_fav='Show_fav'

export const addMovies=function(data){
    return {
        type:Add_movies,
        movies:data
    }
}
export const addFavourites=function(movie){
    return {
        type:Add_favourites,
        movie:movie
    }
}
export const removeFavourite=function(movie){
    return {
        type:Remove_fav,
        movie:movie
    }
}
export const showFavourite=function(val){
    return {
        type:Show_fav,
        val
    }
}