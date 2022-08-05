import * as React from 'react';

import { TouchableOpacity, View } from 'react-native';

import { Button } from 'react-native-paper';
import WebView from 'react-native-webview';

interface BrowserProps {
  navigation: any;
}

export const Browser = ({ navigation }: BrowserProps) => {
  return (
    <View>
      <TouchableOpacity>
        <Button
          icon="back"
          mode="contained"
          onPress={() => navigation.goBack()}
        >
          &lt;Back
        </Button>
      </TouchableOpacity>
      <WebView source={{ uri: navigation }} />
    </View>
  );
};
