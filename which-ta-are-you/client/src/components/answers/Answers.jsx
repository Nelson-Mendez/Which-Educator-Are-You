import React from 'react';
import PropTypes from 'prop-types';
import "./answers.scss"

function AnswerOption(props) {
    return (
        <li className="answerList">
            <input
                type="checkbox"
                className="answer"
                name=""
                checked={props.answerType === props.answer}
                id={props.answerType}
                value={props.answerType}
                disabled={props.answer}
                onChange={props.onAnswerSelected}
            />
            <label className="answer__label" htmlFor={props.answerType}>
                {props.answerContent}
            </label>
        </li>
    );
}

AnswerOption.propTypes = {
    answerType: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;