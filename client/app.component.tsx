import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as styles from './app.component.css';

export interface IAppProps {

}

export interface IAppStatus {

}

export default class AppComponent extends React.Component<IAppProps, IAppStatus> {
  constructor(props : IAppProps) {
    super(props);
    let self: AppComponent = this;
    this.state = {

    };
  }
  public componentDidMount() { //component first loaded (executed once)
    let self: AppComponent = this;
  }
  public componentWillUnmount() { //component unloaded (executed once)
    let self: AppComponent = this;
  }
  public componentWillReceiveProps (nextProps: IAppProps) {
    //receive properties from parents
    let self: AppComponent = this;

  }
  render() {
    let self: AppComponent = this;
    //template
    return(
      <div className={styles.wrapper}>
        {this.props.children}
      </div>
    );
  }
}
