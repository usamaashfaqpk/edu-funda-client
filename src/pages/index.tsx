import AuthOnlyLayout from '@/components/layouts/authOnly';
import { useAuth } from '../context/AuthContext';
import { Box, Button, Divider, TextField, Typography, useTheme } from '@mui/material';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const validationSchema = yup.object({
    // @ts-ignore
    email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
    // @ts-ignore
    password: yup.string('Enter your password').min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
  });

export default function Login() {
    const router = useRouter();
    const { login } = useAuth();
    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values: any) => {
            try {
                await login(values.email, values.password)
                router.push('/dashboard');
            } catch (err) {
                console.log(err)
                toast.error("Email or Password is incorrect");
            }
        },
    });

    const theme = useTheme()

    return (
        <AuthOnlyLayout imageNumber={5}>
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
                        Submit
                    </Button>
                    <br />
                    <br />
                    <Typography variant='body1' sx={{ textAlign: 'center'}}>
                        Don&apos;t have an account? <Link href="/signup" passHref style={{ textDecoration: 'none', fontWeight: 600, color: theme.palette.primary.main}}>
                            Create Account
                        </Link>
                    </Typography>
                    <br />
                    <Divider />
                    <br />
                    <Typography variant='body1' sx={{ textAlign: 'center'}}>
                        Don&apos;t remember? <Link href="/forget-pwd" passHref style={{ textDecoration: 'none', fontWeight: 600, color: theme.palette.primary.main}}>
                            Change Password
                        </Link>
                    </Typography>
                </form>
            </Box>
        </AuthOnlyLayout>
    )
}
