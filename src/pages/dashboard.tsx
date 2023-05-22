import DashboardLayout from '@/components/layouts/dashboardLayout';
import { useAuth } from '../context/AuthContext';
import { Unstable_Grid2 as Grid2, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

export default function Dashboard() {
    const { userData } = useAuth();

    return (
        <DashboardLayout>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="240"
                        image="/images/welcome-image.jpeg"
                        sx={{ objectFit: 'contain'}}
                        alt="Welcome"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Welcome {userData?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Welcome to the Edu Funda family! We're elated to have you onboard of our community. We will continue sending emails (unless you decide to unsubscribe!) to keep you updated on all the latest and greatest news.
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <br />
            <br />
            <Grid2 container spacing={2}>
                <Grid2 xs={6}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="240"
                            image="/images/courses-png-4.png"
                            alt="Welcome"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Guide to All Courses
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            If you want to see the courses that we are offering, you can go to All courses section of the website. <br/>
                            In order to go to all courses section, click on All Courses in the side bar.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Grid2>
                <Grid2 xs={6}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="240"
                            image="/images/courses-image.png"
                            alt="Welcome"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Guide to Your Courses
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            If you want to see the courses that you have already taken, you can go to Your courses section of the website. <br/>
                            In order to go to your courses section, click on Your Courses in the side bar.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Grid2>
            </Grid2>
            <br />
            <br />
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="240"
                        image="/images/coming-soon.svg"
                        alt="Welcome"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        New Features
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        A lot of new features are coming soon, Our team is consistently working on the updates and new courses. So, Stay Tuned!
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </DashboardLayout>
    )
};
