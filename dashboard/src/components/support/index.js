import React from 'react';  
import { connect } from "react-redux";
import SupportInput from './supportInput'


const mapStateToProps = state => {
    return { articles: state.articles };
  };
  
const ConnectedSupportForm = (props) => { 
  return (
      <div>
          <SupportInput />
    {props.articles.map(el => (
      <h1 key={el.id}>
        {el.name}
      </h1>
    ))}
      </div>
  );
}

const SupportForm = connect(mapStateToProps)(ConnectedSupportForm)

export default SupportForm