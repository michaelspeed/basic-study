import React from 'react';
// State -> Immutable
// Prop -> Properties this.props
// this -> Context of the class

// a = 1
// a get deleted <- value is undefined
// a = null <- value is null
// a = 2
// a = 2

// Immutable Variable
// a = 1
// {a, a} = 1,
// a = 1 , a = 1,
// a get deleted , a = 1
// a = null, a = 1
// a = 1, a = 2,
// a is deleted, a = 2,
// a = 2

// {condition ? "true" : "false"}

class Hero extends React.Component { 

  state = {
    bos: false
  }

  heroChang = () => { // <- Arrow head function
    this.setState({
      bos: !this.state.bos
    })
  }

  someFunc = (id) => { 
    // do something with id
  }

  render() {
    console.log(this.props.some)
    return (
      <div>
        {this.props.some ? <h1>Greates Hero is Hulk</h1> :  <h1>Greates Hero is Iron Man</h1>}
      </div>
    )
  }
}

export default Hero