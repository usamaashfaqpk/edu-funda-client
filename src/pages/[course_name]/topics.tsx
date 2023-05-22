import DashboardLayout from '@/components/layouts/dashboardLayout';
import { Card, CardActionArea, alpha, CardContent, Typography, Unstable_Grid2 as Grid2, useTheme, Drawer, ListItem, List, Box} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ReactPlayer from 'react-player/youtube';
import CodePreview from '@uiw/react-code-preview';
import axios from 'axios';
import { useState } from 'react';


const AllCourses = (props: any) => {
    const [ selectedTopic, setSelectedTopic ] = useState<any>(props?.data?.attributes?.topics?.data[0]);
    console.log(selectedTopic);
    
    const theme = useTheme()

    return (
        <DashboardLayout>
            <Grid2 container spacing={1}>
                <Grid2 xs={3} sx={{height: '70vh'}}>
                <Drawer
                variant="permanent"
                sx={{
                  width: '200px',
                  marginTop: '124px',
                  marginLeft: '260px',
                  height: '50vh',
                  overflow: 'scroll',
                  flexShrink: 0,
                  [`& .MuiDrawer-paper`]: {
                    background: alpha(theme.palette.primary.main, 0.2),
                    width: '200px',
                    boxSizing: 'border-box',
                    marginTop: '124px',
                    marginLeft: '260px',
                    boxShadow: theme.shadows[12],
                    height: '70vh',
                    overflow: 'scroll'
                 },
                }}
            >
                <List sx={{ padding: '8px'}}>
                    {props?.data?.attributes?.topics?.data.length > 0 ?
                        props?.data?.attributes?.topics?.data.map((item: any) => {
                            return(
                            <ListItem 
                                sx={{ cursor: 'pointer', height: '70px', '&:hover': {
                                    background: alpha(theme.palette.primary.main, 0.6),
                                    color: '#fff'
                                }}}
                                onClick={() => setSelectedTopic(item)}
                            >
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '160px'}}>
                                    <Box sx={{ width: '40px'}}>
                                        <FiberManualRecordIcon sx={{ color: theme.palette.primary.main}} />
                                    </Box>
                                    <Box sx={{ width: '120px'}}>
                                        <Typography textAlign="left" variant='body1'>{item?.attributes?.topic_name}</Typography>
                                    </Box>
                                </Box>
                            </ListItem>)
                        })
                        :   <Typography variant='subtitle1' sx={{ textAlign: 'center' }}><b>No topics to show</b></Typography>}
                </List>
            </Drawer>
                </Grid2>
                <Grid2 xs={9} sx={{height: '70vh'}}>
                <Card>
                <CardActionArea
                    sx={{
                        height: '70vh',
                        overflow: 'scroll'
                    }}
                >
                    {selectedTopic?.attributes?.video_url && (<ReactPlayer
                        url={selectedTopic?.attributes?.video_url}
                        width="100%"
                        controls
                    />)}
                    <CardContent>
                    <Typography gutterBottom variant="h6" component="div" color="text.secondary">
                        Topic:
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {selectedTopic?.attributes?.topic_name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" color="text.secondary">
                        Code Example
                    </Typography>
                    <CodePreview code={selectedTopic?.attributes?.code_example} onlyEdit />
                    <Typography gutterBottom variant="h6" component="div" color="text.secondary">
                        Description
                    </Typography>
                    <Typography variant="body2" color="text.secondary" dangerouslySetInnerHTML={{__html: selectedTopic?.attributes?.topic_description}}>
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" color="text.secondary">
                        Simple Example:
                    </Typography>
                    <Typography variant="body2" color="text.secondary" dangerouslySetInnerHTML={{__html: selectedTopic?.attributes?.simple_example}}>
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
                </Grid2>
            </Grid2>
        </DashboardLayout>
    )
};

// This gets called on every request
export async function getServerSideProps(context: any) {

  const path = context?.req?.url
  const currentCourseName = path?.split('/')[4];
  // Fetch data from external API
  const res = await axios.get(`http://127.0.0.1:1337/api/courses?populate=*`);
  const data = JSON.stringify(res?.data?.data)
  const parseData = JSON.parse(data);
  const singleCourse = parseData?.find((item: any) => item?.attributes?.course_name === currentCourseName)
  // Pass data to the page via props
  return { props: { data: singleCourse } };
}

export default AllCourses;
