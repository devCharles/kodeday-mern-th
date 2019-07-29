import React, { Component } from 'react'

class Entry extends Component {
  render() {
    return(
      <article>
        <img 
          src={this.props.image || 'https://kodemia.mx/static/img/logos/isotipo-negro.png'}
          alt='imagen jiji'
        />
        <aside>
          <h2>{this.props.title}</h2>
          <p className='date'>{this.props.date}</p>
          <p className='content'>
            {this.props.body}
          </p>
        </aside>
      </article>
    )
  }
}

export default Entry