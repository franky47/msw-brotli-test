Reproduction for https://github.com/mswjs/msw/discussions/2186.

1. Install the dependencies with `pnpm install`
2. Run the development server with `pnpm dev`
3. Open the browser devtools

The result of the fetch call is still encoded (compressed), when it should be
decompressed and showing the original XML file at src/mocks/original.xml.
