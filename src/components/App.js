import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { data } from "../data";
import { addMovies, showFavourite } from "../actions";
class App extends React.Component {

componentDidMount(){
  const {store}=this.props
  //make api call
  //dispatch action
  store.subscribe(()=>{
    console.log('updated')
    this.forceUpdate();
  })
  store.dispatch(addMovies(data))
  console.log('State',this.props.store.getState()) 
}
isMovieFavourite=(movie=>{
  const {favourites}=this.props.store.getState().movies;
  const index=favourites.indexOf(movie);
  if(index!==-1)
  {
    return true;
  }
  else{
    return false;
  }
})

onChangeTab=(val)=>{
      this.props.store.dispatch(showFavourite(val))
}


render(){
 
  const { list, favourites,showFavourite} =this.props.store.getState().movies;
  const displayMovie=showFavourite?favourites:list;
 console.log(this.props.store.getState())

  return (
    <div className="App">
       <Navbar/>
       <div className="main">
          <div className="tabs">
            <div className={ `tab ${showFavourite ? '':'active-tabs'}`} onClick={()=>{this.onChangeTab(false)}}>Movies</div>
            <div className={ `tab ${showFavourite ?'active-tabs':''}`} onClick={()=>{this.onChangeTab(true)}}> Favourites</div>

          </div>
          <div className="List">
          {displayMovie.map((content,index) => (
             <MovieCard 
             movie={content}
              key={`movie-${index}`} 
              dispatch={this.props.store.dispatch} 
              isFavorite={this.isMovieFavourite(content)}    
              />
          ))}
          </div>
          {
            displayMovie.length===0 ? <div className="no-movies">Add movies to Favourite</div> :null
          }
       </div>
    </div>
  );
}
}

export default App;
