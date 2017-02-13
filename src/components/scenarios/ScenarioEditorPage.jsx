import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {updateStep, add, remove, duplicate, move, selectStep} from 'redux/modules/scenarioEditor.js';

@connect(state => ({
  ...state.scenarioEditor
}), {updateStep, add, remove, duplicate, move, selectStep})
export default class ScenarioPage extends Component {
  static propTypes = {
    selectedStep: PropTypes.number,
    steps: PropTypes.array,
    loading: PropTypes.bool,
    isDone: PropTypes.bool,
    doneWell: PropTypes.array,
    canImprove: PropTypes.array,
    currentStep: PropTypes.shape({
      type: PropTypes.string,
      goTo: PropTypes.number,
      text: PropTypes.string,
      choices: PropTypes.array
    }),
    updateStep: PropTypes.func,
    add: PropTypes.func,
    remove: PropTypes.func,
    duplicate: PropTypes.func,
    move: PropTypes.func,
    selectStep: PropTypes.func
  }
  dialogChanged = (e) => {
    if (e.target.name === 'speaker_input') {
      this.props.updateStep(this.props.selectedStep, {
        ...this.props.steps[this.props.selectedStep],
        speaker: e.target.value
      });
    }else if (e.target.name === 'text_input') {
      this.props.updateStep({
        ...this.props.steps[this.props.selectedStep],
        text: e.target.value
      });
    }
  }
  choiceChanged = (e, index) => {
    if (e.target.name === 'responce_input') {
      this.props.steps[this.props.selectedStep].choices[index].text = e.target.value;
      this.props.updateStep(this.props.selectedStep, this.props.steps[this.props.selectedStep]);
    }else if (e.target.name === 'go_to_input') {
      this.props.steps[this.props.selectedStep].choices[index].goTo = e.target.value;
      this.props.updateStep(this.props.selectedStep, this.props.steps[this.props.selectedStep]);
    }else if (e.target.name === 'improve_input') {
      this.props.steps[this.props.selectedStep].choices[index].toImprove = e.target.value;
      this.props.updateStep(this.props.selectedStep, this.props.steps[this.props.selectedStep]);
    }else if (e.target.name === 'done_input') {
      this.props.steps[this.props.selectedStep].choices[index].doneWell = e.target.value;
      this.props.updateStep(this.props.selectedStep, this.props.steps[this.props.selectedStep]);
    }
  }
  deleteOption = (index) => {
    this.props.steps[this.props.selectedStep].choices.splice(index, 1);
    this.props.updateStep(this.props.selectedStep, this.props.steps[this.props.selectedStep]);
  }
  addOption = () => {
    this.props.steps[this.props.selectedStep].choices.push({
      text: '',
      toImprove: '',
      doneWell: ''
    });
    this.props.updateStep(this.props.selectedStep, this.props.steps[this.props.selectedStep]);
  }
  render() {
    const curStep = this.props.steps[this.props.selectedStep];
    const curStepIndex = this.props.selectedStep;
    console.log(curStep);
    return (
      <div>
        <div>
          <ul>
            {this.props.steps.map((step, index) => {
              if (step.type === 'choice') {
                return (
                  <li onClick={() => this.props.selectStep(index)}>
                    <div>{index}. User Choice</div>
                    <div>"{step.choices.map(choice => choice.text).join('", "')}"</div>
                    {(() => {
                      if (index === this.props.selectedStep) {
                        return (
                          <div>
                            <span onClick={() => this.props.move(index, 'up')}>Move Up</span>
                            <span onClick={() => this.props.move(index, 'down')}>Move Down</span>
                            <span onClick={() => this.props.duplicate(index)}>Duplicate</span>
                            <span onClick={() => this.props.remove(index)}>Delete</span>
                          </div>
                        );
                      }
                      return (<div/>);
                    })()}
                  </li>
                );
              }
              return (
                <li>
                  <div>{index}. Dialog ({step.speaker})</div>
                  <div>"{step.text}"</div>
                </li>
              );
            })}
          </ul>
        </div>
        {(() => {
          if (curStep.type === 'dialog') {
            return (
              <div>
                <div>{curStepIndex}. Dialog</div>
                <div><label htmlFor="speaker_input">Speaker:</label> <input type="text" id="speaker_input" name="speaker_input" value={curStep.speaker} onChange={this.dialogChanged}/></div>
                <div><label htmlFor="text_input">Text:</label> <input type="text" id="text_input" name="text_input" value={curStep.text} onChange={this.dialogChanged}/></div>
              </div>
            )
          } else {
            return (
              <div>
                <div>{curStepIndex}. Choice</div>
                <ul>
                  {curStep.choices.map((choice, index) => {
                    return (
                      <li>
                        <div>Option {index}</div>
                        <div>
                          <span onClick={() => this.deleteOption(index)}>Delete</span>
                        </div>
                        <div><label htmlFor="response_input">Response Text:</label> <input type="text" id="response_input" name="response_input" value={choice.text} onChange={(e) => this.choiceChanged(e, index)}/></div>
                        <div><label htmlFor="go_to_input">Go to this card:</label>
                          <select value={choice.goTo}>
                            {this.props.steps.map((step, _index) => {
                              if (step.type === 'dialog') {
                                return (
                                  <option value={_index}>{index}. {step.type} ({step.speaker})</option>
                                );
                              }
                              return (
                                <option value={_index}>{index}. {step.type}</option>
                              );
                            })}
                          </select>
                        </div>
                        <div><label htmlFor="improve_input">To Improve Text:</label> <input type="text" id="improve_input" name="improve_input" value={choice.canImprove} onChange={(e) => this.choiceChanged(e, index)}/></div>
                        <div><label htmlFor="done_input">Done Text:</label> <input type="text" id="done_input" name="done_input" value={choice.doneWell} onChange={(e) => this.choiceChanged(e, index)}/></div>
                      </li>
                    );
                  })}
                </ul>
                <div onClick={() => this.addOption()}>+ Add Option</div>
              </div>
            )
          }
        })()}
      </div>
    );
  }
}
