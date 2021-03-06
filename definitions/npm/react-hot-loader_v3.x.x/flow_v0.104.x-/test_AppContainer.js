// @flow
import React from "react";
import { AppContainer } from "react-hot-loader";

let defaultErrorReporter = () => <div>error message</div>;

// $FlowExpectedError - missing children prop
<div><AppContainer /></div>;

// passing
<AppContainer>
  <div>some child</div>
</AppContainer>;



// $FlowExpectedError - not one child
<AppContainer><div>some child</div><i>other</i></AppContainer>;



// passing - errorReporter as NodeElement or function returning NodeElement
<div>
  <AppContainer errorReporter={defaultErrorReporter}>
    <div>some child</div>
  </AppContainer>
  <AppContainer errorReporter={<i>Err</i>}>
    <div>some child</div>
  </AppContainer>
</div>;

// $FlowExpectedError - errorReporter cannot return an array of children
<AppContainer errorReporter={() => [1, 2, 3].map(i => <i>{i}</i>)}><div>some child</div></AppContainer>;

// $FlowExpectedError - errorReporter cannot be an array of children
<AppContainer errorReporter={[1, 2, 3].map(i => <i>{i}</i>)}><div>some child</div></AppContainer>;
