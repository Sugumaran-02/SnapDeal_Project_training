const { execSync } = require('child_process');

const featureFiles = [
  'tests/feature/TC5_End_to_End.feature',
  'tests/feature/TC4_Causalshoes_sort.feature',
  'tests/feature/TC3_Check_price_limit_slide_bar.feature',
  'tests/feature/TC2_Womens_Kurti.feature',
  'tests/feature/TC1_Mens_FormalShoes.feature',
];

featureFiles.forEach((file) => {
  console.log(`Running: ${file}`);
  execSync(`npx cucumber-js ${file}`, { stdio: 'inherit' });
});