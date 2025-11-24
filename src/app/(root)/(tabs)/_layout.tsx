import { icons } from '@/constants';
import { Tabs } from 'heroui-native';
import React, { useState } from 'react';
import { Image, View } from 'react-native';
import Chat from './chat';
import Home from './home';
import Profile from './profile';
import Rides from './rides';

export default function TabsLayout() {
  const [activeTab, setActiveTab] = useState('home');



  return (
    <View className="flex-1">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        {/* Tab Contents */}
        <Tabs.Content value="home" className="flex-1">
          <Home />
        </Tabs.Content>
        <Tabs.Content value="chat" className="flex-1">
          <Chat />
        </Tabs.Content>
        <Tabs.Content value="rides" className="flex-1">
          <Rides />
        </Tabs.Content>
        <Tabs.Content value="profile" className="flex-1">
          <Profile />
        </Tabs.Content>

        {/* Bottom Navigation Bar */}
        <View className="border border-gray-200 rounded-full w-[95%] mx-auto mb-2 ">
          <Tabs.List className="flex-row justify-around items-center px-2">
            <Tabs.Indicator className="" />
            
            <Tabs.Trigger value="home" className="flex-1 items-center justify-center">
              <Image 
                source={icons.home} 
                className="w-6 h-6"
                
              />
              <Tabs.Label className={`text-xs mt-1 font-jakarta ${activeTab === 'home' ? '' : 'hidden'}`}>Home</Tabs.Label>   
            </Tabs.Trigger>

            <Tabs.Trigger value="rides" className="flex-1 items-center justify-center">
              <Image 
                source={icons.list} 
                className="w-6 h-6"
                
              />
              <Tabs.Label className={`text-xs mt-1 font-jakarta ${activeTab === 'rides' ? '' : 'hidden'}`}>Rides</Tabs.Label>
            </Tabs.Trigger>

            <Tabs.Trigger value="chat" className="flex-1 items-center justify-center">
              <Image 
                source={icons.chat} 
                className="w-6 h-6"
                
              />
              <Tabs.Label className={`text-xs mt-1 font-jakarta ${activeTab === 'chat' ? '' : 'hidden'}`}>Chat</Tabs.Label>
            </Tabs.Trigger>

            <Tabs.Trigger value="profile" className="flex-1 items-center justify-center">
              <Image 
                source={icons.profile} 
                className="w-6 h-6"
                
              />
              <Tabs.Label className={`text-xs mt-1 font-jakarta ${activeTab === 'profile' ? '' : 'hidden'}`}>Profile</Tabs.Label>
            </Tabs.Trigger>
          </Tabs.List>
        </View>
      </Tabs>
    </View>
  );
}
