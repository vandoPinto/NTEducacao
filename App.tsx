// Usuário: abner.ribeiro@nteducacao.com.br
// Senha: Mudar5401
// atob - btoa

import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';

import Dialog from 'react-native-dialog';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {zip, unzip, unzipAssets, subscribe} from 'react-native-zip-archive';
import {MainBundlePath, DocumentDirectoryPath} from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';
import Orientation from 'react-native-orientation-locker';

function App() {
  function onNavigationStateChange(navState: object) {
    // console.log('onNavigationStateChange -> ');
    // console.log(navState);
  }

  useEffect(() => {
    Orientation.lockToLandscape();
    Orientation.lockToPortrait();
  }, []);

  // RNFetchBlob.config({
  //   // add this option that makes response data to be stored as a file,
  //   // this is much more performant.
  //   fileCache: true,
  // })
  //   .fetch("GET", "https://www.example.com/file/example.zip", {
  //     //some headers ..
  //   })
  //   .then((res) => {
  //     // the temp file path
  //     console.log("The file saved to ", res.path());
  //   });

  // NetInfo.fetch().then(state => {
  //   console.log('Connection type', state.type);
  //   console.log('Is connected?', state.isConnected);
  // });

  // const storeData = async (value) => {
  //   try {
  //     const jsonValue = JSON.stringify(value);
  //     await AsyncStorage.setItem('my-key', jsonValue);
  //   } catch (e) {
  //     // saving error
  //   }
  // };

  // const getData = async () => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem('my-key');
  //     console.log(jsonValue);

  //     return jsonValue != null ? JSON.parse(jsonValue) : null;
  //   } catch (e) {
  //     // error reading value
  //   }
  // };

  // storeData('vando');
  // console.log(getData());
  return (
    <View style={styles.containerView}>
      <WebView
        source={{uri: 'https://demo.discent.com.br'}}
        onNavigationStateChange={onNavigationStateChange}
        onMessage={e => console.log(e.nativeEvent)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
});

export default App;
