import React, { useState } from 'react';
import { StyleSheet,Button, Text, View, TouchableOpacity,StyleProp, ViewStyle, TextStyle,ScrollView } from 'react-native';
interface ToggleButtonProps {
  label: string;
  name: string;
  onToggle: (name: string, toggled: boolean) => void;
  style?: StyleProp<ViewStyle>;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ label, onToggle, style }) => {
  const [toggled, setToggled] = useState(false);

  const handlePress = () => {
    setToggled(!toggled);
    onToggle(label, !toggled);
  };
return (
    <TouchableOpacity
      style={[styles.toggleButton, style, 
        { backgroundColor: toggled ? '#2AB4DF' : '#2AB4DF',
          borderColor: toggled ? 'green' : '#2AB4DF',
         }]}
      onPress={handlePress}
    >
    <Text style={[styles.toggleButtonText, { color: toggled ? 'green' : 'white' }]}>
      {label}
    </Text>
    </TouchableOpacity>
  );
};  
export default function App() {
  const handleToggle = (name: string, toggled: boolean) => {
    console.log(`${name} toggled: ${toggled}`);
  };  
  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.appContainer}></View>
      <Text style={styles.additionalFilters}>Additional Filters</Text>
      <ToggleButton label="Hide Tesla Only Location" name="HideTeslaOnlyLocation" onToggle={handleToggle} style={{ width: 220, height: 37, position: 'absolute', left: 87, top: 1095 }} />
      <ToggleButton label="Private Home" name="PrivateHome" onToggle={handleToggle} style={{ width: 125, height: 37, position: 'absolute', left: 58, top: 1148 }} />
      <ToggleButton label="Available Now" name="AvailableNow" onToggle={handleToggle} style={{ width: 140, height: 37, position: 'absolute', left: 195, top: 1148 }} />
      <ToggleButton label="Hide Dealerships" name="HideDealerships" onToggle={handleToggle} style={{ width: 155, height: 37, position: 'absolute', left: 12, top: 1201 }} />
      <ToggleButton label="Hide Restricted Access" name="HideRestrictedAccess" onToggle={handleToggle} style={{ width: 202, height: 37, position: 'absolute', left: 179, top: 1201 }} />

      <Text style={styles.parking}>Parking</Text>
      <ToggleButton label="Accessible" name="Accessible" onToggle={handleToggle} style={{ width: 145, height: 37, position: 'absolute', left: 44, top: 1312 }} />
      <ToggleButton label="Pull In" name="PullIn" onToggle={handleToggle} style={{ width: 145, height: 37, position: 'absolute', left: 204, top: 1312 }} />
      <ToggleButton label="Trailer Friendly" name="TrailerFriendly" onToggle={handleToggle} style={{ width: 145, height: 37, position: 'absolute', left: 44, top: 1370 }} />
      <ToggleButton label="Pull Through" name="PullThrough" onToggle={handleToggle} style={{ width: 145, height: 37, position: 'absolute', left: 204, top: 1370 }} />

      <Text style={styles.comingSoon}>Coming Soon</Text>
      <Text style={styles.includeComingSoon}>Include Coming Soon</Text>
      <View style={styles.line} />

      <Text style={styles.showOnlyComingSoon}>Show Only Coming Soon</Text>
      <View style={styles.line2} />

      <Text style={styles.hideComingSoon}>Hide Coming Soon</Text>
      <View style={styles.line3} />

      <Text style={styles.networksAndCountry}>Networks and Country</Text>
      <View style={styles.rectangle62} />
      <View style={styles.line4} />
      
      <Text style={styles.all}>All</Text>
      <Text style={styles.networks}>Networks</Text>

      <Text style={styles.currentLocation}>Current Location</Text>
      <Text style={styles.country}>Country</Text>

      <Text style={styles.matchingResultFound}>66 Matching Result Found</Text>
      <ToggleButton label="View" name="View" onToggle={handleToggle} style={{ width: 65,height: 30, position: 'absolute',top: 1832,left: 321,zIndex: 2, }} />
    </ScrollView>

  );
}

const styles = StyleSheet.create({

  appContainer: {
    width: 393, height: 1871, position: 'relative',
    backgroundColor: '#CFF9FF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  appTitle: {
    marginVertical: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },
  scrollView: {
    
    flexGrow: 1,
  },
  additionalFilters: {
    width: 191,
    height: 20,
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
    position: 'absolute',
    left: 100,
    top: 1056,
  },
  parking:{
    width: 171, 
    height: 20, 
    left: 110, 
    top: 1271,
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
    position: 'absolute',
  },
  toggleButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    },
  toggleButtonText: {
    fontSize: 16,
    fontWeight: '700',
  },
  comingSoon: {
    width: 191,
    height: 20,
    left: 102,
    top: 1449,
    position: 'absolute',
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.79)',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '700',
  },
  includeComingSoon: {
    position: 'absolute',
    height: 20,
    left: 22,
    top: 1489,
    textAlign: 'center',
    color: '#2AB4DF',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '700',
  },
  line: {
    width: 350,
    height: 0,
    position: 'absolute',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.16)',
    top: 1508,
  },
  showOnlyComingSoon: {
    position: 'absolute',
    left: 22,
    top: 1539,
    textAlign: 'center',
    color: '#2AB4DF',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '700',
  },
  line2: {
    width: 350,
    height: 0,
    position: 'absolute',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.16)',
    top: 1558,
  },
  hideComingSoon: {
    position: 'absolute',
    left: 22,
    top: 1589,
    textAlign: 'center',
    color: '#2AB4DF',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '700',
  },
  line3: {
    width: 350,
    height: 0,
    position: 'absolute',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.16)',
    top: 1608,
  },
  networksAndCountry: {
    width: 191,
    height: 20,
    left: 102,
    top: 1628,
    position: 'absolute',
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.79)',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '700',
  },
  rectangle62: {
    width: 350,
    height: 84,
    left: 23,
    top: 1669,
    position: 'absolute',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(170, 170, 170, 0.67)',
    backgroundColor: 'transparent',
  },
  line4: {
    width: 350,
    height: 0,
    position: 'absolute',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.16)',
    left: 23,
    top: 1711,
  },
  networks: {
    width: 80,
    height: 25,
    left: 39,
    top: 1679,
    position: 'absolute',
    textAlign: 'center',
    color: '#2AB4DF',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '700',
  },
  all: {
    width: 40,
    height: 25,
    position: 'absolute',
    left: 315,
    top: 1679,
    textAlign: 'center',
    color: '#2AB4DF',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '700',
  },
  country: {
    width: 70,
    height: 25,
    left: 39,
    top: 1720,
    position: 'absolute',
    textAlign: 'center',
    color: '#2AB4DF',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '700',
  },
  currentLocation: {
    width: 135,
    height: 25,
    left: 214,
    top: 1720,
    position: 'absolute',
    textAlign: 'center',
    color: '#2AB4DF',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '700',
  },
  matchingResultFound: {
    width: 150,
    height: 25,
    textAlign: 'center',
    color: '#2AB4DF',
    left: 12,
    top: 1832,
    position: 'absolute',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '700',
    zIndex: 2,
  },
});
