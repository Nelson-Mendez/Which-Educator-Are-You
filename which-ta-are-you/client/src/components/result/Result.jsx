import React from 'react';
import PropTypes from 'prop-types';
import "./result.scss"

function Result(props) {
    return (
        <main className="result">
            <div className="result__drumroll">
                Your spirit Educator is.........
            </div>

            <div className="result__result">
                <strong>{props.quizResult}</strong>!
            </div>
        </main>
    );
}

Result.propTypes = {
    quizResult: PropTypes.string.isRequired,
};

export default Result;