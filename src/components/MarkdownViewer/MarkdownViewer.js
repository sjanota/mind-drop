import React from 'react';
import './MarkdownViewer.css';
import ReactMarkdown from "react-markdown";
import ListItem from "./ListItem/ListItem";



export default function MarkdownViewer({source, setSource}) {
  function WiredListItem(props) {
    return <ListItem source={source} {...props} setSource={setSource}/>;
  }

  const renderers = {
    listItem: WiredListItem
  };

  return <ReactMarkdown
    source={source}
    renderers={renderers}
    sourcePos={true}
  />
}

MarkdownViewer.propTypes = {};
