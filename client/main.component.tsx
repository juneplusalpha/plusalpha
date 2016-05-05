import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as styles from './main.component.css';

import SplashComponent from './splash.component';
import DashboardComponent from './dashboard.component';

var Settings = require('./constraints/settings.json');

export interface IMainProps {

}

export interface IMainStatus {
  name?: string;
  image?: string;
}

export default class MainComponent extends React.Component<IMainProps, IMainStatus> {
  constructor(props : IMainProps) {
    super(props);
    let self: MainComponent = this;
    this.state = {
      name: "",
      image: "abc.png",
    };
  }
  public componentDidMount() { //component first loaded (executed once)
    let self: MainComponent = this;

    setTimeout(function(){
      self.setState({
        name: "juneeeeeeee",
      });
    }, 2500);
  }
  public componentWillUnmount() { //component unloaded (executed once)
    let self: MainComponent = this;
  }
  public componentWillReceiveProps (nextProps: IMainProps) {
    //receive properties from parents
    let self: MainComponent = this;

  }
  render() {
    let self: MainComponent = this;
    //template
    return(
      <div className={styles.wrapper}>
        <SplashComponent name={self.state.name}/>
        <DashboardComponent image={self.state.image}/>
      </div>
    );
  }
}
