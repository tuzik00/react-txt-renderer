import type {
    FC,
    ReactNode,
} from 'react';

import React, {
    useState,
} from 'react';

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
      <div>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '100%', paddingRight: 2 }}>
            <textarea
              value={value}
              style={{ width: '100%', height: '500px' }}
              onChange={(e) => {
                            setValue(e.target.value);
                        }}
            />
          </div>

          <div style={{ width: '100%', paddingLeft: 2 }}>
            <BlockRenderer
              value={value}
              componentsMap={componentsMap}
            />
          </div>
        </div>
      </div>
    );
};

export {
    Demo,
};

export default {
    title: 'Components/BlockRenderer',
};
