// src/emails/NewDiscussionEmail.js
import React from 'react';
import { Html, Head, Body, Container, Heading, Text } from '@react-email/components';

const NewDiscussionEmail = ({ discussion }) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>New Discussion Added</Heading>
        <Text style={paragraph}>A new discussion was added by {discussion.user.name}:</Text>
        <Text style={paragraph}>{discussion.comment}</Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#f6f9fc',
  padding: '20px',
};

const container = {
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  padding: '20px',
};

const heading = {
  fontSize: '24px',
  marginBottom: '20px',
};

const paragraph = {
  fontSize: '16px',
  marginBottom: '10px',
};

export default NewDiscussionEmail;
