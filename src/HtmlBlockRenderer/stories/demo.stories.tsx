import type { FC } from 'react';
import React, { useState } from 'react';

import Box from '@mui/material/Box';

import HtmlBlockRenderer from '..';

import mock from './mock';

const Demo: FC = () => {
    const [value, setValue] = useState(`${JSON.stringify(mock, null, 2)}`);
    const html = new HtmlBlockRenderer({
        value,
    });

    return (
      <Box>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ width: '100%', pr: 2 }}>
            <textarea
              value={value}
              style={{ width: '100%', height: '500px' }}
              onChange={(e) => {
                            setValue(e.target.value);
                        }}
            />
          </Box>

          <Box sx={{ width: '100%', pl: 2 }}>
            {html.render()}
          </Box>
        </Box>
      </Box>
    );
};

export {
    Demo,
};

export default {
    title: 'Components/HtmlBlockRenderer',
};
