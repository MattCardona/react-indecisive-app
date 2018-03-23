import React from 'react';

const Action = (props) => (
      <div>
        <button
          className="big-button"
          hidden={!props.hasOptions}
          onClick={props.handlePick}
        >
          What should I do next?
        </button>
      </div>
      );

export {Action};