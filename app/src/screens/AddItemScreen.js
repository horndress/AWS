import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const AddItemScreen = ({ navigation }) => {
  // 입력 값을 저장할 상태
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  // 폼 제출 핸들러
  const handleSubmit = () => {
    // ItemScreen으로 데이터 전달
    navigation.navigate('ItemScreen', { title, description, price });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="제목"
        value={title}
        onChangeText={setTitle}
      />
      
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="설명"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      
      <TextInput
        style={styles.input}
        placeholder="가격"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      
      <Button title="등록" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  textArea: {
    height: 100, // 멀티라인 입력 필드를 위한 높이 조정
  },
});

export default AddItemScreen;
