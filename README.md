# Assignment for Sitoo job application
- User dashboard that fetches, deletes, creates users from external API
- Routing
- Pagination
- Error handling
- Mobile compatible

# Stack used for project
- React (Vite)
- TypeScript

# How to run locally
1. Create a .env.local file
2. Add following env variables (and replace username and password):
- VITE_SITOO_API_URL=http://localhost:8088/https://api-sandbox.mysitoo.com/v2/accounts/90316/sites/1
- VITE_SITOO_USERNAME=<full user name>
- VITE_SITOO_PASSWORD=<full password>
3. Run terminal "npm run dev"
4. Start upp CORS proxy server