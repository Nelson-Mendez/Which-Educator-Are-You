import React from 'react';
// import PropTypes from 'prop-types';
import Page from '../../components/page'
import questionBank from '../../data/questionBank';
import QuizComponent from '../../components/quiz/quiz-component'
import Result from '../../components/result/Result'
import AnswerOption from '../../components/answers/Answers';

export default class Quiz extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: ''
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {                                             //vnbjrwakgvha,wgfuikeajwm
    const answers = questionBank.map((question) => (question.answers));

    this.setState({
      question: questionBank[0].question,
      answerOptions: answers[0]
    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: questionBank[counter].question,
      answerOptions: questionBank[counter].answers,
      answer: ''
    });
  }

  setUserAnswer(answer) {
    this.setState((state) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: "You are too similar to too many Educators!" });
    }
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < questionBank.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }



  renderQuiz() {
    return (
      <QuizComponent
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={questionBank.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return (
      <Result quizResult={this.state.result} />
    );
  }

  render() {
    return (
      <Page>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </Page >
    )
  }


}





// function Quiz(props) {
//   function renderAnswerOptions(key) {
//     return (
//       <AnswerOption
//         key={key.content}
//         answerContent={key.content}
//         answerType={key.type}
//         answer={props.answer}
//         questionId={props.questionId}
//         onAnswerSelected={props.onAnswerSelected}
//       />
//     );
//   }

//   return (
//     <CSSTransitionGroup
//       className="container"
//       component="div"
//       transitionName="fade"
//       transitionEnterTimeout={800}
//       transitionLeaveTimeout={500}
//       transitionAppear
//       transitionAppearTimeout={500}
//     >
//       <div key={props.questionId}>
//         {/* <QuestionCount counter={props.questionId} total={props.questionTotal} /> */}
//         <Question content={props.question} />
//         <ul className="answerOptions">
//           {props.answerOptions.map(renderAnswerOptions)}
//         </ul>
//       </div>
//     </CSSTransitionGroup>
//   );
// }

// Quiz.propTypes = {
//   answer: PropTypes.string.isRequired,
//   answerOptions: PropTypes.array.isRequired,
//   question: PropTypes.string.isRequired,
//   questionId: PropTypes.number.isRequired,
//   questionTotal: PropTypes.number.isRequired,
//   onAnswerSelected: PropTypes.func.isRequired
// };
// export default Quiz;
