import 'dotenv/config';
import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['list'],
    ['playwright-qase-reporter', {
      mode: process.env.QASE_MODE, 
      testops: {
        api: {
          token: process.env.QASE_API_TOKEN,
        },
        project: 'CCDP',
        run: {
          complete: true,
        },
      },
    }],
  ],
});

console.log('TOKEN:', process.env.QASE_API_TOKEN);
console.log('MODE:', process.env.QASE_MODE);