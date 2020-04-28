import React, { Component } from 'react';
import '../../App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { styled as styledUI } from '@material-ui/core/styles';
import styled from 'styled-components'

const ButtonUI = styledUI(Button)({
  position: 'relative',
  left: '60%'
});

const AppBarUI = styledUI(AppBar)({
  backgroundColor: '#364a65'

});

const SubHeader = styled.div`
 padding: 3%;
 display:flex;
 flex-direction: column;
 justify-content: flex-end;
 background-color: white;
 width:94%;
 height:65px;
 color:black;
`;


class Header extends Component {

  render() {

    return (
      <React.Fragment>

        <AppBarUI position="fixed">
          <Toolbar>
            <Typography variant="h6" className>
              RD Station | Shadow Station
          </Typography>
            <ButtonUI href="https://forms.gle/rq75hkwK2ksWMMfz9" color="inherit">Sugestão de melhoria!</ButtonUI>
          </Toolbar>
        </AppBarUI>

        <SubHeader>
          <h2>RD Station | Shadow Station</h2>
        </SubHeader>
      </React.Fragment>
    );

  }
}

export default Header;

