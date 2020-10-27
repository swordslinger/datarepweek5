import React from 'react'

export class Create extends React.Component{

    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);

       this.state = {
            Title:'',
            Year:'',
            Poster:''
        }
    }
    onChangeMovieName(e){
         this.setState({Title:e.target.value})
    }

    onChangeMovieYear(e){
        this.setState({
            Year:e.target.value
        })
    }
    
    onChangeMoviePoster(e){
        this.setState({
            Poster:e.target.value
        })
    }

    onSubmit(){
        alert(' Movie added Title '
        +this.state.Title +  "  year: "
        +this.state.Year + " Poster: "
        +this.state.Poster);
    }

    
    render(){
        return(
            <div>
                <h3> Hello from create Component</h3>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Please Add movie Title</label>
                        <input type="text"
                        className="form-control"
                        value={this.state.Title}
                        onChange={this.onChangeMovieName}></input>
                    </div>

                    <div className="form-group">
                        <label>Please add movie Year</label>
                        <input type="text"
                        className="form-control"
                        value={this.state.Year}
                        onChange={this.onChangeMovieYear}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Please add movie Poster</label>
                        <input type="text"
                        className="form-control"
                        value={this.state.Poster}
                        onChange={this.onChangeMoviePoster}>
                        </input>
                    </div>
                    <div>
                        <input type="submit"
                        value="Add movie">
                        </input>
                    </div>
                </form>
            </div>
        )
    }
}