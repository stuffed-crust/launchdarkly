# CryptoFlow - Feature Flag Demo

This project demonstrates the implementation of feature flags using LaunchDarkly in a React application. The application simulates a SaaS crypto infrastructure platform with a feature flag controlling the visibility of a "Learn More" button.

## 🚀 Live Demo

Visit the live demo: [CryptoFlow Demo](https://lustrous-mochi-36522d.netlify.app)

## ✨ Features

- React + TypeScript + Vite setup
- LaunchDarkly feature flag integration
- Heap Analytics integration
- Responsive design using Tailwind CSS
- Role-based feature targeting
- Lucide React icons

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm (v7 or higher)
- A LaunchDarkly account (for feature flags)
- A Heap Analytics account (for analytics)

## 🛠️ Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/cryptoflow.git
   cd cryptoflow
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure LaunchDarkly:**
   
   a. Sign up for a [LaunchDarkly account](https://launchdarkly.com)
   
   b. Create a new project in LaunchDarkly
   
   c. Create a feature flag:
      - Name: `learnMore`
      - Key: `learnMore`
      - Variations: boolean (true/false)
   
   d. Replace the SDK key in `src/main.tsx`:
   ```typescript
   const clientSideID = 'YOUR_CLIENT_SIDE_ID'; // Replace with your SDK key
   ```

4. **Configure Heap Analytics:**
   
   Replace the Heap environment ID in `index.html`:
   ```html
   heap.load("YOUR_HEAP_ENV_ID"); // Replace with your Heap environment ID
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## 🏗️ Project Structure

```
cryptoflow/
├── src/
│   ├── App.tsx           # Main application component
│   ├── main.tsx         # Entry point with LaunchDarkly config
│   └── index.css        # Global styles (Tailwind)
├── public/              # Static assets
├── index.html          # HTML template with Heap Analytics
└── package.json        # Project dependencies
```

## 🚩 Feature Flag Implementation

The application uses a feature flag named `learnMore` to control the visibility of a button in the hero section. The flag is configured in LaunchDarkly and can be targeted based on user roles.

### User Context

The LaunchDarkly context in `src/main.tsx` defines the user attributes:

```typescript
const context = {
  kind: 'user',
  key: 'user-key-123abcde',
  email: 'biz@face.dev',
  role: 'visitor',  // Used for role-based targeting
  beta: false       // Used for beta feature targeting
};
```

### Role-Based Targeting

The application includes a role switcher (visitor/admin) to demonstrate targeting capabilities. You can configure targeting rules in LaunchDarkly based on these roles.

## 📊 Analytics Integration

Heap Analytics is integrated to track user interactions. The script in `index.html` automatically tracks:
- Page views
- Button clicks
- User role changes

- ## 📊 Slack Integration
LaunchDarkly is integrated with Slack to provide real-time notifications for our development team when feature flag changes occur. The integration was essential for maintaining clear communication across our distributed team, allowing everyone to stay informed about feature releases, rollbacks, and experimental results without needing to constantly check the LaunchDarkly dashboard. This has significantly improved our team's response time to any issues that arise from feature deployments, as critical alerts are immediately pushed to dedicated Slack channels based on their urgency and relevance.
LaunchDarkly is configured to send notifications to a Slack channel when:

Feature flags are toggled on/off
Targeting rules are changed
Experiments are started or completed

<img width="1710" alt="Screenshot 2025-03-16 at 23 43 43" src="https://github.com/user-attachments/assets/1f1482db-aaa1-4b40-90fb-8311cbb4a997" />


## 🏭 Building for Production

Create a production build:
```bash
npm run build
```

The optimized build will be available in the `dist` directory.

## 🔑 Important Notes

1. **Security:**
   - Replace all placeholder values (SDK keys, environment IDs) before deploying
   - Never commit sensitive keys to the repository
   - Use environment variables for production deployments

2. **Feature Flags:**
   - Configure LaunchDarkly targeting rules based on your requirements
   - Test feature flag behavior with different user roles
   - Monitor flag usage in LaunchDarkly dashboard

3. **Analytics:**
   - Verify Heap Analytics events in your dashboard
   - Set up custom event tracking as needed
   - Monitor user behavior and feature flag impact

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
