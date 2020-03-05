import React, {Component} from "react";
import { View, Text, TouchableOpacity, TextInput, Button, StyleSheet } from "react-native";
import config from "../../config";
class Register extends Component {

    constructor(){
        super();
        this.state = {
            credentials: {
                email: "",
                password: ""
            }
        };
    }

    updateText(text, field){
    let newCredentials = Object.assign(this.state.credentials);
    newCredentials[field] = text;
    this.setState({
    credentials: newCredentials
    });
    }

    register() {
    //  console.log(config.baseURL);
     return fetch(config.baseUrl + "signup", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },

        body: JSON.stringify(this.state.credentials)
       })
       .then(response => response.json())
         .then(jsonResponse => {
          if(jsonResponse.confirmation==="success"){
            this.props.navigation.navigate("main")
          }else{
              throw new Error({message: "Sorry, something went wrong; please try again"
            });
          }
       })
       .catch(err => {
           console.log(err.message);
       })
  }

    render() {
        return(
    
            <View
            style={{
            height:100 + "%", 
            width:100 + "%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(252,61,57)"
            }}
            
            >
              
                <TextInput
                 value={this.state.email}
                 placeholder="username" 
                 autoCorrect={false}
                 style={styles.input} 
                 onChangeText={text => this.updateText(text, "email")}    
                 />
                <TextInput 
                value={this.state.password}
                onChangeText={text => this.updateText(text, "password")}
                secureTextEntry
                autoCorrect={false}
                placeholder="Password" 
                style={styles.input}
                 />
                <Button 
                title="Signup"
                onPress={()=>{
                this.register();
                }}
                
                 />
                </View> 
            
        );
    }
}

const styles = StyleSheet.create({
   input: {
    height: 50,
    width: 100 + "%",
    marginHorizontal: 20,
    backgroundColor: "rgb(255,255,255)",
    marginBottom: 10
   } 
});
export default Register;