

import { LightbulbOutlined as Lightbulb } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";


const Light = styled(Lightbulb)`
    font-size: 120px;
    color: #D3D3D3;
`
const Text = styled(Typography)`
    color: #88868b;
    font-size: 22px;
   
`
const Containers = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20vh;   
`
const EmptyNotes = () => {
    return(
        <Containers style={{margin: 'auto',marginTop: 220}}>
            <Light />
            <Text>Notes you add appear here</Text>
        </Containers>
    )
}

export default EmptyNotes;