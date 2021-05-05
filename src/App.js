import React, { Component, useState } from 'react';
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

const App2 = () => {
  const [results, setResults] = useState('');
  const [scanCode, setScanCode] = useState('');
  const [modal, setModal] = useState(false);
  const [scanSuccess, setScanSuccess] = useState(false);

  const _toggle = () => {
    setModal(!modal);
    setScanSuccess(false);
  };

  const _onDetected = (result) => {
    setModal(false);
    setScanCode(result ? result.codeResult.code : '');
    setScanSuccess(result ? true : false);
    setResults(result);
  };

  return (
    <Box>
      <Button variant="contained" onClick={_toggle}>
        Scan Barcode
      </Button>

      <Box>
        {/* {scanSuccess ? <Result key="scanResult" text={scanCode} /> : null} */}
        <input id="scanner_result" type="text" value={scanCode} />
      </Box>

      <Dialog
        open={modal}
        onClose={_toggle}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <DialogContent>
          <Scanner handleScan={_onDetected} />
        </DialogContent>
      </Dialog>
    </Box>
  );
};
export { App2 };
