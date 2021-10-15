import React, { FC, useEffect, useState } from 'react'
import {
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import { RootStackNavProps } from '../../models/RootStackParamList'
import {
	faArrowRight,
	faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons'
import { Controller, useForm } from 'react-hook-form'
import PhoneNumberInput from './RNPhoneNumberInput'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Toast from 'react-native-toast-message'

interface LoginProps {}
type Props = RootStackNavProps<'Login'> & LoginProps
interface IFormInputs {
	phoneNumber: string
}

const Login: FC<Props> = ({ navigation }): JSX.Element => {
	// const {
	// 	handleSubmit,
	// 	reset,
	// 	control,
	// 	formState: { errors },
	// } = useForm<IFormInputs>()

	useEffect(() => {
		Toast.show({
			type: 'error',
			text1: 'Hello',
			text2: 'This is some something 👋',
		})
	}, [])

	return (
		<View style={styles.container}>
			<View style={styles.info}>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('Tabs')
					}}
				>
					<FontAwesomeIcon icon={faQuestionCircle} size={30} />
				</TouchableOpacity>
			</View>

			<View style={styles.header}>
				<Text
					style={{
						fontFamily: 'RobotoMono-Bold',
						fontSize: 20,
						paddingBottom: 15,
					}}
				>
					Enter your mobile number{' '}
				</Text>
				<Text
					style={{
						fontFamily: 'RobotoMono-Light',
						fontSize: 12,
						color: '#493d8a',
					}}
				>
					By typing your number, you agree to our Terms of service and
					privacy policy{' '}
				</Text>
			</View>
			<View style={styles.inputField}>
				<PhoneNumberInput navigation={navigation} />
			</View>

			{/* <CountryPicker /> */}
			{/* <OtpScreen /> */}
			{/* <Controller
				control={control}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						style={styles.textInput}
						keyboardType='numeric'
						label='Phone Number'
						onBlur={onBlur}
						// onChangeText={onChange, (value) => setPhoneNumber(value)}
						onChangeText={onChange}
						value={value}
					/>
				)}
				name='phoneNumber'
				rules={{
					required: {
						value: true,
						message: 'Phone number is required',
					},
					minLength: 10,
					maxLength: 10,
				}}
			/>
			{errors.phoneNumber?.type === 'maxLength' && (
				<ErrorText>Max length exceeded</ErrorText>
			)}
			{errors.phoneNumber?.type === 'minLength' && (
				<ErrorText>Enter atleast 10 digits</ErrorText>
			)}
			{errors.phoneNumber?.type === 'required' && (
				<ErrorText>{errors.phoneNumber.message}</ErrorText>
			)} */}
		</View>
	)
}

export default Login

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 15,
	},
	info: {
		top: Platform.OS === 'ios' ? 50 : 20,
		justifyContent: 'center',
		alignItems: 'flex-end',
	},
	header: {
		top: Platform.OS === 'ios' ? 50 : 30,
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputField: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
})
