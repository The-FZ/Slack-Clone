import React, { Component } from 'react';
import { Grid, Header, Icon, Dropdown, Image } from 'semantic-ui-react';
import firebase from '../../firebase';

export default class UserPanel extends Component {

  state = {
    user: this.props.currentUser
  }

  dropdownOptions = () => {
    return [
      {
        text: <span>Signed as  <strong>{this.state.user.displayName}</strong></span>,
        disabled: true,
        key: 'user'
      },
      {
        text: <span>Change Avatar</span>,
        key: 'avatar'
      },
      {
        text: <span onClick={this.handleSignout}>Sign Out</span>,
        key: 'signout'
      }
    ]
  }

  handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('Signed out !');
      })
  }

  render() {

    const { user } = this.state;
    return (
      <Grid style={{ background: '#4c3c4c' }}>
        <Grid.Column>
          <Grid.Row style={{ padding: '1.2em', margin: 0 }}>
            {/*App header*/}
            <Header inverted floated='left' as='h2'>
              <Icon name='code' />
              <Header.Content>DevChat</Header.Content>
            </Header>
            {/* user dropdown*/}
            <Header style={{ padding: '0.25em' }} as='h4' inverted>
              <Dropdown trigger={
                <span>
                  <Image src={user.photoURL} spaced='right' avatar />
                  {user.displayName}
                </span>
              } options={this.dropdownOptions()} />
            </Header>
          </Grid.Row>

        </Grid.Column>
      </Grid>
    )
  }
}