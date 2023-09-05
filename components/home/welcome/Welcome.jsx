import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { icons, SIZES } from '../../../constants';

import styles from './welcome.style';

const jobTypes = ["Full-time", "Part-time", "Contract"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Fulltime');

  const handleJobTypePress = (item) => {
    setActiveJobType(item);
    router.push(`/search/${item}`);
  };

  const renderJobTypeTab = ({ item }) => (
    <TouchableOpacity
      style={styles.tab(activeJobType, item)}
      onPress={() => handleJobTypePress(item)}
    >
      <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <View>
        <Text style={styles.userName}>Hello Denis</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image source={icons.search} resizeMode='contain' style={styles.searchBtnImage} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={jobTypes}
        renderItem={renderJobTypeTab}
        horizontal
        keyExtractor={(item) => item} // You can use a more appropriate key if available
        contentContainerStyle={{ columnGap: SIZES.small }}

      />

      {/* Add the main content here */}
    </View>
  );
};

export default Welcome;
