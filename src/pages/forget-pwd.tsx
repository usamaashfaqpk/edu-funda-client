import AuthOnlyLayout from '@/components/layouts/authOnly';
import { Box, Button, TextField, Typography, useTheme } from '@mui/material';
import { useFormik } from 'formik';
import Link from 'next/link';
import * as yup from 'yup';

const validationSchema = yup.object({
    // @ts-ignore
    email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
    // @ts-ignore
    password: yup.string('Enter your password').min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
  });

export default function Signup() {
    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values: any) => {
          alert(JSON.stringify(values, null, 2));
        },
    });

    const theme = useTheme()

    return (
        <AuthOnlyLayout imageNumber={50}>
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
                    <Button color="primary" variant="contained" fullWidth type="submit">
                        Change Password
                    </Button>
                    <br />
                    <br />
                    <Typography variant='body1' sx={{ textAlign: 'center'}}>
                        Coming Soon? <Link href="/login" passHref style={{ textDecoration: 'none', fontWeight: 600, color: theme.palette.primary.main}}>
                            Visit Login
                        </Link>
                    </Typography>
                </form>
            </Box>
        </AuthOnlyLayout>
    )
}
