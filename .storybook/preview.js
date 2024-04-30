import { Anchor, DocsContainer } from '@storybook/addon-docs/blocks';

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    viewMode: 'docs',
    layout: 'fullscreen',
    docs: {
        container: props => (
            <DocsContainer context={props.context}>
                <Anchor storyId={props.context.id} />
                {props.children}
            </DocsContainer>
        ),
    },
    previewTabs: {
        'storybook/docs/panel': {
            index: -1,
        },
        'canvas': {
            disabled: true,
            hidden: true,
        }
    },
};

