/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import PriceList from '../screens/priceList';
import Property from '../screens/property';
import Purchase from '../screens/purchase';
import Chat from '../screens/chat';
import TabBarCustom from './tabbarCustom';
import Images from '../assets';
import SplashScreen from 'react-native-splash-screen';
import PlanProperty from '../screens/planProperty';
import KeyOpen from '../screens/smartOTP';
import CodeOTP from '../screens/codeOTP';
import Success from './../screens/Success/index';
import Form from '../screens/formTS';
import OpenAccount from '../screens/OpenAccout';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBarCustom {...props} />}>
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Trang chủ',
          tabBarIcon: Images.iconHome,
        }}
      />
      <Tab.Screen
        name="PriceList"
        component={PriceList}
        options={{
          headerShown: false,
          tabBarLabel: 'Bảng giá',
          tabBarIcon: Images.iconChart,
        }}
      />
      <Tab.Screen
        name="Property"
        component={Property}
        options={{
          headerShown: false,
          tabBarLabel: 'Tích sản',
          tabBarIcon: Images.iconWallet,
        }}
      />
      <Tab.Screen
        name="Purchase"
        component={Purchase}
        options={{
          headerShown: false,
          tabBarLabel: 'Giao dịch',
          tabBarIcon: Images.iconPurchase,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
          tabBarLabel: 'Chat',
          tabBarIcon: Images.iconChat,
        }}
      />
    </Tab.Navigator>
  );
};

// const AuthStack = () => {
//   return <Stack.Navigator headerMode={'none'}></Stack.Navigator>;
// };

const AppNavigation = () => {
  //   const dispatch = useDispatch();
  //   const user = useSelector(state => state.ReducerAuth.user);
  const _CheckDataAccount = async () => {
    // const value = await AsyncStorage.getItem(ASYN.saveDataUser);
    // dispatch(ActionAuth.AutoLogin(value));
    SplashScreen.hide();
  };
  React.useEffect(() => {
    _CheckDataAccount();
  }, []);

  const user = true;
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen
          options={{headerShown: false}}
          name="TabScreen"
          component={TabScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="PlanProperty"
          component={PlanProperty}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="KeyOpen"
          component={KeyOpen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="CodeOTP"
          component={CodeOTP}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Success"
          component={Success}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Form"
          component={Form}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="OpenAccount"
          component={OpenAccount}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation;
