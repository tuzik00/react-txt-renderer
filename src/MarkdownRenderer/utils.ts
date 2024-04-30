export const clearMarkdown = (md: string) => md
    .replace(/\r\n/g, '\n')
    .replace(/\+/g, ' ')
    .replace(/(.{2}\n)[^\n]/g, (paramsStr) => {
        const newLinePrefix = '  \n';

        if (paramsStr.startsWith(newLinePrefix)) {
            return paramsStr;
        }

        return `${paramsStr.slice(0, 2)}${newLinePrefix}${paramsStr.slice(3)}`;
    });
