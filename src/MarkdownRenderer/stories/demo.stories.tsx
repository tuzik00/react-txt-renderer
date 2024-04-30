import type { FC } from 'react';

import React, {
    useState,
} from 'react';

import Box from '@mui/material/Box';

import MarkdownRenderer from '..';

import mock from './mock';

const Demo: FC = () => {
    const [value, setValue] = useState(mock);

    return (
      <Box>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ width: '50%', pr: 2 }}>
            <textarea
              value={value}
              style={{ width: '100%', height: '100%' }}
              onChange={(e) => {
                            setValue(e.target.value);
                        }}
            />
          </Box>

          <Box sx={{ width: '50%', pl: 2 }}>
            <MarkdownRenderer value={value} />
          </Box>
        </Box>
      </Box>
    );
};

export {
    Demo,
};

export default {
    title: 'Components/MarkdownRenderer',
};
