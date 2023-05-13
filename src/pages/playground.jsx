
import LEFTEXTAPPLICATION from '../components/left_text';
import MAINTEXTPLAYGROUND from '../components/playground/main_text';
import APPBARRESPRO from '../components/appBarRes';
import { Box } from '@mui/material';
const Playground = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <LEFTEXTAPPLICATION content="Playground"/>
      <MAINTEXTPLAYGROUND />
      <APPBARRESPRO />
    </Box>
  );
};

export default Playground;