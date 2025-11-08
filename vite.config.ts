import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import yaml from '@rollup/plugin-yaml';
import { plugin as markdown, Mode } from 'vite-plugin-markdown';
import { marked } from 'marked';

export default defineConfig({
  plugins: [
    sveltekit(),
    yaml(),
    markdown({
      mode: [Mode.HTML],
      markdown: (body) => {
        // Configure marked with custom link renderer
        marked.use({
          renderer: {
            link(token) {
              const href = encodeURI(token.href);
              const title = token.title ? ` title="${token.title}"` : '';
              const text = token.tokens ? marked.parser(token.tokens).trim() : token.text;
              return `<a rel="external" href="${href}" class="link"${title}>${text}</a>`;
            },
          },
        });
        return marked.parse(body) as string;
      }
    })
  ]
});
