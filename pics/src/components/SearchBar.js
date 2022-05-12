import React from "react";

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  onInputClick() {
    console.log("Input was clicked");
  }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* no parenthesis for this.onInputChange(), because that tells the browser to call onInputChange method when rendering the page 
            without the parenthesis, the callback function is only called when anything changes in the form input element*/}
            <input
              type="text"
              onClick={this.onInputClick}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
