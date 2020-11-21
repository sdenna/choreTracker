/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions, ScrollView } from 'react-native';


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
  state = {
    pageDisplayStatus: ['block', 'none', 'none'],
    pageDisplayTitles: ["Names", "Earnings", "Total $"],

    choreValue1: 4,
    choreValue2: 1,
    
    choreName1: 'Mopping',
    choreName2: 'Dishes',
    
    childArray:[
        {
            name: "Child 1",
            earnings: 0,
            sumEarnings: 0,
        },
        {
            name: 'Child 2',
            earnings: 0,
            sumEarnings: 0,
        },
        {
            name: 'Child 3',
            earnings: 0,
            sumEarnings: 0,
        },
       
    ]    
  }

   // function to change pages when the buttons are clicked
    // there are two arrays, one that has the block/none status
    // and one that has the title for the button to be displayed
    // this function gets the index that was clicked on
    handlePagePress = (index) => {
      let newArray = [...this.state.pageDisplayStatus];
      for (let i = 0; i < newArray.length; i++) {
        newArray[i] = 'none';
      }
      newArray[index] = 'block';
      this.setState({pageDisplayStatus: newArray});
  };

  // One function that will update the allowance 
    // First parameter is the amount to update
    // Second parameter is which kid to be updated.
    
    addMoney = (amt, kid) => {
	    this.state.childArray[kid].earnings = 
	        this.state.childArray[kid].earnings + amt;
	    this.setState({});
    };

    // Link I referenced to update the array via TextInput
// https://stackoverflow.com/questions/45262086/update-an-element-in-an-array-object-at-state-by-using-textinput-react-native

updateName = (index, newName) => {
  let newArray = [...this.state.childArray];
  newArray[index] = {...newArray[index], name: newName}
  this.setState({childArray: newArray});
};

// function to "end" the week - this determines cumulative totals
// for each week, resets the current week totals to 0
// finds out how many weeks have passed to find avg allowance per week

endWeekTotals = () => {
   var updatedChildArray = []; 
   let oldChildArray = [...this.state.childArray];

   for(let i = 0; i < oldChildArray.length; i++){
       var newObj = { 
           name: oldChildArray[i].name,
           earnings: 0,
           sumEarnings: oldChildArray[i].sumEarnings + oldChildArray[i].earnings,
           }
   updatedChildArray.push(newObj);
   }
 this.setState({childArray: updatedChildArray});
}        

// This function generates all the XML for the title so that it makes the body
// code look cleaner.
titleContainer = () => {
 return   (
     <View style={styles.titleContainer}>
       <Image style={styles.imageSwirlsLeft}
           source={{ uri: 'https://codehs.com/uploads/67f8b9c5f4848df56b7b62a18753eddc' }}
       />
       <View style={styles.titleTextContainer}>
           <Text style={styles.titleText}>
               Allowance
           </Text>
                   
           <Text style={styles.titleText}>
               Challenge
           </Text>
       </View>  
       <Image style={styles.imageSwirlsRight}
           source={{ uri: 'https://codehs.com/uploads/6de6a3af651beeb4906f441012ec1b13' }}
       />
   </View>
 );
};

middleNamesContainer = () => {
  return (
      <View style={styles.nameInputContainer}>
              {this.state.childArray.map((child, index) => (
              <TextInput style = {styles.enterNamesInputBox}
                 onChangeText= {(newName) => this.updateName(index, newName)}
                 value={child.name}
              />
         ))}
      </View>        
  );
};


  render() {
    return (
        <ScrollView style={styles.container}>
        
           
{/* Beginning of titleContainer.  This function generates all XML for title */}    
        <View style={styles.titleContainer}> 
            <Text>Hi</Text>
        </View>
        
{/* Beginning of middleContainer */}
        <View style = {styles.middleContainer}>    
        <Text>Middle</Text>

      
        </View>        
    {/* Button container and mapping for chore 2 */}    
        
        <View style={styles.buttonContainer}>
          <Text>Button</Text>
        </View>
       
       
       {/* Section where names and current earnings are displayed */}
       
          
        
        
{/* Begins bottom section with the nav buttons */}        
        <View style = {styles.bottomContainer}>
            <View style = {styles.navBarContainer}>
           
            </View>
        </View>
      
    </ScrollView>    
        
    );
}
}


const styles = StyleSheet.create({
  container: {
      height: deviceHeight,
      width: deviceWidth,
      backgroundColor: 'yellow',
     
  },
  centerItems: {
      alignItems: 'center'
  },
  background: {
      height: deviceHeight,
      width: deviceWidth,
  },
  titleContainer: {
      width: deviceWidth,
      flex: 1.5,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: deviceHeight/40,
      backgroundColor: 'yellow'
  },
  middleContainer:{
      flex: 3,
      justifyContent: 'flex-start',
      backgroundColor: 'blue',
    
  },
  bottomContainer: {
     flex: 1,
     backgroundColor: 'red',

  },
  imageSwirlsLeft: {
      width: deviceWidth/3,
      height: deviceWidth/3,
      marginLeft: deviceWidth/4,
  },
  imageSwirlsRight: {
      width: deviceWidth/3,
      height: deviceWidth/3,
      marginRight: deviceWidth/4,
  },
  titleTextContainer: {
      width: deviceWidth/3,
      height: deviceWidth/6,
      
  },
  titleText: {
      color: 'limegreen',
      fontSize: deviceHeight/28,
      fontFamily: 'Futura',
      textAlign: 'center',
      width: deviceWidth/3,
  },
  buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: 'green',
  },
  buttonStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'limegreen',
      borderWidth: deviceWidth/200,
      padding: deviceWidth/40,
      marginRight: deviceWidth/25,
      marginLeft:  deviceWidth/25,
      width: deviceWidth/5,
      marginBottom: deviceHeight/25,
  },
  buttonText: {
      color: 'limegreen',
      fontSize: deviceHeight/50,
      fontFamily: 'Futura',
  },
  earningsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: deviceWidth,
      height: deviceHeight/15,
  },
  
  nameInputContainer: {
      alignItems: 'center',
      margin: 10,
      
  },
  
  earningsText: {
      color: 'limegreen',
      fontSize: deviceHeight/50,
      fontFamily: 'Futura',
      //marginBottom: 5,    
      marginLeft: deviceWidth/40,
      width: deviceWidth/15,
  },
  enterNamesInputBox: {
      borderWidth: 1,
      borderColor: 'limegreen',
      color: 'limegreen',
      fontSize: deviceHeight/50,
      fontFamily: 'Futura',
      paddingLeft: deviceWidth/40,
      width: deviceWidth/3,
      margin: 10,
  },
  earningsTextInputBox: {
      borderWidth: 1,
      borderColor: 'limegreen',
      color: 'limegreen',
      fontSize: deviceHeight/50,
      fontFamily: 'Futura',
      paddingLeft: deviceWidth/40,
      width: deviceWidth/3,
  },
  navBarContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    
  },
  navButtonStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'limegreen',
      borderColor: 'white',
      borderWidth: deviceWidth/200,
      padding: deviceWidth/40,
      marginRight: deviceWidth/25,
      marginLeft:  deviceWidth/25,
      width: deviceWidth/5,
      marginTop: deviceHeight/40,
  },
  navButtonText: {
      color: 'black',
      fontSize: deviceHeight/50,
      fontFamily: 'Futura',
  },
   statsPageText: {
      color: 'limegreen',
      fontSize: deviceHeight/30,
      fontFamily: 'Futura',
      textAlign: 'center',
      marginBottom: 10,    
  },
  
  
});