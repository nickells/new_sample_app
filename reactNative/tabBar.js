'use strict';

var React = require('react-native');
var index.ios = require('./index.ios.js');

var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = React;

var systemIconTypes = ['bookmarks', 'contacts', 'downloads', 'favorites', 'featured', 'history', 'more', 'most-recent', 'most-viewed', 'recents', 'search', 'top-rated'];

module.exports = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: contacts
    };
  },

  render: function() {
    return (
      <TabBarIOS
        style={[style.view5Tabbarios6]}
        >
        <TabBarIOS.Item 
        systemIcon='contacts'
        selected={this.state.selectedTab === 'contacts'}
        onPress={() => {
          this.setState({
            selectedTab: 'contacts',
          });
        }}>
        
        </TabBarIOS.Item>
        <TabBarIOS.Item 
        systemIcon='history'
        selected={this.state.selectedTab === 'history'}
        onPress={() => {
          this.setState({
            selectedTab: 'history',
          });
        }}>
        
        </TabBarIOS.Item>
        <TabBarIOS.Item 
        systemIcon='most-viewed'
        selected={this.state.selectedTab === 'most-viewed'}
        onPress={() => {
          this.setState({
            selectedTab: 'most-viewed',
          });
        }}>
        
        </TabBarIOS.Item>
        <TabBarIOS.Item 
        systemIcon='bookmarks'
        selected={this.state.selectedTab === 'bookmarks'}
        onPress={() => {
          this.setState({
            selectedTab: 'bookmarks',
          });
        }}>
        
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  },

});

var styles = StyleSheet.create({
    view5Tabbarios6:{
        width: 3.75,
    }, 
});
