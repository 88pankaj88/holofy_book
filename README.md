Author: Pankaj Goyal

To run the code, do 

npm install
ENV=local node app


or create a docker build and run it




Assumptions and leverages:
1. console.log are used, we can employ some good logger like winston or pino for same purpose.They are faster and give much better control over log formatting.
2. Cache can be used if its use case arises, like increase in load over read APIs etc.
3. Only expressJs is used, other framework like Nest etc makes life easier.