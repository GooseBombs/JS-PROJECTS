import React  from "react";



const AllMovies = (props) => {

  return (
        <section className="mt-5">
        <div className="container-lg">
            
            <div className="row">
            {props.movies.map((movie)=>(
                                <div className="col-md-3">
                                <div className="card p-2">
                                <img
                                    className="card-img-top"
                                    src={movie.imageURL}
                                />
                    
                                <h5 className="cart-body my-2">{movie.name}</h5>
                                <p className="card-text"></p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button onClick={(event)=> props.deleteMovie(movie)}  id="delete-btn" className="btn btn-danger">DELETE</button>
                                    <div className="rating bg-dark px-2 py-1 rounded">
                                    <span className="text-light">{movie.rating}</span>
                                    </div>
                                </div>
                                </div>
                            </div>
            ))}

            
            
          
        
                
            
            </div>
        </div>
        </section>
        )

  }

export default AllMovies;
