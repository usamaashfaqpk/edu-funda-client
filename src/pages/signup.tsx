import AuthOnlyLayout from '@/components/layouts/authOnly';
import { useAuth } from '../context/AuthContext';
import { Box, Button, TextField, Typography, useTheme } from '@mui/material';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as yup from 'yup';

const validationSchema = yup.object({
    // @ts-ignore
    username: yup.string('Enter your Name').required('Name is required'),
    // @ts-ignore
    email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
    // @ts-ignore
    password: yup.string('Enter your password').min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
  });

export default function Signup() {
    const router = useRouter();
    const { signup, user } = useAuth();
    const formik = useFormik({
        initialValues: {
          username: '',
          email: '',
          password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values: any) => {
        try {
            await signup(values.email, values.password, values.username)
            toast.success("Your account has been created");
            router.push('/');
        } catch (err) {
            console.log(err)
            toast.error("Error Creating Account");
        }
        },
    });

    const theme = useTheme()

    return (
        <AuthOnlyLayout imageNumber={150}>
            <Box
                sx={{
                    padding: '20px 0px',
                    width: '316px'
                }}
            >
                <br />
                <br />
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="username"
                        name="username"
                        label="Name"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username}
                    />
                    <br />
                    <br />
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <br />
                    <br />
                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <br />
                    <br />
                    <Button color="primary" variant="contained" fullWidth type="submit">
                        SignUp
                    </Button>
                    <br />
                    <br />
                    <Typography variant='body1' sx={{ textAlign: 'center'}}>
                        Already have an account? <Link href="/login" passHref style={{ textDecoration: 'none', fontWeight: 600, color: theme.palette.primary.main}}>
                            Visit Login
                        </Link>
                    </Typography>
                    <br />
                    <br />
                    <Typography variant='body1' sx={{ textAlign: 'center'}}>
                        Having Issues? <Link href="mailto:edu.funda.group@gmail.com" passHref style={{ textDecoration: 'none', fontWeight: 600, color: theme.palette.primary.main}}>
                            Let us know
                        </Link>
                    </Typography>
                </form>
            </Box>
        </AuthOnlyLayout>
    )
}
