import React, { useReducer} from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import createDataContext from './createDataContext';

const BlogContext = React.createContext();
lastGuestId = 0;

newGuestId = () => {
    const id = this.lastGuestId;
    lastGuestId += 1;
    return id;
  };

const blogReducer = (state,action) => {
    switch (action.type){
    case 'delete_blogpost':
        return state.filter((blogpost)=> blogpost.id !== action.payload);
        
    case 'add_blogpost': 
        return [...state, {id: newGuestId(), title: action.payload.title, content: action.payload.content }];
    
    case 'edit_blogpost':
        return state.map((blogpost)=> blogpost.id === action.payload.id ? action.payload: blogPost);
    
    default:
        return state;
  }
};


    
const addBlogPost = (dispatch)=>{
    return(title, content, callback)=>{    
    dispatch({type: 'add_blogpost',payload: {title,content}});
    if (callback){
    callback();}
    };
};
    
const deleteBlogPost = (dispatch)=>{
    return (id)=>{
        dispatch({type: 'delete_blogpost', payload: id})
    };
} 

const editBlogPost = (dispatch)=>{
    return (id, title, content, callback) =>{
        dispatch({type: 'edit_blogpost', payload: {id, title, content, callback}});
        if (callback){
            callback();}
            };
    };
export const { Context, Provider} = createDataContext(blogReducer, {addBlogPost, deleteBlogPost, editBlogPost}, [{title:'Blog Post Text', content: 'Suckama', id: 0}]);