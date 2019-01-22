# React component to display a progress bar on top of page
Adds a progress bar on top of your page. When value changes, an **animation** is performed.

## Installation
First you need to install the package as dependency by running the following command

`yarn add react-top-progress-bar`

## Usage
Then you can the progress bar in your component as described above:
```
import React, { Component } from "react";
import ReactTopProgressBar from "react-top-progress-bar";


class Demo extends Component {
  render() {
    return (
      <div >
        <ReactTopProgressBar value={50} />
      </div>
    );
  }
}

export default Demo;
```

## List of allowed props and defaults
Here a list of allowed props and related default values

| prop            | default value | behavior                          |
|-----------------|---------------|-----------------------------------|
| value           | 0             | Value, in percentage, of progress |
| color           | #CC0000       | Color of progress bar             |
| backgroundColor | transparent   | Background color of progress bar  |
| withShadow      | false         | The progress will have a shadow   |
