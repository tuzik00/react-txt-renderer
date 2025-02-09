import { visit } from 'unist-util-visit';
import head from 'lodash/head';

import { MarkdownRendererDirectives } from '../constants';

type TreeType = {
    type: string;
    name: string;
    children: ({ value: string; })[];
    attributes: Record<string, unknown>;
    data: Record<string, unknown>;
};

function directivePlugin() {
    return (tree: TreeType) => {
        visit<TreeType>(tree, (node) => {
            if (
                node.type === 'textDirective'
                || node.type === 'leafDirective'
                || node.type === 'containerDirective'
            ) {
                if (node.name !== MarkdownRendererDirectives.YOUTUBE) {
                    return;
                }

                const data = node.data || (node.data = {});

                const {
                    id,
                } = node.attributes || {};

                if (node.type === 'textDirective') {
                    return;
                }

                if (!id) {
                    return;
                }

                const title = head(node?.children)?.value;

                data.hName = node.name;

                data.hProperties = {
                    id,
                    title,
                };
            }
        });
    };
}

export default directivePlugin;
