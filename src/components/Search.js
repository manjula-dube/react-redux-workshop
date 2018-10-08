  import React, { Component } from 'react'
  import { connect } from 'react-redux'

  import { searchActionCreator } from '../actions/actionCreators'

  class Search extends Component {

    constructor(props) {
      super(props)

      this.onSearchUserClick = this.onSearchUserClick.bind(this)
    }

    componentDidMount() {
      this.onSearchUserClick()
    }

    state = {
      userName: 'vihangpatel'
    }

    onInputChange (userName) {
      this.setState({userName})
    }

    onSearchUserClick() {
      if(this.props.busy) {
        return 
      }

      this.props.dispatch(searchActionCreator(this.state.userName))
      
    }

    render()  {
      return (
        <div>
          <div className='search-bar'>
            
                <input
                  placeholder="Enter a Github User's name"
                  value={this.state.userName}
                  onChange={event => this.onInputChange(event.target.value)}
                  type='text'
                />
                
                <button
                  className={this.props.busy ? 'busy' : ''} 
                  disabled={this.props.busy}
                  onClick={this.onSearchUserClick}
                  type="submit"
                >Search </button>
                
            
          </div>    
        </div>
      )
    }
  }

  function mapStateToProps(state) {
      return {
        busy : state.home.busy
      }
  }

  export default connect(mapStateToProps)(Search)