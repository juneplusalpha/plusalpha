import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as styles from './splash.component.css';

export interface ISplashProps {
  name: string;
}

export interface ISplashStatus {
  name?: string;

}

export default class SplashComponent extends React.Component<ISplashProps, ISplashStatus> {
  constructor(props : ISplashProps) {
    super(props);
    let self: SplashComponent = this;
    this.state = {
        name: "",
    };
  }
  public componentDidMount() { //component first loaded (executed once)
    let self: SplashComponent = this;
    self.updateProps(self.props);
  }
  public componentWillUnmount() { //component unloaded (executed once)
    let self: SplashComponent = this;
  }
  public componentWillReceiveProps (nextProps: ISplashProps) {
    //receive properties from parents
    let self: SplashComponent = this;
    self.updateProps(nextProps);
  }
  private updateProps = (props: ISplashProps) => {
    let self: SplashComponent = this;
    self.setState({name: props.name});
  }

  render() {
    let self: SplashComponent = this;
    //template
    return(
      <div className={styles.wrapper}>
        {self.state.name}
      </div>
    );
  }
}
