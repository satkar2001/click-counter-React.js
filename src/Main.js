import React,{Component} from 'react'
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number:0
         }
    }

    increment = () => {

        this.setState({number : this.state.number+1})
    }
    decrement =()=>{
        this.setState({number:this.state.number-1})
    }
    reset =()=>{
        this.setState({number:0})
    }
    render() {
        return (
            <div className="row justify-content-center">
                 <div className='main col-md-5' >
                <h1>click counter</h1>
                <h1>{this.state.number}</h1>
                <button className='btn btn-primary' onClick={this.increment}>Increment</button>
                <button className='btn btn-info' onClick={this.decrement}>Decrement</button>
                <button className='btn btn-secondary' onClick={this.reset}>Reset</button>
            </div>
            </div>

         );
    }
}

export default Main;