import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, SafeAreaView , Pressable} from 'react-native'
import { useState, useEffect } from 'react';

const Layout1 = ({navigation}) => {
    useEffect(() => {
        navigation.setOptions({
          headerShown: false,  // Ẩn header
        });
      }, [navigation]);

    const users = [
        {
            email: 'vinh@gmail.com',
        }
    ]

    const [email, setEmail] = useState('');

    const onContinuePressed = () => {
        if (users.some(user => user.email === email)) {
          navigation.navigate('Layout2');
        } else {
          Alert.alert('Lỗi', 'Email hoặc mật khẩu không đúng');
        }
      };
    return (
        <SafeAreaView style = {
            styles.constain
        }>
            <View style={styles.view}>
                <Image source={require('../../assets/Image 95.png') } style={{width:250,height:250}}></Image>
                <Text style={styles.text}>MANAGE YOUR {'\n'}TASK</Text>
            </View>
            <View style={{marginTop: 50 }}>
            <View style={styles.viewText}>
                    <Image source={require("../../assets/Frame.png")}
                        style={{position: "absolute", left: 12, height: "100%", width: 32}}
                        resizeMode='contain'
                    />
                    <TextInput placeholder='Enter your name' style={styles.textIp}
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                    </View>
                </View>
                <View 
                style = {styles.viewBtn}>
                <Pressable style={styles.btn} 
                onPress={onContinuePressed}>
                <Text style={styles.btnText}>GET STARTED  </Text>
            </Pressable>
            </View>
        </SafeAreaView>
    );
}
export default Layout1

const styles = StyleSheet.create({
    constain: {
        paddingVertical: 50, paddingHorizontal: 15, flex: 1, paddingTop : 30,
    },
    view:{
        alignItems: 'center',
    },
    text: {
        paddingTop: 30,
        fontSize: 27,
        fontFamily:'Epilogue',
        fontWeight:700,
        color:'#8353E2',
        lineHeight:36,
        textAlign:'center',
    },
    viewText : {
        borderWidth: 1, 
        borderRadius : 10,
        backgroundColor: "#fff",
        width: "90%",
        left : '20px',
        backgroundColor: "#fff"
    },
    textIp : {
        fontSize: 18, 
        paddingVertical: 10, 
        paddingLeft: 60 ,
        color:'#9095A0',
    },
    viewBtn : {
        alignItems : "center",
        paddingHorizontal: 20 ,
        marginTop: 70
    },
    btn : {
        backgroundColor: "#00BDD6",
        width : '60%',
        padding : 10,
        borderRadius : 10,
        marginTop : 15,
        height : 44,
        alignItems : "center",
    },
    btnText : {
        alignItems : "center", 
        fontSize: 17, 
        fontWeight: "700",
         color: 'white'
    },
})