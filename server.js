import jsonServer from 'json-server'; // Use import instead of require
import { createRequire } from 'module'; // Import createRequire to load JSON files if needed

const require = createRequire(import.meta.url); // Create a require function for loading JSON files
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // You can still use db.json directly if it's in the same directory
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5050;
s;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
