// URL Accessibility Test
// This script tests if external service URLs are accessible

const https = require('https');
const http = require('http');

console.log('🌐 Testing External Service URLs\n');
console.log('=' .repeat(60));

const urls = [
  'https://readme-typing-svg.demolab.com',
  'https://img.shields.io',
  'https://komarev.com',
  'https://skillicons.dev',
  'https://github-readme-stats.vercel.app',
  'https://streak-stats.demolab.com'
];

let completed = 0;
const results = [];

function testUrl(url) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https') ? https : http;
    const startTime = Date.now();
    
    const req = protocol.get(url, (res) => {
      const responseTime = Date.now() - startTime;
      const status = res.statusCode;
      const success = status >= 200 && status < 400;
      
      results.push({
        url,
        status,
        responseTime,
        success
      });
      
      resolve();
    });
    
    req.on('error', (err) => {
      results.push({
        url,
        status: 'ERROR',
        responseTime: Date.now() - startTime,
        success: false,
        error: err.message
      });
      resolve();
    });
    
    req.setTimeout(5000, () => {
      req.destroy();
      results.push({
        url,
        status: 'TIMEOUT',
        responseTime: 5000,
        success: false,
        error: 'Request timeout'
      });
      resolve();
    });
  });
}

async function runTests() {
  console.log('\n🔍 Testing service availability...\n');
  
  for (const url of urls) {
    await testUrl(url);
    completed++;
    process.stdout.write(`\rProgress: ${completed}/${urls.length}`);
  }
  
  console.log('\n\n📊 Results:\n');
  
  results.forEach(result => {
    const icon = result.success ? '✅' : '❌';
    const statusText = result.status === 'ERROR' || result.status === 'TIMEOUT' 
      ? result.status 
      : `HTTP ${result.status}`;
    
    console.log(`${icon} ${result.url}`);
    console.log(`   Status: ${statusText} | Response Time: ${result.responseTime}ms`);
    
    if (result.error) {
      console.log(`   Error: ${result.error}`);
    }
    console.log();
  });
  
  const successCount = results.filter(r => r.success).length;
  const failCount = results.length - successCount;
  
  console.log('=' .repeat(60));
  console.log(`\n✅ Passed: ${successCount}/${results.length}`);
  console.log(`❌ Failed: ${failCount}/${results.length}`);
  
  if (failCount === 0) {
    console.log('\n🎉 All external services are accessible!\n');
  } else {
    console.log('\n⚠️  Some services are not accessible. This may be temporary.\n');
    console.log('Note: Services may block automated requests or have rate limits.');
    console.log('Manual testing in a browser is recommended.\n');
  }
}

runTests().catch(console.error);
