import React from 'react'

let Data= null
const HandleTtitle = (state=Data,action) => {
    switch(action.type){
        case "add": return  state=action.pyload
      
        default : return state

    }
}

export default HandleTtitle