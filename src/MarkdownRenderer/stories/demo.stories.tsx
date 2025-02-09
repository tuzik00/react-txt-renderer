import type { FC } from 'react';

import React, {
    useState,
} from 'react';

import MarkdownRenderer from '..';

import mock from './mock';

const Demo: FC = () => {
    const [value, setValue] = useState(mock);

    return (
      <div>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '50%', paddingRight: 2 }}>
            <textarea
              value={value}
              style={{ width: '100%', height: '100%' }}
              onChange={(e) => {
                            setValue(e.target.value);
                        }}
            />
          </div>

          <div style={{ width: '50%', paddingLeft: 2 }}>
            <MarkdownRenderer value={value} />
          </div>
        </div>
      </div>
    );
};

export {
    Demo,
};

export default {
    title: 'Components/MarkdownRenderer',
};
