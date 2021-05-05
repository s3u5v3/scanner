import React, { Component } from 'react';
import Scanner from './Scanner';
import Result from './Result';
// import { Modal } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Box,
  Button,
  Modal,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
} from '@material-ui/core';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      scanCode: '',
      modal: false,
      scanSuccess: false,
    };
    this._onDetected = this._onDetected.bind(this);
    this._toggle = this._toggle.bind(this);
  }

  render() {
    // const classes = useStyles();
    return (
      <Box>
        <Button variant="contained" onClick={this._toggle}>
          Scan Barcode
        </Button>

        {this.state.scanSuccess ? (
          <Result key="scanResult" text={this.state.scanCode} />
        ) : null}
        <Box>
          <input id="scanner_result" type="text" value={this.state.scanCode} />
          <input id="scanner_result" type="text" value={this.state.result} />
          <input
            id="scanner_result"
            type="text"
            value={this.state.scanSuccess}
          />
        </Box>

        <Dialog
          open={this.state.modal}
          onClose={this._toggle}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <DialogContent>
            <Scanner handleScan={this._onDetected} />
          </DialogContent>
        </Dialog>
      </Box>
    );
  }

  _toggle() {
    this.setState((prevState) => ({
      modal: !prevState.modal,
      scanSuccess: false,
    }));
  }

  _onDetected(result) {
    this.setState({
      modal: false,
      scanCode: result ? result.codeResult.code : '',
      scanSuccess: result ? true : false,
      results: result,
    });
  }
}

export default App;
