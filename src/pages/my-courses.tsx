import DashboardLayout from '@/components/layouts/dashboardLayout';
import { useAuth } from '../context/AuthContext';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Unstable_Grid2 as Grid2, useTheme} from '@mui/material';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useRouter } from 'next/router';
import axios from 'axios';
import { FileUploader } from '../components/fileUploader';
import { db } from '@/config/firebase';


const AllCourses = (props: any) => {
    console.log(props);
    const router = useRouter();
    const { userData, setUserData, user } = useAuth();
    
    const theme = useTheme()

    return (
        <DashboardLayout>
            <Grid2 container spacing={2}>
                {props?.data?.map((item: any) => {
                    return(
                        <Grid2 xs={3} key={item.attributes.course_name}>
                            <Card onClick={() => router.push(`/${item.attributes.course_name}/topics`)}>
                                <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image={`http://localhost:1337${item?.attributes?.course_image?.data?.attributes?.url}`}
                                    alt="Welcome"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.attributes.course_name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.attributes.course_description || "No description is available"}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        </Grid2>
                    )
                })}
            </Grid2>
        </DashboardLayout>
    )
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await axios.get(`http://127.0.0.1:1337/api/courses?populate=*`);
  const data = JSON.stringify(res.data.data)
  // Pass data to the page via props
  return { props: { data: JSON.parse(data) } };
}

export default AllCourses;
