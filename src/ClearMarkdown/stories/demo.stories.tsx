import type {
    FC,
} from 'react';

import React from 'react';

import ClearMarkdown from '..';

import mock from './mock';

const Demo: FC = () => <ClearMarkdown value={mock} />;

export {
    Demo,
};

export default {
    title: 'Components/ClearMarkdown',
};
