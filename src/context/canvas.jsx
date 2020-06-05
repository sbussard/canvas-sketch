import React, { Component, createContext } from 'react';
import Modal from '~/component/Modal';
import { ENV } from '~/configuration/environment';
import { storyData } from '~/storydata.js';
import Airtable from 'airtable';

const Context = createContext('canvas');
//const AIRTABLE_API_KEY = 'keyV26LysOMLAJkaJ';
const AIRTABLE_API_KEY = ENV['AIRTABLE_API_KEY'];
const AIRTABLE_CASE_STORY_BASE = 'appv0MtYS7Uu06To2';
const AIRTABLE_PROJECT_STORY_BASE = 'appv0MtYS7Uu06To2';
export const CanvasConsumer = Context.Consumer;

let emptyState = {
  'Everyday Hero': [],
  'Ordinary World': [],
  'Call to Adventure': [],
  'Better World': [],
  'Crossing the Threshold': [],
  'Allies and Gifts': [],
  'Mentor and Gifts': [],
  'Compelling Villain': [],
  'Three Challenges': []
};

let enableBlocks = false;

export class UseCanvas extends Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
    this.save = this.save.bind(this);
  }

  state = emptyState;

  updateBlock(block, getNewState) {
    let updater = fullState =>
      Object.assign({}, fullState, {
        [block]: getNewState(fullState[block])
      });

    let saveCanvas = () => {
      localStorage.canvas = btoa(
        unescape(encodeURIComponent(JSON.stringify(this.state)))
      );
    };

    this.setState(updater, saveCanvas);
  }

  getBlockActions = block => ({
    addItem: () => {
      this.setState(prevState => ({
        ...prevState,
        currentBlock: block
      }));

      this.customPrompt(
        'Add to the ' + block,
        storyData.sections[block],
        enableBlocks ? '' : this.state[block][0]
      );
    },
    removeItem: item => {
      if (enableBlocks) {
        if (confirm('Remove item?')) {
          this.updateBlock(block, state =>
            state.filter((_, index) => index !== item)
          );
        }
      } else {
        // Set the current block to the one that we're editing
        this.setState(prevState => ({
          ...prevState,
          currentBlock: block
        }));

        this.customPrompt(
          'Add to the ' + block,
          storyData.sections[block],
          this.state[block][item]
        );
      }
    }
  });

  componentDidMount() {
    if (localStorage.canvas) {
      this.setState(state =>
        JSON.parse(decodeURIComponent(escape(atob(localStorage.canvas))))
      );
    }

    // We're not doing anything with airtable for now.
    // Include the following when we're ready to explore this
    return;

    let base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(
      AIRTABLE_CASE_STORY_BASE
    );

    base('Case Story').find('recP1U6I5BC3tVWMU', (err, record) => {
      if (err) {
        console.error(err);
        return;
      }
      // console.log('Retrieved', record.id);
      // console.log('Retrieved', record.fields["Everyday Hero"]);
      // console.log(JSON.parse(decodeURIComponent(escape(atob(localStorage.canvas)))));

      // update all the blocks with the content from airtable record
      this.setState(prevState => {
        Object.keys(emptyState).forEach((item, index) => {
          if (item == 'Ordinary World')
            prevState[item] = [record.fields['The Ordinary World']];
          else prevState[item] = [record.fields[item]];
        });

        // Separate blocks
        // prevState["Three Challenges"] = [
        //   record.fields["Challenge 1"],
        //   record.fields["Challenge 2"],
        //   record.fields["Challenge 3"]
        // ]
        prevState['Three Challenges'] = [
          record.fields['Challenge 1'] +
            record.fields['Challenge 2'] +
            record.fields['Challenge 3']
        ];

        return prevState;
      });
    });
  }

  customPrompt(text, block, currentValue) {
    this.setState({
      showModal: true,
      modalmessage: text,
      block: block,
      value: currentValue
    });
  }

  closeModal() {
    this.setState({
      showModal: false
    });
  }

  save(item) {
    // console.log("saving item")
    // console.log(item)
    // console.log("Enable Blocks?")
    // console.log(enableBlocks)
    // console.log("Current Block")
    // console.log(this.state.currentBlock)

    if (enableBlocks) {
      // Check that we have an item
      if (!!item && item.replace(/\ /g, ''))
        this.updateBlock(this.state.currentBlock, state => [...state, item]);
    } else this.updateBlock(this.state.currentBlock, state => [item]);

    this.setState({
      showModal: false
    });
  }

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          getBlockActions: this.getBlockActions
        }}>
        {this.props.children}
        <Modal
          show={this.state.showModal}
          text={this.state.modalmessage}
          block={this.state.block}
          value={this.state.value}
          closeEvent={this.closeModal}
          saveEvent={this.save}
        />
      </Context.Provider>
    );
  }
}
