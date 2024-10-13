import { Container, Stack } from '@mui/material'
import { SignUp as SignUpClerk } from '@clerk/clerk-react'
// import { SignUpForm } from '../components'

const SignUp = () => {
	return (
		<Container maxWidth="xl">
			{/* <SignUpForm /> */}
			<Stack alignItems="center" minHeight="calc(100vh - 100px)" justifyContent="center">
				<SignUpClerk path="/signup" routing="path" signInUrl="login" />
			</Stack>
		</Container>
	)
}

export default SignUp
