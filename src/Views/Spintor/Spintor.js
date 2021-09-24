import React from 'react';
import { wobble } from 'react-animations'
import Radium  from 'radium';
import { JsxEmit } from 'typescript';
 
const styles = {
wobble:{
    animation: 'x 10s',
    animationName: [Radium.keyframes(wobble, 'wobble')]
  }
}
 
export const Spintor = () => {
    return(
        <Radium.StyleRoot >
         <div style={styles.wobble}>
          <img src="spjurter.png" alt="bajs" width="600" height="600"  />
         </div > 
        </Radium.StyleRoot>
    )
};
 
