Step to start newsbuzz

1. Install MongoDB
2. install npm
3. Start MongoDB - mongod  --dbpath "/Users/swati/downloads/newsportal-master/test/mongodbdata"
4. cd to news buzz folder and install “npm install -g json-server”
5. cd to crawler in crawler_c and Run “node cnn.js”
7. cd ..(back one folder) then run json-server --watch db.js
8. Server is now running on http://localhost:3000
9. In a new terminal goto “cd newsbuzz/nb-website” 
10. Run npm install
11. Run npm start (Ignore all warning)
12. go to localhost:3002 -> signup -> select politics and verify date and time for each article

Steps 1-4 and 10 are to install the project first time. After code changes to re-build project only do the remaining steps. 

crawler now craws all cnn RSS feeds for 5 categories. To verify if crawler works use http://www.cnn.com/services/rss/
