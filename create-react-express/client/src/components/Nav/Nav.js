import React from "react";
import { Grid, Menu } from "semantic-ui-react";

function Nav() {
  return (
    <nav className="ui inverted menu">

      <Grid padded className="tablet computer only">
        <Menu borderless inverted fluid fixed="top">
          <Menu.Item header as="a" href="/home"> 
            Scrape&Compare
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item as="a" href="/search">Search!</Menu.Item>
            <Menu.Item as="a" href="/about">About</Menu.Item>
            {/* <Menu.Item as="a" href="/profile">Profile</Menu.Item>
            <Menu.Item as="a" href="/help">Help</Menu.Item> */}
          </Menu.Menu>
        </Menu>
      </Grid>
    </nav>
  );
}

export default Nav;
