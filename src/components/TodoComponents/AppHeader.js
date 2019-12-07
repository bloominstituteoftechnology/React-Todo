import React from "react";
import { Header, Icon } from "semantic-ui-react";

export default function AppHeader() {
  return (
    <Header as="h1" style={{textAlign:'center'}}>
      <Icon name="tasks" />
      <Header.Content>
        Simple Notes
        <Header.Subheader>A Simple Todo App</Header.Subheader>
      </Header.Content>
    </Header>
  );
}
