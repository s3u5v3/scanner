import React, { useState } from 'react';
import { Scanner } from './Scanner';

import { Box, Button, Dialog, DialogContent } from '@material-ui/core';

const App = () => {
  const [results, setResults] = useState('');
  const [scanCode, setScanCode] = useState('');
  const [modal, setModal] = useState(false);

  const _toggle = () => {
    setModal(!modal);
  };

  const _onDetected = (result) => {
    setModal(false);
    setScanCode(result ? result.codeResult.code : '');
    setResults(result);
  };

  return (
    <Box>
      <Button variant="contained" onClick={_toggle}>
        Scan Barcode
      </Button>

      <Box>
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
export { App };
