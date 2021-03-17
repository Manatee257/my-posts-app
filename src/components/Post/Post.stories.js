import React from 'react';

import Post from './Post';

export default {
  title: 'Components/Post',
  component: Post
};

const Template = (args) => (
    <Post 
        content="This is the first post." 
        date="2021/03/17" 
        index="1" 
    />);

export const Default = Template.bind({});
