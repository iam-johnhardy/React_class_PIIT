# React + Vite

my-app/
├── public/                  # Static assets served directly
│   ├── index.html           # HTML entry point (Vite: root level)
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── assets/              # Images, fonts, static files imported by JS
│   ├── components/          # Reusable UI components (buttons, inputs, cards)
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   ├── Button.css / Button.module.css
│   │   │   └── Button.test.jsx
│   │   └── index.js         # Re-exports for cleaner imports
│   ├── pages/               # Route-level components (Home, About, Dashboard)
│   ├── hooks/               # Custom React hooks (useAuth, useFetch)
│   ├── context/             # React Context providers
│   ├── services/            # API calls, external integrations (axios instances)
│   ├── utils/               # Pure helper functions (formatDate, validators)
│   ├── store/               # State management (Redux, Zustand, Jotai)
│   ├── styles/              # Global styles, CSS variables, Tailwind config
│   ├── App.jsx              # Root component with routing
│   └── main.jsx / index.js  # Entry point, renders App
├── tests/                   # E2E or integration tests (optional)
├── .env                     # Environment variables
├── vite.config.js           # or react-scripts config
├── package.json
└── README.md