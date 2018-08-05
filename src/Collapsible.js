import React, { Component } from 'react'
import styled from 'styled-components'
import {Transition , animated , config } from "react-spring"

class Collapsible extends Component {
   state = {
      toggle: false,
      height: null
   }
   onToggle = (e) => {
      e.preventDefault()
      this.setState({
         toggle: !this.state.toggle
      })
   }
   render() {
      var { title , children } = this.props
      var { toggle } = this.state
      return (
         <Card className="card bg-white border border-white">
            <Title className="card-header bg-white border border-white" onClick={this.onToggle}>
               { title }
            </Title>
            <Transition
               native
               config={config.gentle}
               from={{opacity : 0.1 }}
               enter={{opacity : 1 }}
               leave={{opacity : 0 }}
            >
               {
                  toggle &&  (styles => (
                     <CardContent className="card-body" style={{
                        opacity: styles.opacity.interpolate(opacity => opacity)
                      }}>
                        <p className="card-text text-justify" ref="myDiv">
                           { children }
                        </p>
                     </CardContent>
                  ))
               }
            </Transition>
            
         </Card>
      );
   }
}

export default Collapsible

const Card = styled.div``

const Title = styled.div`cursor: pointer`

const CardContent = styled(animated.div)`
   transition: all 0.3s ease;
`