import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ItemScreen = ({ route }) => {
  // route.params에서 전달받은 데이터 추출
  const { title, description, price } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>아이템 정보</Text>
      <Text style={styles.label}>제목:</Text>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.label}>설명:</Text>
      <Text style={styles.text}>{description}</Text>
      <Text style={styles.label}>가격:</Text>
      <Text style={styles.text}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
  },
});

export default ItemScreen;
