import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as styles from './dashboard.component.css';
var Settings = require('./constraints/settings.json');

export interface IDashboardProps {
  image: string;
}

export interface IDashboardStatus {
  image: string;
}

export default class DashboardComponent extends React.Component<IDashboardProps, IDashboardStatus> {
  constructor(props : IDashboardProps) {
    super(props);
    let self: DashboardComponent = this;
    this.state = {
      image: "",
    };
  }
  public componentDidMount() { //component first loaded (executed once)
    let self: DashboardComponent = this;
    self.updateProps(self.props);
  }
  public componentWillUnmount() { //component unloaded (executed once)
    let self: DashboardComponent = this;
  }
  public componentWillReceiveProps (nextProps: IDashboardProps) {
    //receive properties from parents
    let self: DashboardComponent = this;
    self.updateProps(nextProps);
  }
  private updateProps = (props: IDashboardProps) => {
    let self: DashboardComponent = this;
    self.setState({
      image: props.image
    });
  }


  render() {
    let self: DashboardComponent = this;
    //template
    console.log(self.state.image);
    return(
      <div className={styles.wrapper}>
        dashboard
        <img src={
          Settings.uBaseName + Settings.uStaticImage + self.state.image
        }/>
      </div>
    );
  }
}
