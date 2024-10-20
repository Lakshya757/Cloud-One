import { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Login(){



    const [id_input, setid_input] = useState({
        height: 40,
        width:'80%',
        margin: 12,
        borderBottomWidth:0.5,
        borderColor:'white',
    })

    
    const [pswrd_input, setpswrd_input] = useState({
        height: 40,
        width:'80%',
        margin: 12,
        borderBottomWidth:0.5,
        borderColor:'white',
        marginTop:'12%'
    })

    const [mobile_input, setmobile_input] = useState({
        height: 40,
        width:'80%',
        marginTop:12,
        borderBottomWidth:0.5,
        borderColor:'white',
    })

    
    const [otp_input, setotp_input] = useState({
        height: 40,
        width:'80%',
        margin: 12,
        borderBottomWidth:0.5,
        borderColor:'white',
        marginTop:'12%'
    })












    const [usingID, setUsingID] = useState(false);

    const [scholarID, setScholarID] = useState();
    const [pswrd, setPswrd] = useState('')


    const [bgs, setBgs] = useState([
        p1='#4D3955',
        pymid='#6B474B',
        y1='#D0762C'
    ])





    return(
        <View style={styles.container}>
            <View>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                />
            </View>

            <View style={styles.login_btns}>
                    <TouchableOpacity
                        style={styles.id_btns}
                        onPress={()=>{
                            setUsingID(true);
                            
                        }}
                        
                    >
                        <Text style={{
                            display:'flex',
                            backgroundColor: usingID ? "#D0762C": "#674277", 
                            fontSize:15,
                            width:150,
                            height:40,
                            paddingTop:'2.5%',
                            paddingStart:'6%',
                            color:'white'
                            


                            }}>
                            Login with ID
                        </Text>

                    </TouchableOpacity>
                
                    
                    <TouchableOpacity

                        style={styles.otp_btns}

                        onPress={()=>{
                            setUsingID(false);
                        }}
                        >

                        <Text style={{
                            backgroundColor: usingID ?  "#4D3955": "#D0762C" ,
                            fontSize:15,
                            width:150,
                            height:40,
                            paddingTop:'2.5%',
                            paddingStart:'3%',
                            color:'white'

                        }}>
                            Login with OTP
                        </Text>
                    </TouchableOpacity>
            </View>
                {usingID ? 
                //FOR ID LOGIN/
                <>
                    <View>
                        <View style={styles.inputs}>
                            <TextInput
                                style={id_input}
                                onChangeText={(x)=>{
                                    setScholarID(x); 
                                }}
                                value={scholarID}
                                onFocus={()=>{
                                    setid_input({
                                        height: 40,
                                        width:'80%',
                                        margin: 12,
                                        borderBottomWidth:2,
                                        borderColor:'white',
                                        color:'white'
                                    })
                                }}
                                onBlur={()=>{
                                    setid_input({
                                        height: 40,
                                        width:'80%',
                                        margin: 12,
                                        borderBottomWidth:0.5,
                                        borderColor:'white',
                                        color:'white'
                                    })
                                }}
                                placeholder='Scholar ID'
                                placeholderTextColor={'#C5C5C5'}
                                keyboardType='numeric'
                                enterKeyHint='done'
                            />
                            <TextInput
                                enterKeyHint='done'
                                style={pswrd_input}
                                onChangeText={(x)=>{
                                    setPswrd(x); 
                                }}
                                value={pswrd}
                                
                                onFocus={()=>{
                                    setpswrd_input({
                                        height: 40,
                                        width:'80%',
                                        margin: 12,
                                        borderBottomWidth:2,
                                        borderColor:'white',
                                         
                                        color:'white'

                                    })
                                }}
                                onBlur={()=>{
                                    setpswrd_input({
                                        height: 40,
                                        width:'80%',
                                        margin: 12,
                                        borderBottomWidth:0.5,
                                        borderColor:'white',
                                        
                                        color:'white'
                                    })
                                }}
                                placeholder='Password'
                                placeholderTextColor={'#C5C5C5'}
                            />
                        </View>
                        <View style={styles.login_button}>
                            <TouchableOpacity
                                style={styles.login_opacity}
                            >
                                <Text style={styles.login_text}>
                                        Login
                                </Text>
                                    
                            </TouchableOpacity>
                        </View>
                        
                    </View>    
                </> : 
                

                //FOR OTP LOGIN////////////////////////////////////////////////////////////////////////////////////////
                <>
                <View>
                        <View style={styles.inputs}>
                            <TextInput
                                style={mobile_input}
                                onChangeText={(x)=>{
                                    setScholarID(x); 
                                }}
                                value={scholarID}
                                onFocus={()=>{
                                    setmobile_input({
                                        height: 40,
                                        width:'80%',
                                        marginTop:12,
                                        borderBottomWidth:2,
                                        borderColor:'white',
                                        color:'white'
                                    })
                                }}
                                onBlur={()=>{
                                    setmobile_input({
                                        height: 40,
                                        width:'80%',
                                        marginTop:12,
                                        borderBottomWidth:0.5,
                                        borderColor:'white',
                                        color:'white'
                                    })
                                }}
                                placeholder='Registered Mobile No.'
                                placeholderTextColor={'#C5C5C5'}
                                keyboardType='numeric'
                                enterKeyHint='done'
                            />
                            
                            <View style={styles.getotp_button}>
                                <TouchableOpacity
                                    style={styles.getotp_opacity}
                                    onPress={()=>{

                                    }}
                                >
                                    <Text style={styles.getotp_text}>
                                        Send OTP
                                    </Text>
                                </TouchableOpacity>
                            </View>






                            <TextInput
                                enterKeyHint='done'
                                style={otp_input}
                                onChangeText={(x)=>{
                                    setPswrd(x); 
                                }}
                                value={pswrd}
                                
                                onFocus={()=>{
                                    setotp_input({
                                        height: 40,
                                        width:'80%',
                                        margin: 12,
                                        borderBottomWidth:2,
                                        borderColor:'white',
                                         
                                        color:'white'

                                    })
                                }}
                                onBlur={()=>{
                                    setotp_input({
                                        height: 40,
                                        width:'80%',
                                        margin: 12,
                                        borderBottomWidth:0.5,
                                        borderColor:'white',
                                        
                                        color:'white'
                                    })
                                }}
                                keyboardType='numeric'
                                placeholder='Enter One Time Password'
                                placeholderTextColor={'#C5C5C5'}
                            />
                        </View>
                        <View style={styles.login_button}>
                            <TouchableOpacity
                                style={styles.login_opacity}
                            >
                                <Text style={styles.login_text}>
                                        Login
                                </Text>
                                    
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </>}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flex:1,
        alignContent:'center',
        backgroundColor:"#3A3A3A",
    },
    log:{
        textAlign:'center',
        fontSize:80
    },
    logo:{
        width:250,
        height:100,
        alignSelf:'center',
        marginTop:'17%'
    },
    login_btns:{//for VIEW
        display: 'flex',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:'18%',
        
    },
    id_btns:{//for TOUCHABLEOPACITY
        display:'flex',
        overflow:'hidden',
        borderTopLeftRadius:5000,
        borderBottomLeftRadius:5000,
    },
    inputs:{
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        marginTop:'18%',
    
    },
    otp_btns:{//for TOUCHABLEOPACITY
        display:'flex',
        overflow:'hidden',
        borderTopRightRadius:500,
        borderBottomRightRadius:500,
    },
    login_button:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:'12.5%',
    },
    login_opacity:{
        display:'flex',
        overflow:'hidden',
        borderRadius:5000,
        width:175,
        flexDirection:'row',
        justifyContent:'center',
        // borderWidth:2
    },
    login_text:{
        fontSize:25,
        color:'white',
        backgroundColor:'#D0762C',
        padding:17,
        paddingHorizontal:'30.875%'
    },
    getotp_button:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        marginTop:'3.5%',
        marginBottom:'9%'
    },
    getotp_opacity:{
        display:'flex',
        overflow:'hidden',
        borderRadius:5000,
        width:'88%',
        height:30,
        flexDirection:'column',
        justifyContent:'center',
        // borderWidth:2
    },
    getotp_text:{
        fontSize:15,
        color:'white',
        backgroundColor:'#D0762C',
        paddingHorizontal:'30.875%',
        padding:15,
        paddingBottom:'9.5%'
    }


    
})