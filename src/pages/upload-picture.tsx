import DashboardLayout from '@/components/layouts/dashboardLayout';
import { useAuth } from '../context/AuthContext';
import { Card, CardActionArea, CardContent, CardMedia, Typography, useTheme} from '@mui/material';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useRouter } from 'next/router';
import { FileUploader } from '../components/fileUploader';
import { db } from '@/config/firebase';


export default function AboutUs() {
    const router = useRouter();
    const { userData, setUserData, user } = useAuth();
    console.log(userData);
    
    const theme = useTheme()

    return (
        <DashboardLayout>
            <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="240"
                            image="/images/profile-background.jpeg"
                            alt="Welcome"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Upload Profile Picture
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            You can upload the profile picture from the button given below, there are 5 main options from where you upload the profile picture,
                            Local Files, Direct Link, Google Drive, DropBox, OneDrive 
                        </Typography>
                        <br />
                        <FileUploader
                            buttonText='Upload Profile'
                            publicKey="8bbe7ff93b7ed24e2022"
                            onFileSelect={(file) => {
                                if (file) {
                                    // @ts-ignore
                                    const files = file.files();
                                    files[0].done(async (info: any) => {
                                    const ref = doc(db, "users", userData.uid);
                                    try {
                                        await updateDoc(ref, {
                                            profileId: info.uuid
                                        });
                                        const docRef = doc(db, "users", user.uid);
                                        const docSnap = await getDoc(docRef);
                                        setUserData(docSnap.data())
                                    }catch (err)
                                    {
                                        console.log("///////////Error", err);
                                    }
                                });
                                }
                            }}
                        />
                        </CardContent>
                    </CardActionArea>
                </Card>
        </DashboardLayout>
    )
};
