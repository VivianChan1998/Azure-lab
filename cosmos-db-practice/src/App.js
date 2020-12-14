import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: []
    }
    fetch('http://localhost:4000')
      .then(res => res.json())
      .then(data => {
        this.setState({ data: data.data })
      })
      .catch(console.log)
  }
  render(){
    console.log(this.state.data)
    return (
      <div className="App">
          {
            this.state.data.map(e => <Post
              title = {e.title}
              date_published = {e.date_published}
              content = {e.content}
              keyword = {e.keyword}
            ></Post>)
          }
      </div>
    );
  }
}

function Post(props){
  return(
    <div className='Post-wrap'>
      <h1>{props.title}</h1>
      <h6>{props.date_published}</h6>
      <p>{props.content}</p>
    </div>
  )
}

export default App;
