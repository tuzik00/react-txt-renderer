import type { FC } from 'react';
import React, { useState } from 'react';

import HtmlBlockRenderer from '..';

import mock from './mock';

const Demo: FC = () => {
    const [value, setValue] = useState(`${JSON.stringify(mock, null, 2)}`);
    const html = new HtmlBlockRenderer({
        value,
    });

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
            {html.render()}
          </div>
        </div>
      </div>
    );
};

export {
    Demo,
};

export default {
    title: 'Components/HtmlBlockRenderer',
};
