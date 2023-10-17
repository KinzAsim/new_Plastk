import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  GetStarted,
  Login,
  Splash_Screen,
  SignUp,
  EmailVerification,
  EmailVerificationConfirmed,
  VerifyGetStarted,
  SafeSecureCarousel,
  SelectPhotoType,
  ScanFrontCard,
  ProcessingID,
  IDConfirmation,
  SelfieExample,
  TakeSelfie,
  AccountDetail,
  EmploymentInfo,
  FinancialInfo,
  FundsRequested,
  FundsReceived,
  EquifaxVerificationStart,
  EquifaxVerifyInformation,
  EquifaxQuestion,
  EquifaxVerifyComplete,
  EquifaxVerifyIncomplete,
  ProcessingFR,
  Upload_Additional_Doc,
  MemberID_Login,
  MemberID_SignUp,
  UploadDocuments,
  Welcome,
  ConfirmationSet,
  PinCode,
  ScanFace,
  ForgotPassword,
  Explore,
  BAP_Promotion,
} from '@screens';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={Splash_Screen} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="MemberID_Login" component={MemberID_Login} />
      <Stack.Screen name="MemberID_SignUp" component={MemberID_SignUp} />
      <Stack.Screen name="EmailVerification" component={EmailVerification} />
      <Stack.Screen
        name="EquifaxVerifyInformation"
        component={EquifaxVerifyInformation}
      />
      <Stack.Screen
        name="EmailVerificationConfirmed"
        component={EmailVerificationConfirmed}
      />
      <Stack.Screen name="AccountDetail" component={AccountDetail} />
      <Stack.Screen name="EmploymentInfo" component={EmploymentInfo} />

      <Stack.Screen name="FinancialInfo" component={FinancialInfo} />
      <Stack.Screen name="FundsRequested" component={FundsRequested} />
      <Stack.Screen name="FundsReceived" component={FundsReceived} />
      <Stack.Screen
        name="EquifaxVerificationStart"
        component={EquifaxVerificationStart}
      />
      <Stack.Screen name="EquifaxQuestion" component={EquifaxQuestion} />

      <Stack.Screen
        name="EquifaxVerifyComplete"
        component={EquifaxVerifyComplete}
      />
      <Stack.Screen
        name="EquifaxVerifyIncomplete"
        component={EquifaxVerifyIncomplete}
      />
      <Stack.Screen name="VerifyGetStarted" component={VerifyGetStarted} />
      <Stack.Screen name="SafeSecureCarousel" component={SafeSecureCarousel} />
      <Stack.Screen name="SelectPhotoType" component={SelectPhotoType} />
      <Stack.Screen name="ProcessingID" component={ProcessingID} />
      <Stack.Screen name="SelfieExample" component={SelfieExample} />
      <Stack.Screen name="TakeSelfie" component={TakeSelfie} />
      <Stack.Screen name="IDConfirmation" component={IDConfirmation} />
      <Stack.Screen name="ScanFrontCard" component={ScanFrontCard} />
      <Stack.Screen name="ProcessingFR" component={ProcessingFR} />
      <Stack.Screen
        name="Upload_Additional_Doc"
        component={Upload_Additional_Doc}
      />
      <Stack.Screen name="UploadDocuments" component={UploadDocuments} />
      <Stack.Screen name="ConfirmationSet" component={ConfirmationSet} />
      <Stack.Screen name="PinCode" component={PinCode} />
      <Stack.Screen name="ScanFace" component={ScanFace} />
    </Stack.Navigator>
  );
};

export default AuthStack;
