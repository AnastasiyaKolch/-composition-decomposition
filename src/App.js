import React from 'react';
import './App.css';
import Block from './components/Block';
import List from './components/List'
import ListItem from './components/ListItem'
import Link from './components/Link'

const headings = [];
const topNews = [];
const searchMenu = [];
const popular = [];

function App() {
  return (
    <div className="App">

      <Block className="Block news">
        <List className="list headings">
          {headings.map((item) => <ListItem key={item.id}><Link href={item.href} title={item.title} /></ListItem>)}
        </List>
      
        <List className="list top-news">
          {topNews.map((item) => <ListItem key={item.id}><span className="icon">{item.icon}</span><Link href={item.href} title={item.title} /></ListItem>)}
        </List>
        
      </Block>

      <Block className="search">
        <List className="list search-menu">
          {searchMenu.map((item) => <ListItem key={item.id}><Link href={item.href} title={item.title} /></ListItem>)}
        </List>
        <form></form>
      </Block>
      
      <Block className="popular">
        <List className="list popular">
          {popular.map((item) => <ListItem key={item.id}><Link href={item.href} title={item.title} />{item.content}</ListItem>)}
        </List>
        <form></form>
      </Block>

    </div>
  );
}

export default App;
