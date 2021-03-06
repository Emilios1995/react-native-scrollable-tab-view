'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  ScrollView,
} = React;

var FacebookTabBar = require('./FacebookTabBar');
var DefaultTabBar = require('react-native-scrollable-tab-view/DefaultTabBar');
const Icon = require('react-native-vector-icons/Ionicons');

var ScrollableTabView = require('react-native-scrollable-tab-view');
var {
  ScrollableTabBar,
  DefaultTabBar,
} =  ScrollableTabView;


var FacebookTabsExample = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView initialPage={1} renderTabBar={() => <FacebookTabBar />}>
          <ScrollView tabLabel="ios-paper" style={styles.tabView}>
            <View style={styles.card}>
              <Text>News</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="person-stalker" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Friends</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="ios-chatboxes" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Messenger</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="ios-world" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Notifications</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="navicon-round" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Other nav</Text>
            </View>
          </ScrollView>
        </ScrollableTabView>
      </View>
    );
  }
});

var SimpleExample = React.createClass({
  render() {
    return (
      <ScrollableTabView style={{marginTop: 20}}>
        <Text tabLabel='Tab #1'>My</Text>
        <Text tabLabel='Tab #2'>favorite</Text>
        <Text tabLabel='Tab #3'>project</Text>
      </ScrollableTabView>
    )
  }
});

var ScrollableTabsExample = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView initialPage={0} renderTabBar={() => <ScrollableTabBar />}>
          <Text tabLabel='Tab #1'>My</Text>
          <Text tabLabel='Tab #2 word word'>favorite</Text>
          <Text tabLabel='Tab #3 word word word'>project</Text>
          <Text tabLabel='Tab #4 word word word word'>favorite</Text>
          <Text tabLabel='Tab #5'>project</Text>
        </ScrollableTabView>
      </View>
    )
  }
});

// Using tabBarPosition='overlayTop' or 'overlayBottom' lets the content show through a
// semitransparent tab bar. Note that if you build a custom tab bar component, its outer container
// must consume a 'style' prop (e.g. <View style={this.props.style}) to support this feature.
var OverlayExample = React.createClass({
  render() {
    return (
      <ScrollableTabView
        style={styles.container}
        renderTabBar={()=><DefaultTabBar backgroundColor='rgba(255, 255, 255, 0.5)' />}
        tabBarPosition='overlayTop'
        >
        <View tabLabel='Music' style={{flex:1, backgroundColor: '#CCFFFF'}}>
          <Icon name='android-volume-up' color='#2222CC' size={300} style={styles.icon} />
        </View>
        <View tabLabel='Food' style={{flex:1, backgroundColor: '#CCBBDD'}}>
          <Icon name='ios-nutrition' color='#22AACC' size={300} style={styles.icon} />
        </View>
        <View tabLabel='Drink' style={{flex:1, backgroundColor: '#EEFF33'}}>
          <Icon name='ios-pint' color='#22FFCC' size={300} style={styles.icon} />
        </View>
      </ScrollableTabView>
    )
  }
});

module.exports = FacebookTabsExample;
//module.exports = SimpleExample;
//module.exports = ScrollableTabsExample;
//module.exports = OverlayExample;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  icon: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  }
});
