import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Snackbar from 'react-native-snackbar';

import {currencyByRupee} from './src/constant';
import CurrencyBtn from './src/CurrencyBtn';

const App = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Enter value to convert',
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }

    const inputAmt = parseFloat(inputValue);
    if (!isNaN(inputAmt)) {
      const convertedValue = inputAmt * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)} 🤑`;
      setResultValue(result);
      setTargetCurrency(targetValue.name);
    } else {
      return Snackbar.show({
        text: 'Not a valid number to convert',
        backgroundColor: '#F4BE2C',
        textColor: '#000000',
      });
    }
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.main}>
          <View style={styles.top}>
            <Text style={{color: 'white', fontSize: 30}}>₹</Text>
            <TextInput
              maxLength={16}
              placeholder="Enter amount"
              keyboardType="number-pad"
              onChangeText={setInputValue}
              value={inputValue}
              style={styles.inputStyle}
            />
            <Text>{resultValue && resultValue}</Text>
          </View>
          <View style={styles.scroll}>
            <FlatList
              horizontal={false}
              numColumns={3}
              data={currencyByRupee}
              keyExtractor={item => item.name}
              renderItem={({item}) => (
                <Pressable
                  style={[
                    styles.buttonStyle,
                    targetCurrency === item.name && styles.selected,
                  ]}
                  onPress={() => buttonPressed(item)}>
                  <CurrencyBtn {...item} />
                </Pressable>
              )}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
    height: '100%',
  },
  top: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  scroll: {
    flex: 1,
  },
  inputStyle: {
    borderColor: 'white',
    borderWidth: 2,
    padding: 12,
  },
  buttonStyle: {
    backgroundColor: '#ffffff',
    padding: 10,
    margin: 12,
    width: 100,
    height: 120,
    borderRadius: 12,
  },
  selected: {
    backgroundColor: 'rgba(196, 192, 141, 0.8)',
  },
});
