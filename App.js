//Imports
import React, { Component } from "react";
import { Text, View } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

//Exporting Class
export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        //Rendering Header with HeaderTitle:Albums
        <Header headerText={"Albums"} />
        //Rendering AlbumList
        <AlbumList />
      </View>
    );
  }
}
