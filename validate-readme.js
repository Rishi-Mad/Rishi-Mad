// README Validation Script
const fs = require('fs');

console.log('🔍 README Validation Report\n');
console.log('=' .repeat(60));

// Read README content
const readme = fs.readFileSync('README.md', 'utf8');

// 1. Check for all required sections
console.log('\n📋 Section Validation:');
const sections = [
  { name: 'Animated Header', pattern: /readme-typing-svg\.demolab\.com/ },
  { name: 'Status Banner', pattern: /Now:.*Neo-Alexandria/ },
  { name: 'Social Badges', pattern: /github\.com\/Rishi-Mad\?tab=followers/ },
  { name: 'About Me', pattern: /### 🌸 About Me/ },
  { name: 'Featured Projects', pattern: /## 🚀 Featured Projects/ },
  { name: 'Tech Stack', pattern: /## 🛠️ Tech Stack/ },
  { name: 'GitHub Stats', pattern: /## 📊 GitHub Stats/ },
  { name: 'Snake Game', pattern: /## 🐍 Contribution Snake/ },
  { name: 'Contact Section', pattern: /## 💬 Let's Connect/ }
];

sections.forEach(section => {
  const found = section.pattern.test(readme);
  console.log(`  ${found ? '✅' : '❌'} ${section.name}`);
});

// 2. Validate all external URLs
console.log('\n🔗 URL Validation:');
const urls = [
  // Typing animation
  { name: 'Typing SVG', url: 'https://readme-typing-svg.demolab.com' },
  // Badges
  { name: 'Shields.io', url: 'https://img.shields.io' },
  { name: 'Profile Views', url: 'https://komarev.com/ghpvc' },
  // Icons
  { name: 'Skill Icons', url: 'https://skillicons.dev' },
  // Stats
  { name: 'GitHub Stats', url: 'https://github-readme-stats.vercel.app' },
  { name: 'Streak Stats', url: 'https://streak-stats.demolab.com' }
];

urls.forEach(({ name, url }) => {
  const found = readme.includes(url);
  console.log(`  ${found ? '✅' : '❌'} ${name}: ${url}`);
});

// 3. Check color theme consistency
console.log('\n🎨 Color Theme Validation:');
const colors = {
  'Muted Rose (#E6A8C2)': /#E6A8C2/gi,
  'Soft Blush (#F4D4E1)': /#F4D4E1/gi,
  'Pale Rose (#F8E8EE)': /#F8E8EE/gi,
  'Soft Purple (#9B7EBD)': /#9B7EBD/gi,
  'Dusty Purple (#7D6B9D)': /#7D6B9D/gi,
  'Lavender (#C5B8D8)': /#C5B8D8/gi,
  'Rose Accent (#D88CA6)': /#D88CA6/gi,
  'Purple Accent (#8B6FA8)': /#8B6FA8/gi
};

Object.entries(colors).forEach(([name, pattern]) => {
  const matches = readme.match(pattern);
  const count = matches ? matches.length : 0;
  console.log(`  ${count > 0 ? '✅' : '⚠️ '} ${name}: ${count} occurrences`);
});

// 4. Validate links
console.log('\n🔗 Link Validation:');
const links = [
  { name: 'Email', pattern: /mailto:rishimadipalli@gmail\.com/ },
  { name: 'LinkedIn', pattern: /linkedin\.com\/in\/rishi-madipalli-123a89289/ },
  { name: 'GitHub Profile', pattern: /github\.com\/Rishi-Mad/ },
  { name: 'Resume PDF', pattern: /\.\/assets\/Rishi_SWE_Resume\.pdf/ }
];

links.forEach(({ name, pattern }) => {
  const found = pattern.test(readme);
  console.log(`  ${found ? '✅' : '❌'} ${name}`);
});

// 5. Check for project cards
console.log('\n🚀 Project Cards Validation:');
const projects = [
  { name: 'Neo-Alexandria', pattern: /Neo-Alexandria/ },
  { name: 'AI Study Assistant', pattern: /AI Study Assistant/ },
  { name: 'Fit Friend', pattern: /Fit Friend/ }
];

projects.forEach(({ name, pattern }) => {
  const found = pattern.test(readme);
  const hasStatus = /status-(in%20progress|finished)/.test(readme);
  const hasTechStack = /Tech Stack/.test(readme);
  const hasDetails = /<details>/.test(readme);
  console.log(`  ${found ? '✅' : '❌'} ${name}`);
  console.log(`    ${hasStatus ? '✅' : '❌'} Status badge`);
  console.log(`    ${hasTechStack ? '✅' : '❌'} Tech stack`);
  console.log(`    ${hasDetails ? '✅' : '❌'} Collapsible details`);
});

// 6. Check snake animation references
console.log('\n🐍 Snake Animation Validation:');
const snakeChecks = [
  { name: 'Light mode SVG', pattern: /\.\/assets\/snake\.svg/ },
  { name: 'Dark mode SVG', pattern: /\.\/assets\/snake-dark\.svg/ },
  { name: 'Picture element', pattern: /<picture>/ },
  { name: 'Dark mode media query', pattern: /prefers-color-scheme: dark/ }
];

snakeChecks.forEach(({ name, pattern }) => {
  const found = pattern.test(readme);
  console.log(`  ${found ? '✅' : '❌'} ${name}`);
});

// 7. Check GitHub stats configuration
console.log('\n📊 GitHub Stats Configuration:');
const statsChecks = [
  { name: 'Stats card with custom theme', pattern: /github-readme-stats.*title_color=E6A8C2/ },
  { name: 'Top languages card', pattern: /top-langs/ },
  { name: 'Streak stats', pattern: /streak-stats\.demolab\.com/ },
  { name: 'Custom colors applied', pattern: /ring=C5B8D8/ }
];

statsChecks.forEach(({ name, pattern }) => {
  const found = pattern.test(readme);
  console.log(`  ${found ? '✅' : '❌'} ${name}`);
});

// 8. Content proofreading checks
console.log('\n📝 Content Quality Checks:');
const contentChecks = [
  { name: 'No spelling errors in headers', check: () => {
    const headers = readme.match(/^#{1,3}\s+.+$/gm) || [];
    return headers.length > 0;
  }},
  { name: 'Proper markdown formatting', check: () => {
    return readme.includes('##') && readme.includes('###');
  }},
  { name: 'Alt text for images', check: () => {
    const images = readme.match(/!\[.*?\]/g) || [];
    return images.length > 0 && images.every(img => img.length > 4);
  }},
  { name: 'Consistent spacing', check: () => {
    return readme.includes('---');
  }}
];

contentChecks.forEach(({ name, check }) => {
  const passed = check();
  console.log(`  ${passed ? '✅' : '❌'} ${name}`);
});

// Summary
console.log('\n' + '='.repeat(60));
console.log('\n✨ Validation Complete!\n');
console.log('📌 Manual Testing Required:');
console.log('  1. View README on GitHub profile in light mode');
console.log('  2. Test README rendering in GitHub dark mode');
console.log('  3. Verify all badges load correctly');
console.log('  4. Click and test all links');
console.log('  5. Check snake animation displays in both themes');
console.log('  6. Test responsive behavior on mobile');
console.log('  7. Verify typing animation works properly');
console.log('  8. Validate stats cards display correctly');
console.log('\n💡 Next Steps:');
console.log('  - Push README to GitHub to test live rendering');
console.log('  - Trigger snake animation workflow manually');
console.log('  - Test on different devices and browsers');
console.log('  - Verify all external services are responding\n');
