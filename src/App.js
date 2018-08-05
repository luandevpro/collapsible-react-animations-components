import React, { Component } from 'react'
import styled from 'styled-components'
import Collapsible from './Collapsible'

import { injectGlobal } from 'styled-components'

injectGlobal`
   body {
      width: 100%;
      background: #eee;
      padding: 0;
      margin: 0;
   }
`

class App extends Component {
   state = {
      title: ['Overview','Features','Hardware','Software'],
      content: 'Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.'
   }
   
   showCollapsible = (title,content) => {
      var result = null
      if(title.length > 0){
         result = title.map((title,index) => {
            return (
               <Collapsible title={title} key={index}>
                  { content }
               </Collapsible>
            )
         })
      }
      return result
   }
   render() {
      var { title , content } = this.state
      return (
         <ColapsibleWrapper>
            <Header>
               <img src="https://ihatetomatoes.net/react-tutorials/collapsible/fonts/expand-vertical-4.svg" alt=""/>
               <h1>Collapsible Content</h1>
            </Header>
            
            <ColapsibleGrip>
               {
                  this.showCollapsible(title,content)
               }
            </ColapsibleGrip>

         </ColapsibleWrapper>
      );
  }
}

export default App

const ColapsibleWrapper = styled.div`
   background: #eee;
   width: 100%;
`

const Header = styled.header`
   text-align: center;
   img {
      width: 150px;
      height: 200px;
      position: relative;
   }
   h1 {
      margin-top: -20px;
   }
`
const ColapsibleGrip = styled.div`
   background: white;
   width: 500px;
   margin: 0 auto;
   border-radius: 5px;

`