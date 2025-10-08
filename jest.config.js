export default {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy'
	},
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest'
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	testMatch: [
		'<rootDir>/src/**/__tests__/**/*.(ts|tsx)',
		'<rootDir>/src/**/*.(test|spec).(ts|tsx)'
	],
	collectCoverageFrom: [
		'src/**/*.(ts|tsx)',
		'!src/**/*.d.ts',
		'!src/demo/**',
		'!src/setupTests.ts',
		'!src/test-utils/**'
	],
	coverageDirectory: 'coverage',
	coverageReporters: ['text', 'lcov', 'html'],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80
		}
	},
	testTimeout: 10000,
	verbose: true
};
