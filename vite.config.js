import vituum from 'vituum'
import pug from '@vituum/vite-plugin-pug'
import path from 'path'
import postcss from '@vituum/vite-plugin-postcss'
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper';

export default {
    plugins: [
        vituum({
            imports: {
                normalizeBasePath: true,
                filenamePattern: {
                    '+.css': [],
                    '+.scss': 'src/styles',
                    '+.js': 'src/js'
                }
            }
        }),
        pug({
            root: './src/templates/',
            data: ['src/templates/data/**/*.json'],
            options: {
                pretty: true
            }
        }),
        postcss(),
        ViteSvgSpriteWrapper({
            icons: 'src/icons/*.svg',
            outputDir: './public',
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@node': path.resolve(__dirname, './node_modules')
        },
    },
    build: {
        // copyPublicDir: false,
        minify: false,
        rollupOptions: {
            output: {
                entryFileNames: `assets/js/[name].js`,
                chunkFileNames: `assets/js/[name].js`,
                assetFileNames: `assets/[ext]/[name].[ext]`
            }
        }
    }
}
