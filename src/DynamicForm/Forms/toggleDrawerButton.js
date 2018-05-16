import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Form from './windowForm';

export default class DrawerButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  state = {
    fields:{}
  };

  onSubmit = (fields) => {
    this.setState({fields});
    console.log('App component got: ', fields);
  };

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <RaisedButton
          label="Upload new Products"
          onClick={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={230}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
            <MenuItem
            primaryText="Window"
            menuItems={[
                <MenuItem
                primaryText="Glazing"
                menuItems={[
                    <Form onSubmit ={fields => this.onSubmit(fields)} />,
                  ]}
                />,
              ]}
            />
            <MenuItem onClick={this.handleClose}>Facade Elements</MenuItem>
        </Drawer>
      </div>
    );
  }
}