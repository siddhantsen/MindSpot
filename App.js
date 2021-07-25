import * as React from 'react';
import {useState} from 'react';
import { Dimensions, Button, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import YoutubePlayer from 'react-native-youtube-iframe';


const windowWidth = Dimensions.get('window').width;

const windowHeight = Dimensions.get('window').height;
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <TouchableOpacity
        style = {styles.journalButton}
        onPress={() => navigation.navigate('Journal')}
      >
        <Image source={require('./assets/journal.png')}  style={styles.pictures}></Image>

      </TouchableOpacity>

      <TouchableOpacity
        style = {styles.meditateButton}
        onPress={() => navigation.navigate('Meditate')}
      >
        <Image source={require('./assets/christmas-candle.png')}  style={styles.pictures}></Image>

      </TouchableOpacity>

      <TouchableOpacity
        style = {styles.stressButton}
        onPress={() => navigation.navigate('Stress')}
      
      >
        <Image source={require('./assets/music.png')}  style={styles.pictures}></Image>

      </TouchableOpacity>
    </View>
  );
}
//journal screen
function JournalScreen({navigation}) {
  return (
    <View style={styles.container}>
       <TouchableOpacity
        style = {styles.journalScreenButtons}
        
      >
      </TouchableOpacity>

      <TouchableOpacity
        style = {styles.journalScreenButtonsTwo}
        
      >
      </TouchableOpacity>
        

      
      
    
    </View>
  );
}

function MeditateScreen({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style = {styles.med1}
        onPress={() => navigation.navigate('Anxiety')}
      >
        <Text> Anxiety </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style = {styles.med2}
        onPress={() => navigation.navigate('Stress-Meditation')}
      >
        <Text> Stress </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style = {styles.med3}
        onPress={() => navigation.navigate('Regular')}
      >
        <Text> Regular </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style = {styles.med4}
        onPress={() => navigation.navigate('Nervous')}
      >
        <Text> Nervous </Text>
      </TouchableOpacity>
    </View>
  );
}

//the following four screens are the different meditate screens
//anxiety
function MedScreenOne() {
  return (
    <View style = {styles.container}>

    </View>
  )
}
//stress
function MedScreenTwo() {
  return (
    <View style = {styles.container}>

    </View>
  )
}
//regular
function MedScreenThree() {
  return (
    <View style = {styles.container}>

    </View>
  )
}
//nervous
function MedScreenFour() {
  return (
    <View style = {styles.container}>

    </View>
  )
}




function StressScreen({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style = {styles.journalButton} onPress = {()=>navigation.navigate('Stress Relieving Music')}>
        <Text> Stress Relieving Music </Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.meditateButton} onPress = {()=>navigation.navigate('Stress Relieving Sounds')}>
        <Text> Stress Relieving Sounds </Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.stressButton} onPress = {()=>navigation.navigate('White Noise')}>
        <Text> White Noise </Text>
      </TouchableOpacity>
    </View>

  );
}

function MusicScreen()
{
  const [playing, setPlaying] = useState(false);
  const onStateChange = (state) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }
  const togglePlaying = () => {
    setPlaying((prev) => !prev);
  }
  return (
    <View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={'lFcSrYw-ARY'}
        />
    </View>
  )
}

function SoundScreen()
{
  const [playing, setPlaying] = useState(false);
  const onStateChange = (state) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }
  const togglePlaying = () => {
    setPlaying((prev) => !prev);
  }
  return (
    <View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={'onsdzhxcQPk'}
        />
    </View>
  )
}

function WhiteNoiseScreen()
{
  const [playing, setPlaying] = useState(false);
  const onStateChange = (state) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }
  const togglePlaying = () => {
    setPlaying((prev) => !prev);
  }
  return (
    <View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={'nMfPqeZjc2c'}
        />
    </View>
  )
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="MindSpot Home" component={HomeScreen} />
        <Stack.Screen name="Journal" component={JournalScreen} />
        <Stack.Screen name = "Meditate" component={MeditateScreen} />
        <Stack.Screen name = "Stress" component = {StressScreen} />
        <Stack.Screen name = "Anxiety" component = {MedScreenOne} />
        <Stack.Screen name = "Stress-Meditation" component = {MedScreenTwo} />
        <Stack.Screen name = "Regular" component = {MedScreenThree} />
        <Stack.Screen name = "Nervous" component = {MedScreenFour} />
        <Stack.Screen name = "Stress Relieving Music" component = {MusicScreen} />
        <Stack.Screen name = "Stress Relieving Sounds" component = {SoundScreen} />
        <Stack.Screen name = "White Noise" component = {WhiteNoiseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cff2ff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  journalButton: {
    position: 'absolute',
    top: windowWidth/3,
    left: windowWidth/12,

    width: '80%',
    height: '20%',
    backgroundColor: "#5c9aff",
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',

    },

  meditateButton: {
    position: 'absolute',
    top: windowWidth/3 * 2.25,
    left: windowWidth/12,

    width: '80%',
    height: '20%',
    backgroundColor: "#5c9aff",
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',


  },

  stressButton: {
    position: 'absolute',
    top: windowWidth/3 * 3.5,
    left: windowWidth/12,
    width: '80%',
    height: '20%',
    backgroundColor: '#5c9aff',
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',


  },

  pictures: {
    width: 150,
    height: 150,

  },

  journalScreenButtons: {

    position: 'absolute',
    top: windowWidth/3 * .45,
    left: windowWidth/12,
    width: '80%',
    height: '40%',
    backgroundColor: '#5c9aff',
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

journalScreenButtonsTwo: {

  position: 'absolute',
    top: windowWidth/3 * 3,
    left: windowWidth/12,
    width: '80%',
    height: '40%',
    backgroundColor: '#5c9aff',
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',

},

med1: {
    position: 'absolute',
    top: windowWidth/6,
    left: windowWidth/12,
    width: '80%',
    height: '17%',
    backgroundColor: "#5c9aff",
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',

},

med2: {
    position: 'absolute',
    top: windowWidth/6 * 3.2,
    left: windowWidth/12,
    width: '80%',
    height: '17%',
    backgroundColor: "#5c9aff",
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
},

med3: {
    position: 'absolute',
    top: windowWidth/6 * 5.4,
    left: windowWidth/12,
    width: '80%',
    height: '17%',
    backgroundColor: "#5c9aff",
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
},

med4: {
    position: 'absolute',
    top: windowWidth/6 * 7.6,
    left: windowWidth/12,
    width: '80%',
    height: '17%',
    backgroundColor: "#5c9aff",
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
}
  

  
});
export default App;
