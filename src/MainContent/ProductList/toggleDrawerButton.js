import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import GlazingForm from '../../DynamicForm/Forms/glaszingForm';
import FormFacade from '../../DynamicForm/Forms/facadeForm';
import Form from '../../DynamicForm/Forms/frameAndDividerForm';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
      <MuiThemeProvider>
      <div>
        
        <RaisedButton
          label="Upload new Products"
          onClick={this.handleToggle}
          margin-left={5}
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
                    <GlazingForm  onSubmit ={fields => this.onSubmit(fields)} />,
                  ]}
                />,
                <MenuItem
                primaryText="Frame and Divider"
                menuItems={[
                    <Form onSubmit ={fields => this.onSubmit(fields)} />,
                  ]}
                />,
              ]}
            />
            <MenuItem
            primaryText="Facade Elements"
            menuItems={[
                <MenuItem
                primaryText="Material"
                menuItems={[
                    <FormFacade onSubmit ={fields => this.onSubmit(fields)} />,
                  ]}
                />,
              ]}
            />
            <MenuItem
            primaryText="HVAC"
            />
        </Drawer>
  
      </div>
      </MuiThemeProvider>
    );
  }
}