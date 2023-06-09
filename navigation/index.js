import Account from '../screens/Account';
import Chat from '../screens/Chat';
import Discover from '../screens/Discover';
import Favorites from '../screens/Favorites';
import Home from '../screens/Home';
import ViewProfile from '../screens/ViewProfile';
import ReviewProfile from '../screens/ReviewProfile';
import Matched from '../screens/Matched';
import MatchChat from '../screens/MatchChat';
import VideoCall from '../screens/VideoCall';
import SignIn from '../screens/SignIn';
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';
import SettingProfile from '../screens/SettingProfile';
import SignUp from '../screens/SignUp';
import FinishSignUp from '../screens/FinishSignUp';
import AnswerQuestion from '../screens/AnswerQuestion';
import Tendency from '../screens/Tendency';
import RestoreAccount from '../screens/RestoreAccount';
import SettingAddPhoto from '../screens/SettingAddPhoto';
import SettingBirth from '../screens/SettingBirth';
import SettingDatingOriented from '../screens/SettingDatingOriented';
import SettingGender from '../screens/SettingGender';
import SettingInterest from '../screens/SettingInterest';
import SettingName from '../screens/SettingName';
import SettingPhoneNumber from '../screens/SettingPhoneNumber';
import SettingAddress from '../screens/SettingAddress';
import VerifyCreatedPhone from '../screens/VerifyCreatedPhone';
import VerifyOTP from '../screens/VerifyOTP';
import VerifyResetPhone from '../screens/VerifyResetPhone';

const screens = [
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
        name: 'Login',
        component: SignIn,
        tabIconName: 'account-circle-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: true,
        isHideNavigationTab: true,
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
        name: 'MatchChat',
        component: MatchChat,
        tabIconName: 'chat-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: false,
        isHideNavigationTab: false,
    },
    {
        name: 'VideoCall',
        component: VideoCall,
        tabIconName: 'chat-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: true,
        isHideNavigationTab: true,
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
        name: 'ViewProfile',
        component: ViewProfile,
        tabIconName: 'home-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: true,
        isHideNavigationTab: true,
    },
    {
        name: 'ReviewProfile',
        component: ReviewProfile,
        tabIconName: 'home-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: true,
        isHideNavigationTab: true,
    },
    {
        name: 'Profile',
        component: Profile,
        tabIconName: 'account-circle-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: true,
        isHideNavigationTab: true,
    },
    {
        name: 'Chat',
        component: Chat,
        tabIconName: 'chat-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: true,
        isHideNavigationTab: true,
    },
    {
        name: 'Matched',
        component: Matched,
        tabIconName: 'robot-love-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: true,
        isHideNavigationTab: true,
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
        name: 'SettingProfile',
        component: SettingProfile,
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
        name: 'SettingAddress',
        component: SettingAddress,
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
        name: 'FinishSignUp',
        component: FinishSignUp,
        tabIconName: 'account-circle-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: true,
        isHideNavigationTab: true,
    },
    {
        name: 'AnswerQuestion',
        component: AnswerQuestion,
        tabIconName: 'account-circle-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: true,
        isHideNavigationTab: true,
    },
    {
        name: 'Tendency',
        component: Tendency,
        tabIconName: 'account-circle-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTabItem: true,
        isHideNavigationTab: true,
    },
];

export default screens;
