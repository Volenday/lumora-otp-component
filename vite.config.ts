import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig(({ command }) => {
	if (command === 'serve') {
		// Demo mode - serve the demo app
		return {
			plugins: [react()],
			root: '.',
			build: {
				outDir: 'dist-demo'
			}
		};
	}

	// Library build mode
	return {
		plugins: [
			react({
				jsxRuntime: 'automatic'
			}),
			dts({
				insertTypesEntry: true,
				exclude: [
					'**/*.stories.tsx',
					'**/*.test.tsx',
					'**/*.test.ts',
					'src/demo/**'
				]
			})
		],
		build: {
			lib: {
				entry: resolve(__dirname, 'src/index.ts'),
				name: 'LumoraOTP'
			},
			rollupOptions: {
				external: [
					'react',
					'react-dom',
					'react-hook-form',
					'@mui/material',
					'@emotion/react',
					'@emotion/styled',
					'react/jsx-runtime',
					'react/jsx-dev-runtime'
				],
				output: [
					{
						format: 'es',
						entryFileNames: 'index.es.js',
						globals: {
							react: 'React',
							'react-dom': 'ReactDOM',
							'react-hook-form': 'ReactHookForm',
							'@mui/material': 'MaterialUI',
							'@emotion/react': 'EmotionReact',
							'@emotion/styled': 'EmotionStyled'
						}
					},
					{
						format: 'cjs',
						entryFileNames: 'index.cjs',
						exports: 'named',
						globals: {
							react: 'React',
							'react-dom': 'ReactDOM',
							'react-hook-form': 'ReactHookForm',
							'@mui/material': 'MaterialUI',
							'@emotion/react': 'EmotionReact',
							'@emotion/styled': 'EmotionStyled'
						}
					}
				]
			}
		}
	};
});
