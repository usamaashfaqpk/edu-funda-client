import DashboardLayout from '@/components/layouts/dashboardLayout';
import { Unstable_Grid2 as Grid2, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';


export default function AboutUs() {
    return (
        <DashboardLayout>
            <Grid2 container spacing={2}>
                <Grid2 xs={4}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="240"
                            image="/images/usama.png"
                            sx={{ objectFit: 'contain'}}
                            alt="Welcome"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Usama Ashfaq
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            I am working here as the project planner, course planner and main lead in the software development department of the company,
                            I am here to help creating best user experience design and easy to use website. So, user can enjoy learning the things with us.
                        </Typography>
                        <br />
                        <Typography gutterBottom variant="h5" component="div">
                            Contact Details
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Email: usama9893@gmail.com
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Phone: +923094713661
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Grid2>
                <Grid2 xs={4}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="240"
                            image="/images/ehtisham.png"
                            alt="Welcome"
                            sx={{ objectFit: 'contain'}}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Ehtisham Anwar
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            I am working here as the main lead of course planner and UI/UX design team, I assume what a user is need and try to build the designs
                            accordinglly. So, we can provide the best user experience as well as best content to learn the technical skills to our users.
                        </Typography>
                        <br />
                        <Typography gutterBottom variant="h5" component="div">
                            Contact Details
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Email: Ahtishamanwar438@gmail.com
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Phone: +923353416732
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Grid2>
                <Grid2 xs={4}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="240"
                            image="/images/naina.png"
                            alt="Welcome"
                            sx={{ objectFit: 'contain'}}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Syeda Hussnaina
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        I am working here as the main lead of QA tester and course planner, I assume what a user is need in terms of learning and 
                        So, we can provide the best content to learn the technical skills to our users. I am also supporting the users who are having issues signing up to the website
                        </Typography>
                        <br />
                        <Typography gutterBottom variant="h5" component="div">
                            Contact Details
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Email: Syedahusnaina@gmail.com
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Phone: Not Available
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Grid2>
            </Grid2>
        </DashboardLayout>
    )
};
