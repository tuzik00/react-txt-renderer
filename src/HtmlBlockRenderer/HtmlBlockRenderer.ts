import React, { type ReactNode } from 'react';
import { renderToString } from 'react-dom/server';

import BlockRenderer, { type BlockRendererComponentsMapType } from '@/BlockRenderer';
import MarkdownRenderer from '@/MarkdownRenderer/MarkdownRenderer';

import type { HtmlBlockRendererPropsType } from './types';

const componentsMap: BlockRendererComponentsMapType = {
  markdown: ({ data }: { children: ReactNode; data: { content: string; }; }) => React.createElement(MarkdownRenderer, {
    value: data.content,
  }),
};

class HtmlBlockRenderer {
  private value = '';

  constructor(props: HtmlBlockRendererPropsType) {
    this.value = props.value;
  }

  render() {
    return renderToString(
      React.createElement(BlockRenderer, {
        value: this.value,
        componentsMap,
        disallowedBlocks: [],
        maxDepth: 3,
      }),
    );
  }
}

export default HtmlBlockRenderer;
