import Account from '../screens/Account';
import Chat from '../screens/Chat';
import Discover from '../screens/Discover';
import Favorites from '../screens/Favorites';
import Home from '../screens/Home';
import ProfileDetail from '../screens/ProfileDetail';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';
import SignUp from '../screens/SignUp';
import FinishSignUp from '../screens/FinishSignUp';
import RestoreAccount from '../screens/RestoreAccount';
import SettingAddPhoto from '../screens/SettingAddPhoto';
import SettingBirth from '../screens/SettingBirth';
import SettingDatingOriented from '../screens/SettingDatingOriented';
import SettingGender from '../screens/SettingGender';
import SettingInterest from '../screens/SettingInterest';
import SettingName from '../screens/SettingName';
import SettingPhoneNumber from '../screens/SettingPhoneNumber';
import VerifyCreatedPhone from '../screens/VerifyCreatedPhone';
import VerifyOTP from '../screens/VerifyOTP';
import VerifyResetPhone from '../screens/VerifyResetPhone';

const screens = [
    {
        name: 'Login',
        component: Login,
        tabIconName: 'account-circle-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: true,
        isHideNavigationTab: true,
    },
    {
        name: 'Home',
        component: Home,
        tabIconName: 'home-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: false,
        isHideNavigationTab: false,
    },
    {
        name: 'Discover',
        component: Discover,
        tabIconName: 'compass-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: false,
        isHideNavigationTab: false,
    },
    {
        name: 'Favorites',
        component: Favorites,
        tabIconName: 'fire',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: false,
        isHideNavigationTab: false,
    },
    {
        name: 'Chat',
        component: Chat,
        tabIconName: 'chat-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: false,
        isHideNavigationTab: false,
    },
    {
        name: 'Account',
        component: Account,
        tabIconName: 'account-circle-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: false,
        isHideNavigationTab: false,
    },
    {
        name: 'Profile',
        component: Profile,
        tabIconName: 'account-circle-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: true,
        isHideNavigationTab: false,
    },
    {
        name: 'EditProfile',
        component: EditProfile,
        tabIconName: 'account-circle-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: true,
        isHideNavigationTab: true,
    },
    {
        name: 'SignUp',
        component: SignUp,
        tabIconName: 'account-circle-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: true,
        isHideNavigationTab: true,
    },
    {
        name: 'RestoreAccount',
        component: RestoreAccount,
        tabIconName: 'account-circle-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: true,
        isHideNavigationTab: true,
    },
    {
        name: 'SettingAddPhoto',
        component: SettingAddPhoto,
        tabIconName: 'account-circle-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: true,
        isHideNavigationTab: true,
    },
    {
        name: 'SettingBirth',
        component: SettingBirth,
        tabIconName: 'account-circle-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: true,
        isHideNavigationTab: true,
    },
    {
        name: 'SettingDatingOriented',
        component: SettingDatingOriented,
        tabIconName: 'account-circle-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: true,
        isHideNavigationTab: true,
    },
    {
        name: 'SettingGender',
        component: SettingGender,
        tabIconName: 'account-circle-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: true,
        isHideNavigationTab: true,
    },
    {
        name: 'SettingInterest',
        component: SettingInterest,
        tabIconName: 'account-circle-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: true,
        isHideNavigationTab: true,
    },
    {
        name: 'SettingName',
        component: SettingName,
        tabIconName: 'account-circle-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: true,
        isHideNavigationTab: true,
    },
    {
        name: 'SettingPhoneNumber',
        component: SettingPhoneNumber,
        tabIconName: 'account-circle-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: true,
        isHideNavigationTab: true,
    },
    {
        name: 'VerifyCreatedPhone',
        component: VerifyCreatedPhone,
        tabIconName: 'account-circle-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: true,
        isHideNavigationTab: true,
    },
    {
        name: 'VerifyOTP',
        component: VerifyOTP,
        tabIconName: 'account-circle-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: true,
        isHideNavigationTab: true,
    },
    {
        name: 'VerifyResetPhone',
        component: VerifyResetPhone,
        tabIconName: 'account-circle-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: true,
        isHideNavigationTab: true,
    },
    {
        name: 'ProfileDetail',
        component: ProfileDetail,
        tabIconName: 'account-circle-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: true,
        isHideNavigationTab: true,
    },
    {
        name: 'FinishSignUp',
        component: FinishSignUp,
        tabIconName: 'account-circle-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: true,
        isHideNavigationTab: true,
    },
];

export default screens;
