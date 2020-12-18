import React from 'react';
import ReactDOM from 'react-dom';
import clientStyle from "./client-style.module.css";
import "./style.css";

class MainApp extends React.Component{
  constructor(){
    super()
    this.state = {
      title : "Batman"
    }
  }

  render(){
    let mystyle = { 
      color : 'darkblue', 
      backgroundColor : 'lightblue', 
      padding : '10px', 
      fontFamily : 'Arial', 
      textAlign : 'center' 
    }
    return <div>
            <p style={ { color : 'darkslategray', backgroundColor : 'cornsilk', padding : '10px', fontFamily : 'Arial', textAlign : 'center' } }> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis ligula elit, a fermentum ante elementum eget. Phasellus congue rutrum sapien et tristique. Suspendisse venenatis justo risus. Integer commodo est egestas lorem tincidunt, eu pulvinar leo porttitor. Praesent efficitur mollis malesuada. Sed laoreet ipsum purus, ut dictum turpis vulputate in. Nunc convallis neque posuere risus rhoncus eleifend. Nam vel lacus in mauris porta luctus eleifend sit amet odio. Proin volutpat venenatis metus, a pharetra felis porta sit amet. Quisque scelerisque turpis tristique, feugiat sapien ac, dapibus nisi. Donec volutpat placerat sem eu facilisis. Phasellus auctor commodo dolor. Vestibulum congue ipsum augue, non viverra mauris faucibus sed. Suspendisse varius urna mattis nisl elementum molestie. </p>
            <p style={ mystyle }> Aliquam rhoncus velit eget nunc congue, ut pulvinar diam porttitor. Integer at viverra lectus. Proin venenatis dapibus mauris, nec accumsan urna varius in. Aenean consequat feugiat elit, id ornare metus feugiat vel. Duis non vulputate enim. Nullam lacinia, leo id dapibus tempor, enim est sagittis eros, quis ornare purus ipsum vel quam. Nulla eu metus a quam fermentum consectetur. Duis hendrerit vestibulum urna, quis tempor massa dapibus at. Donec velit leo, faucibus a enim eu, luctus convallis urna. Curabitur dictum pretium lorem, quis tempus arcu convallis nec. Fusce et tellus id eros dignissim tempor bibendum eget tellus. Nulla pharetra, nisi ac mattis lobortis, ipsum est pharetra nisi, interdum efficitur neque purus in ex. Mauris consectetur eros eget tincidunt porta. Fusce ac feugiat ipsum. </p>
            <p className="player"> Aenean viverra scelerisque sem, sodales cursus orci luctus eu. Vivamus facilisis, arcu eu fringilla fermentum, elit nisi finibus enim, in pharetra magna mi sed nulla. Aliquam ut ex ut nibh convallis imperdiet. In non ipsum sed quam fermentum sodales eget a leo. Donec luctus nulla quis maximus malesuada. Integer turpis arcu, bibendum ac nulla quis, lobortis imperdiet mi. Donec ornare ex dapibus lacus egestas gravida. Donec tristique ipsum ligula, nec cursus metus commodo eu. Mauris vitae dapibus ipsum. Donec sed fermentum felis, non pretium mi. Phasellus a odio ut sapien accumsan congue non ac turpis.</p>
            <p className={ clientStyle.player }> Aliquam rhoncus velit eget nunc congue, ut pulvinar diam porttitor. Integer at viverra lectus. Proin venenatis dapibus mauris, nec accumsan urna varius in. Aenean consequat feugiat elit, id ornare metus feugiat vel. Duis non vulputate enim. Nullam lacinia, leo id dapibus tempor, enim est sagittis eros, quis ornare purus ipsum vel quam. Nulla eu metus a quam fermentum consectetur. Duis hendrerit vestibulum urna, quis tempor massa dapibus at. Donec velit leo, faucibus a enim eu, luctus convallis urna. Curabitur dictum pretium lorem, quis tempus arcu convallis nec. Fusce et tellus id eros dignissim tempor bibendum eget tellus. Nulla pharetra, nisi ac mattis lobortis, ipsum est pharetra nisi, interdum efficitur neque purus in ex. Mauris consectetur eros eget tincidunt porta. Fusce ac feugiat ipsum. </p>
          </div>
  }
}

ReactDOM.render(<MainApp/>,
  document.getElementById('root')
);
