import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
  }

  .item-card {
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 8px;
    position: relative;
  }

  .new-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #ff4757;
    color: white;
    padding: 3px 6px;
    border-radius: 4px;
    font-size: 12px;
  }

  .cart-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #eee;
  }

  .quantity-controls {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export default GlobalStyles;