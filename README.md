# A React component to render a progress bar on top of page
Adds a progress bar on top of your page

## Installation
First you need to install the package as dependency by running the following command

`yarn add react-top-progress-bar`

Then you can add it in your component as described above:
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
Here a list of allowed props and related default values and meaning

| prop            | default value | behavior                          |
|-----------------|---------------|-----------------------------------|
| value           | 0             | value, in percentage, of progress |
| color           | #CC0000       | color of progress bar             |
| backgroundColor | transparent   | background color of progress bar  |
| withShadow      | false         | the progress will have a shadow   |
