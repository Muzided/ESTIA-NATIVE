/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import {createNewWallet} from './wallet';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [walletData, setWalletData] = useState(null); // Use `null` as the initial state

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        

        {/* Button to trigger wallet data generation */}
        <Button
          title="Generate Wallet"
          onPress={() => {
           createNewWallet();
           
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  keyContainer: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  keyText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
});

export default App;
