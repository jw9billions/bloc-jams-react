import React, { Component } from 'react';

class Album extends Component {
  render() {
    return (
      <section className="album">
        {this.props.match.params.slug} Album page is here!
      </section>
    );
  }
}

export default Album;
