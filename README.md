🛍️ Snapdeal Automation Project
Automated end-to-end UI testing for Snapdeal using Playwright, JavaScript, and Cucumber BDD.

✅ Features Covered
        🔎 Product search functionality
        👗 Kurti product search validation
        💰 Price filter using the slider
        🔃 Product sorting feature
        🛒 Adding product to cart

💻 Tech Stack
       -> Playwright
       -> JavaScript (ES6)
       -> Cucumber BDD
       -> Node.js

🧩 Framework Type
Hybrid Test Automation Framework

Combines:
✅ Cucumber BDD
✅ Page Object Model (POM)
✅ Data-Driven Testing
✅ Fixture Factory (Dependency Injection)

⚙️ Framework Architecture

Cucumber BDD:
Write readable tests using Gherkin syntax. Step definitions are reusable and separated from logic.

Page Object Model (POM):
Each page is a class encapsulating its selectors and actions. Easy to maintain and scale.

Fixture Factory:
Automatically injects page objects into steps, avoiding repetitive instantiations.

Data-Driven Testing:
Test data is stored in JSON files. Easily extend tests by adding new data—no need to change test logic.

📊 Test Reports:
🧾 Allure HTML Reports: Generate visually rich test execution reports

📁 Repository:
📌 GitHub: Snapdeal Playwright Project

🚀 How to Run:

npm install
npm run test        # Executes Cucumber tests
npm run allure      # Generates and open the Allure report
