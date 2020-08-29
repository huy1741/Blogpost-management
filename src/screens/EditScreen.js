import React, {useContext, useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {Context} from '../context/BlogContext';

const EditScreen = ({navigation}) => {
    const {state, editBlogPost}= useContext(Context);
    
    const blogPost = state.find((blogPost)=> blogPost.id === navigation.getParam('id'));
    const [title, setTitle]= useState(blogPost.title);
    const [content, setContent]= useState(blogPost.content);
    const id = navigation.getParam('id');

    return (
    <View>
        <Text style={styles.label}>Enter Title: </Text>
        <TextInput style={styles.input} value={title} onChangeText={(text)=>setTitle(text)}/>
        <Text style={styles.label}>Enter Content:</Text>
        <TextInput style={styles.input} value={content} onChangeText={(text)=>setContent(text)}/>
        <Button title="Save Blog Post" onPress={()=>{editBlogPost(id, title, content, ()=>{navigation.navigate('Index')})}}></Button>
    </View>   
    );
};

const styles = StyleSheet.create({
    input :{
       fontSize: 18,
       borderWidth: 1,
       borderColor: 'black',
       marginBottom: 10,
       padding: 5,
       margin: 5 
   },
   label: {
       fontSize: 20,
       marginBottom: 10,
       marginLeft: 5
   }})

export default EditScreen;