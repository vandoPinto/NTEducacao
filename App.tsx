// Usuário: abner.ribeiro@nteducacao.com.br
// Senha: Mudar5401
// atob - btoa

import React from 'react';
import {StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';

import Dialog from 'react-native-dialog';
import NetInfo from '@react-native-community/netinfo';

function App() {
  function onNavigationStateChange(navState: object) {
    console.log('onNavigationStateChange -> ');
    console.log(navState);
  }

  NetInfo.fetch().then(state => {
    console.log('Connection type', state.type);
    console.log('Is connected?', state.isConnected);
  });

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
