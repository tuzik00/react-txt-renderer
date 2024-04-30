import { visit } from 'unist-util-visit';

import { MarkdownRendererDirectives } from '../constants';

type TreeType = {
    type: string;
    name: string;
    children: ({ value: string; })[];
    attributes: Record<string, unknown>;
    data: Record<string, unknown>;
};

function variantLinkPlugin() {
    return (tree: TreeType) => {
        visit<TreeType>(tree, (node) => {
            if (
                node.type === 'textDirective'
                || node.type === 'leafDirective'
                || node.type === 'containerDirective'
            ) {
                if (node.name !== MarkdownRendererDirectives.LINK) {
                    return;
                }

                const data = node.data || (node.data = {});

                const {
                    id,
                    href,
                    variant,
                    title,
                    classNames,
                } = node.attributes || {};

                if (node.type !== 'textDirective') {
                    console.error(`Only text directives supported for ${MarkdownRendererDirectives.LINK}`, node);
                    return;
                }

                if (!href) {
                    console.error('Missing link href', node);
                    return;
                }

                data.hName = node.name;

                data.hProperties = {
                    id,
                    href,
                    title,
                    variant,
                    classNames,
                };
            }
        });
    };
}

export default variantLinkPlugin;
