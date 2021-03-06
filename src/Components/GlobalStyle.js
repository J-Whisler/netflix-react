import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  background: #000;
  color: #999;
}

ul {
  list-style: none;
}

h1, h2, h3, h4 {
  color: #fff;
}

a {
  color: #fff;
  text-decoration: none;
}

p {
  margin: 0.5rem 0;
}

img {
  width: 100%;
}

.btn {
    display: inline-block;
    background: #e50914;
    color: #fff;
    padding: 0.4rem 1.3rem;
    font-size: 1rem;
    text-align: center;
    border: none;
    cursor: pointer;
    margin-right: 0.5rem;
    outline: none;
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }

  .btn:hover {
    opacity: 0.85;
  }

  .btn-rounded {
    border-radius: 0.3rem;
  }

  .btn-lg {
    font-size: 1rem;
    padding: 0.8rem 1.3rem;
    text-transform: uppercase;
    .icon {
      margin-left: 1rem;
    }
  }

  .btn-xl {
    font-size: 1.5rem;
    padding: 1.5rem 2.1rem;
    text-transform: uppercase;
    display: inline-block;
    background: #e50914;
    color: #fff;
    padding: 1.5rem 2.1rem;
    text-align: center;
    border: none;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
    border-radius: 0.1rem;
    .icon {
      margin-left: 1rem;
    }
  }


  .show {
    display: block !important;
}



.text-xl {
    font-size: 2rem;
    margin-bottom: 1rem;
    
}

.text-md {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}
.text-lg {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    
}
.text-center {
    text-align: center;
}

.text-dark {
    color: #999;
}
`;

export default GlobalStyle;
