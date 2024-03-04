import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const NameCard = ({ name, model, manufacturer }) => (
  <View style={styles.card}>
    <Text>Name: {name}</Text>
    <Text>Model: {model}</Text>
    <Text>Manufacturer: {manufacturer}</Text>
  </View>
);

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [nameCards, setNameCards] = useState([]);

  const handleSearch = () => {
    const dummyData = [
      { name: 'Ayush Kumar Verma', model: 'iphone', manufacturer: 'Apple' },
      { name: 'Shaurya', model: 'One Plus', manufacturer: 'BBK Electronics' },
    ];
    setNameCards(dummyData);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => setSearchQuery(text)}
        value={searchQuery}
        placeholder="Search..."
      />
      <Button
        title="Search"
        onPress={handleSearch}
      />
      {nameCards.map((card, index) => (
        <NameCard key={index} {...card} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default SearchScreen;
