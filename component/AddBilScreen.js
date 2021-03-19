import 'react-native-gesture-handler';
import React, { Component, useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, FlatList, Image, TouchableOpacity, Text, View, SafeAreaView, Button } from 'react-native';

function BillScreen({navigation}){
  
  const [currentDate, setCurrentDate] = useState('');

  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'clothing',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'food',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'fun',
    },
  ];

  const Item = ({ title, cost }) => (
    <View style={styles.item}>
    <Text style={{fontSize: 20}}>{title}</Text>
    <Text style={{fontSize: 20, textAlign:'right'}}>{cost}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title}/>
  );

  useEffect(() => {
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    setCurrentDate( year + '/' + month );
  }, []);

  return (
    
    <View style={styles.container}>
      <View style={styles.fixToText}>
        <Text style={styles.title}>{currentDate}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Add')}>
            <Image 
            style={styles.tinyLogo}
            source={require('./assets/add.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.fixToText}>
          <TouchableOpacity onPress={() => console.log("Expense")}>
            <View style={styles.buttonNumber}>
              <Text style={styles.ExIn}>     Expense    </Text>
            </View>
          </TouchableOpacity>
  
          <Text style={{fontSize: 35}}>|</Text>
  
          <TouchableOpacity onPress={() => console.log("Income")}>
            <View style={styles.buttonNumber}>
              <Text style={styles.ExIn}>     Income     </Text>
            </View>
          </TouchableOpacity>
        </View>
      
      <View style={styles.fixToText}>
        <Image source={require('./assets/pieChart.png')}/>
      </View>

      <View style={styles.fixTitle}>
        <Text style={styles.title}>HK$ 0</Text>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      
    </View>

    
  );
}

function AddBill({navigation}){
  const [count, setText] = useState(0);
        return (
        <SafeAreaView style={styles.container}>
  
        <View style={styles.fixTitle}>
          <Text style={styles.title}>HK$ </Text>
          <Text numberOfLines={1} style={styles.title}>{count}</Text>
        </View>
  
        <View style={styles.fixToText}>
          <TouchableOpacity onPress={() => console.log("Expense")}>
            <View style={styles.buttonNumber}>
              <Text style={styles.ExIn}>     Expense    </Text>
            </View>
          </TouchableOpacity>
  
          <Text style={{fontSize: 35}}>|</Text>
  
          <TouchableOpacity onPress={() => console.log("Income")}>
            <View style={styles.buttonNumber}>
              <Text style={styles.ExIn}>     Income     </Text>
            </View>
          </TouchableOpacity>
        </View>
  
        <View style={styles.fixToText}>
          <TouchableOpacity onPress={() => console.log("food")}>
            <Image 
            style={styles.tinyLogo}
            source={require('./assets/food.png')} />
          </TouchableOpacity>
  
          <TouchableOpacity onPress={() => console.log("traffic")}>
            <Image 
            style={styles.tinyLogo}
            source={require('./assets/traffic.png')} />
          </TouchableOpacity>
  
          <TouchableOpacity onPress={() => console.log("fun")}>
            <Image 
            style={styles.tinyLogo}
            source={require('./assets/fun.png')} />
          </TouchableOpacity>
  
          <TouchableOpacity onPress={() => console.log("fuel")}>
            <Image 
            style={styles.tinyLogo}
            source={require('./assets/fuel.png')} />
          </TouchableOpacity>
  
          <TouchableOpacity onPress={() => console.log("medical")}>
            <Image 
            style={styles.tinyLogo}
            source={require('./assets/medical.png')} />
          </TouchableOpacity>
        </View>
  
        <View style={styles.fixToText}>
          <TouchableOpacity onPress={() => console.log("snack")}>
            <Image 
            style={styles.tinyLogo}
            source={require('./assets/snack.png')} />
          </TouchableOpacity>
  
          <TouchableOpacity onPress={() => console.log("grocery")}>
            <Image 
            style={styles.tinyLogo}
            source={require('./assets/grocery.png')} />
          </TouchableOpacity>
  
          <TouchableOpacity onPress={() => console.log("clothing")}>
            <Image 
            style={styles.tinyLogo}
            source={require('./assets/clothing.png')} />
          </TouchableOpacity>
  
          <TouchableOpacity onPress={() => console.log("bill")}>
            <Image 
            style={styles.tinyLogo}
            source={require('./assets/bill.png')} />
          </TouchableOpacity>
          
          <Image 
            style={styles.tinyLogo}
            source={require('./assets/blank.png')} />
        </View>
        
        <View style={styles.fixToText}>
          <TouchableOpacity onPress={() => setText(prevCount => prevCount * 10 + 1)}>
            <View style={styles.buttonNumber}>
              <Text style={styles.number}>   1   </Text>
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity onPress={() => setText(prevCount => prevCount * 10 + 2)}>
            <View style={styles.buttonNumber}>
              <Text style={styles.number}>   2   </Text>
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity onPress={() => setText(prevCount => prevCount * 10 + 3)}>
            <View style={styles.buttonNumber}>
              <Text style={styles.number}>   3   </Text>
            </View>
          </TouchableOpacity>
  
        </View>
  
        <View style={styles.fixToText}>
          <TouchableOpacity onPress={() => setText(prevCount => prevCount * 10 + 4)}>
            <View style={styles.buttonNumber}>
              <Text style={styles.number}>   4   </Text>
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity onPress={() => setText(prevCount => prevCount * 10 + 5)}>
            <View style={styles.buttonNumber}>
              <Text style={styles.number}>   5   </Text>
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity onPress={() => setText(prevCount => prevCount * 10 + 6)}>
            <View style={styles.buttonNumber}>
              <Text style={styles.number}>   6   </Text>
            </View>
          </TouchableOpacity>
  
        </View>
  
        <View style={styles.fixToText}>
          <TouchableOpacity onPress={() => setText(prevCount => prevCount * 10 + 7)}>
            <View style={styles.buttonNumber}>
              <Text style={styles.number}>   7   </Text>
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity onPress={() => setText(prevCount => prevCount * 10 + 8)}>
            <View style={styles.buttonNumber}>
              <Text style={styles.number}>   8   </Text>
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity onPress={() => setText(prevCount => prevCount * 10 + 9)}>
            <View style={styles.buttonNumber}>
              <Text style={styles.number}>   9   </Text>
            </View>
          </TouchableOpacity>
  
        </View>
  
        <View style={styles.fix}>
          <TouchableOpacity onPress={() => setText(prevCount => prevCount + '.')}>
            <View style={styles.buttonNumber}>
              <Text style={styles.number}>  .  </Text>
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity onPress={() => setText(prevCount => prevCount * 10)}>
            <View style={styles.buttonNumber}>
              <Text style={styles.number}>  0  </Text>
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity onPress={() => setText(prevCount => 0)}>
          <Image style={styles.tinyLogo} source={require('./assets/back.png')} />
          </TouchableOpacity>
  
        </View>
  
        <View>
          <Button title="Save" onPress={() => console.log("save")}/>
        </View>
        
      </SafeAreaView>
      );
}

const Stack = createStackNavigator();

class AddBilScreen extends React.Component {
  render(){
    return (
      <NavigationContainer>

      <Stack.Navigator initialRouteName="Bill">
        <Stack.Screen name="Bill" component={BillScreen}/>
        <Stack.Screen name="Add" component={AddBill}/>
      </Stack.Navigator>
      
    </NavigationContainer>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold'
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  tinyLogo: {
    width: 80,
    height: 80,
  },
  buttonNumber: {
    alignItems: "center",
    padding: 10
  },
  number: {
    fontSize: 50,
    fontWeight: 'bold'
  },
  ExIn: {
    fontSize: 25
  },
  fix: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  fixTitle: {
    flexDirection: 'column',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  item: {
    backgroundColor: 'lightyellow',
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 8,
  },
});

  export default AddBilScreen;