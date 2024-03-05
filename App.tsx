import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const NameCard = ({ name, model, manufacturer, address }) => (
  <View style={styles.card}>
    <Text>Name: {name}</Text>
    <Text>Model: {model}</Text>
    <Text>Manufacturer: {manufacturer}</Text>
    <Text>Address: {address}</Text>
  </View>
);

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [nameCards, setNameCards] = useState([]);

  const handleSearch = () => {
    const dummyData = [
      { name: 'Ayush Kumar Verma', model: 'iphone', manufacturer: 'Apple', address: 'Hyderabad' },
      { name: 'Shaurya', model: 'One Plus', manufacturer: 'BBK Electronics', address: 'Patna' },
      { name: 'Aryan', model: 'Mi', manufacturer: 'BBK Electronics',  address: 'Gurgaon' },
      { name: 'Yash', model: 'Poco', manufacturer: 'BBK Electronics', address: 'Patna' },
      { name: 'Sushant', model: 'Moto', manufacturer: 'Lenovo', address: 'Hyderabd' },
      { name: 'Shayan', model: 'Samsung', manufacturer: 'Samsung India', address: 'Banagalore' },
    ];
  

  const filteredCards = dummyData.filter(card => 
    card.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  );
  setNameCards(filteredCards);
};
  

  return (
    <View style ={styles.container}>
      <View style = {styles.banner}>
        <Text style={styles.bannerText}>
          {"Ayush Kumar Verma"}
        </Text>
      </View>

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
  banner: { 
    backgroundColor: '#3498db',
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 50,
    position: 'relative'
  },
  bannerText: {
    fontSize: 20
  }
});

export default SearchScreen;
