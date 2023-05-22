import React, { useEffect } from "react";
import { Unstable_Grid2 as Grid2, Box } from "@mui/material";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

interface MyProps {
    children?: React.ReactNode;
    imageNumber: number;
 }

const AuthOnlyLayout = ({ children, imageNumber }: MyProps) => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if(user)
        {
            router.push('/dashboard');
            toast.info('Please logout first to access login page')
        }
    }, [])

    return (
        <Grid2 container spacing={2} sx={{width: '100%', margin: 0}}>
            <Grid2 xs={12} lg={4} padding={0} sx={{ display: 'flex', justifyContent: 'center'}}>
                <Box sx={{ height: '70vh', minWidth: '350px', width: '60%', margin: '80px', display: 'flex', justifyContent: 'center'}}>
                    <Box>
                        <Box
                            sx={{
                                height: '120px',
                                width: '316px',
                                background: `url(/images/logo-edu.png)`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'
                            }}
                        >

                        </Box>
                        {children}
                    </Box>
                </Box>
            </Grid2>
            <Grid2 xs={0} lg={8} padding={0}>
            <Box
                sx={{
                    width: "100%",
                    height: "100vh",
                    background: `url(https://d2zgwgwnjtzdp1.cloudfront.net/common/loginbackgroundimages/${imageNumber}.jpg)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }} 
            />
            </Grid2>
        </Grid2>
    )
};

export default AuthOnlyLayout;