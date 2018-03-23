import React from 'react';
import {Option} from './Option';


const Options = (props) => (
      <div>
        <div className="widget-header">
          <h3 className="widget-header__title">Your Options</h3>
          <button
            hidden={props.options.length <= 0}
            onClick={props.handleDeleteOptions}
            className="button button--link"
          >Remove All
          </button>
        </div>
        {props.options.length === 0 && <p className="widget__selector">Please add a option to get started!</p>}
        {
          props.options.map((op, i) =>
            <Option
              handleDeleteOption={props.handleDeleteOption}
              key={op}
              optionText={op}
              count={i + 1}
            />)
        }
      </div>
      );

export {Options};
