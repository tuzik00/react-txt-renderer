import type {
    FC,
    ReactNode,
} from 'react';

import React, {
    useState,
} from 'react';

import Box from '@mui/material/Box';

import MarkdownRenderer from '@/MarkdownRenderer';

import type {
    BlockRendererComponentsMapType,
} from '..';

import BlockRenderer from '..';

import mock from './mock';

const componentsMap: BlockRendererComponentsMapType = {
    markdown: ({ children, data }: { children: ReactNode; data: { content: string; }; }) => (
      <div>
        <MarkdownRenderer value={data.content} />

        <div>
          {children}
        </div>
      </div>
    ),
    otherBlock: ({ data }: { data: { name: string; }; }) => (
      <div>
        {data.name}
      </div>
    ),
};

const Demo: FC = () => {
    const [value, setValue] = useState(`${JSON.stringify(mock, null, 2)}`);

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
            <BlockRenderer
              value={value}
              componentsMap={componentsMap}
            />
          </Box>
        </Box>
      </Box>
    );
};

export {
    Demo,
};

export default {
    title: 'Components/BlockRenderer',
};
