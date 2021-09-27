### Refer to the image below:
<details>
<summary>Click to view</summary>
    
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/google-search-suggestions-output.gif" alt="google search suggestions output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
    
</details>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/google-search-suggestions-sm-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/google-search-suggestions-lg-output.png)

</details>

### Functionalities

<details>
<summary>Click to view</summary>
<br/>

The app has the following functionalities

- Initially, all suggestions in the `suggestionsList` are displayed
- When a value is provided in the search input, then it will display the suggestions which includes the search input irrespective of case
- When the arrow of a suggestion is clicked, then the value of the search input will be updated with the respective suggestion clicked
- The `GoogleSuggestions` component receives the `suggestionsList` as a prop. It consists of a list of suggestion objects with the following properties in each suggestion object

  |    Key     | Data Type |
  | :--------: | :-------: |
  |     id     |  Number   |
  | suggestion |  String   |

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/google-search-suggestions-component-structure-breakdown.png" alt="google search suggestions component structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

### Salient Styling

<details>
<summary>Click to view</summary>
<br>

- Used the `box-shadow` CSS property to apply the box-shadow effect to containers

  ```
    box-shadow: 0px 4px 16px 0px #bfbfbf;
  ```

  <br/>
   <img src="https://assets.ccbp.in/frontend/content/react-js/box-shadow-img.png" alt="box shadow" style="width:200px" />

- Used the `cursor` CSS property to specify the mouse cursor to be displayed when pointing over an element

  ```
    cursor: pointer;
  ```

  <br/>
   <img src="https://assets.ccbp.in/frontend/content/react-js/cursor-pointer-img.png" alt="cursor pointer" style="width:100px" />

- Used the below `outline` CSS property for buttons and input elements to remove the highlighting when the elements are clicked

  ```
    outline: none;
  ```

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/google-logo.png](https://assets.ccbp.in/frontend/react-js/google-logo.png) 
- [https://assets.ccbp.in/frontend/react-js/google-search-icon.png](https://assets.ccbp.in/frontend/react-js/google-search-icon.png)
- [https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png](https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png)

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #bfbfbf; width: 150px; padding: 10px; color: white">Hex: #bfbfbf</div>
<div style="background-color: #64748b; width: 150px; padding: 10px; color: white">Hex: #64748b</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: white">Hex: #475569</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>
