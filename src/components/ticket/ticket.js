import React from 'react';
import styled from 'styled-components'

const TicketCard = styled.div`

display:flex;
position:relative;
left:44%;
width:50%;
bottom:507px;
`;

const Cards = styled.div`
margin:30px;
`;


const Ticket = () => {

    return (

        <TicketCard>

            <Cards>
                <h3>Ticket de exemplo</h3>
                <h4>Em breve..</h4>

            </Cards>

            <Cards>
                <h3>Vídeo de exemplo</h3>
                <h4>Em breve..</h4>

            </Cards>

            </TicketCard>

    );
}

export default Ticket