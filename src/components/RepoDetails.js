import React from 'react'
import { connect } from 'react-redux'

const RepoDetails = ({ repoDetail }) => {
    return (
      <li
        key={repoDetail.username}
        className='list-group-item'
        onClick={() => console.log('ff')}
        >
        <img src={repoDetail.avatar} alt={repoDetail.avatar}/>
        <h3 className='blueText'>{repoDetail.name}</h3>
        {RepoListElement(repoDetail)}

      </li>
    )
}


  const RepoListElement = ({ repos }) => {
    if(!repos) {
      return null 
    }
    return repos.map(repo => {
      return (
        <li
          key={repo.id}
          className='list-group-item'
          onClick={() => window.open(repo.url, '_blank')}
          >
          <h3 className='blueText'>{repo.name}</h3>
          <p> Name:
              {repo.name !== null ? <span className='greenText'> {repo.name}</span> : <span className='redText'> Unknown </span>}
          </p>
          <p>Description:</p>
          {repo.description !== null ? <span className='greenText'> {repo.description}</span> : <span className='redText'> None </span>}
          <p>Stars:</p>
          {repo.stars !== null ? <span className='blueText'> {repo.stars}</span> : <span className='redText'> None </span>}
        </li>
      )
    })
  }



function mapStateToProps(state) {
    return {
        repoDetail : state.home.repoDetails || {}
    }
}

export default connect(mapStateToProps)(RepoDetails)