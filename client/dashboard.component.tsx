import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as styles from './dashboard.component.css';

export interface IDashboardProps {

}

export interface IDashboardStatus {

}

export default class DashboardComponent extends React.Component<IDashboardProps, IDashboardStatus> {
  constructor(props : IDashboardProps) {
    super(props);
    let self: DashboardComponent = this;
    this.state = {

    };
  }
  public componentDidMount() { //component first loaded (executed once)
    let self: DashboardComponent = this;
  }
  public componentWillUnmount() { //component unloaded (executed once)
    let self: DashboardComponent = this;
  }
  public componentWillReceiveProps (nextProps: IDashboardProps) {
    //receive properties from parents
    let self: DashboardComponent = this;

  }
  render() {
    let self: DashboardComponent = this;
    //template
    return(
      <div className={styles.wrapper}>
        dashboard
      </div>
    );
  }
}
