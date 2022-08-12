import styled from "styled-components";
import { useState } from 'react';
import {FaSearch} from 'react-icons/fa'

const Search = () => {
  return (
      <FormStyle >
        <FaSearch />
        <input type="text" />
          
    </FormStyle>
  )
}


const FormStyle = styled.form`
    margin: 0rem 20rem;
    position: relative;
    width: 100%;
    input {
        border: none;
        background: linear-gradient (35deg, #ffb5a7, #fec89a);
        color: black;
        font-size: 1.5rem;
        padding: 1rem 3rem;
        border-radius: 1rem;
        outline: none;
    }
    `;
export default Search