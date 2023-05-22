import React, { useEffect } from "react";
import { doc, getDoc } from '@firebase/firestore';
import { AppBar, Box, Drawer, List, ListItem, Typography, alpha, useTheme } from "@mui/material";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { db } from '../../config/firebase';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PanoramaIcon from '@mui/icons-material/Panorama';
import LogoutIcon from '@mui/icons-material/Logout';
import GroupsIcon from '@mui/icons-material/Groups';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import { toast } from "react-toastify";
import ResponsiveAppBar from "../header";
import { BorderBottom, Logout } from "@mui/icons-material";
import Link from "next/link";

interface MyProps {
    children?: React.ReactNode;
 }

const DashboardLayout = ({ children }: MyProps) => {
    const { user, userData, setUserData, logout } = useAuth();
    const router = useRouter();
    const theme = useTheme();

    useEffect(() => {

        const getData = async () => {
            if(!userData) {
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);
                setUserData(docSnap.data())
            }
        }
        
        getData();
    }, [])

    return (
        <>
        <ResponsiveAppBar />
        <Box sx={{ width: '100%', display: 'flex'}}>
            <Drawer
                variant="permanent"
                sx={{
                  width: '200px',
                  marginTop: '64px',
                  flexShrink: 0,
                  [`& .MuiDrawer-paper`]: {
                    background: alpha(theme.palette.primary.main, 0.2),
                    width: '200px',
                    boxSizing: 'border-box',
                    marginTop: '64px',
                    boxShadow: theme.shadows[12],
                 },
                }}
            >
                <List sx={{ paddingTop: 0}}>
                    <ListItem 
                      sx={{ cursor: 'pointer', height: '70px', '&:hover': {
                        background: alpha(theme.palette.primary.main, 0.6),
                        color: '#fff'
                      }}}
                      onClick={() => router.push("/dashboard")}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '160px'}}>
                        <Box sx={{ width: '40px'}}>
                        <DashboardIcon sx={{ color: theme.palette.primary.main}} />
                        </Box>
                        <Box sx={{ width: '120px'}}>
                            <Typography textAlign="left" variant='body1'>Dashboard</Typography>
                        </Box>
                        </Box>
                    </ListItem>
                    <ListItem
                      sx={{ cursor: 'pointer', height: '70px', '&:hover': {
                        background: alpha(theme.palette.primary.main, 0.6),
                        color: '#fff'
                      }}}
                      onClick={() => router.push("/all-courses")}
                      >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '160px'}}>
                        <Box sx={{ width: '40px'}}>
                            <MenuBookIcon sx={{ color: theme.palette.primary.main}} />
                        </Box>
                        <Box sx={{ width: '120px'}}>
                            <Typography textAlign="left" variant='body1'>All Courses</Typography>
                        </Box>
                        </Box>
                    </ListItem>
                    <ListItem
                      sx={{ cursor: 'pointer', height: '70px', '&:hover': {
                        background: alpha(theme.palette.primary.main, 0.6),
                        color: '#fff'
                      }}}
                      onClick={() => router.push("/my-courses")}
                      >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '160px'}}>
                        <Box sx={{ width: '40px'}}>
                            <ImportContactsIcon sx={{ color: theme.palette.primary.main}} />
                        </Box>
                        <Box sx={{ width: '120px'}}>
                            <Typography textAlign="left" variant='body1'>Your Courses</Typography>
                        </Box>
                        </Box>
                    </ListItem>
                    <ListItem
                      sx={{ cursor: 'pointer', height: '70px', '&:hover': {
                        background: alpha(theme.palette.primary.main, 0.6),
                        color: '#fff'
                      }}}
                      onClick={() => router.push('/upload-picture')}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '160px'}}>
                        <Box sx={{ width: '40px'}}>
                            <PanoramaIcon sx={{ color: theme.palette.primary.main}} />
                        </Box>
                        <Box sx={{ width: '120px'}}>
                            <Typography textAlign="left" variant='body1'>Upload Picture</Typography>
                        </Box>
                        </Box>                        
                    </ListItem>
                    <ListItem
                      sx={{ cursor: 'pointer', height: '70px', '&:hover': {
                        background: alpha(theme.palette.primary.main, 0.6),
                        color: '#fff'
                      }}}
                      onClick={() => router.push("mailto:edu.funda.group@gmail.com")}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '160px'}}>
                        <Box sx={{ width: '40px'}}>
                            <MarkEmailUnreadIcon sx={{ color: theme.palette.primary.main}} />
                        </Box>
                        <Box sx={{ width: '120px'}}>
                            <Typography textAlign="left" variant='body1'>Email Us</Typography>
                        </Box>
                        </Box>                                                
                    </ListItem>
                    <ListItem
                      sx={{ cursor: 'pointer', height: '70px', '&:hover': {
                        background: alpha(theme.palette.primary.main, 0.6),
                        color: '#fff'
                      }}}
                      onClick={() => router.push("about-us")}
                      >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '160px'}}>
                        <Box sx={{ width: '40px'}}>
                            <GroupsIcon sx={{ color: theme.palette.primary.main}} />
                        </Box>
                        <Box sx={{ width: '120px'}}>
                            <Typography textAlign="left" variant='body1'>About Our Team</Typography>
                        </Box>
                        </Box>                                                
                    </ListItem>
                    <ListItem
                      sx={{ cursor: 'pointer', height: '70px', '&:hover': {
                        background: alpha(theme.palette.primary.main, 0.6),
                        color: '#fff'
                      }}}
                      onClick={logout}
                      >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '160px'}}>
                        <Box sx={{ width: '40px'}}>
                            <LogoutIcon sx={{ color: theme.palette.primary.main}} />
                        </Box>
                        <Box sx={{ width: '120px'}}>
                            <Typography textAlign="left" variant='body1'>Logout</Typography>
                        </Box>
                        </Box>                                                
                    </ListItem>
                </List>
            </Drawer>
            <Box sx={{ width: 'calc(100% - 200px)', minHeight: 'calc(100vh - 180px)', padding: '60px', marginTop: '64px', background: alpha(theme.palette.primary.main, 0.2)}}>
                {children}
            </Box>
        </Box>
        </>
    )
};

export default DashboardLayout;