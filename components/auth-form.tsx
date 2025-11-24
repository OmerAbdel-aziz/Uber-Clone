import { icons, images } from "@/constants";
import { Button, Divider, TextField } from "heroui-native";
import React from "react";
import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function AuthForm() {
    return (
        <ScrollView className="flex-1">
                <Image source={images.signUpCar} className="w-full h-60 z-0" />
                <View className="flex-1 px-3 z-10 pt-10">
                <Text className="text-2xl font-bold font-jakartaSemiBold px-5 py-2">Create Your  Account</Text>
            </View>
            <View className="flex-1 px-3 z-10 items-center gap-3">
            <TextField className="w-[90%]">
                <TextField.Label className="font-jakarta">Full Name</TextField.Label>
                <TextField.Input placeholder="Enter your name" className="font-jakarta" />
            </TextField>
            <TextField className="w-[90%]">
                <TextField.Label className="font-jakarta">Email</TextField.Label>
                <TextField.Input placeholder="Enter your email" className="font-jakarta" />

               
            </TextField>
            <TextField className="w-[90%]">
                <TextField.Label className="font-jakarta">Password</TextField.Label>
                <TextField.Input placeholder="Enter your password" className="font-jakarta" />
                
            </TextField>
            
            <Button variant="primary" className="w-[90%] mt-5" onPress={() => {}}>Submit</Button>
            <View className="flex-row items-center justify-center gap-1">
            <Divider className="w-[40%] mt-5" />
            <Text className="text-center mt-5 px-1 font-jakarta">or </Text> 
            <Divider className="w-[40%] mt-5" />
            </View>
            <Button variant="secondary" className="w-[90%] mt-1" onPress={() => {}}>
                <View className="flex-row items-center gap-2">
                    <Image source={icons.google} className="w-5 h-5" />
                    <Text className="font-jakartaMedium">Sign Up with Google</Text>
                </View>
            </Button>
       
            </View>
        </ScrollView>
    );
}
