Step to start newsbuzz

1. Install MongoDB
2. install npm
3. Start MongoDB - mongod  --dbpath "/Users/swati/downloads/newsportal-master/test/mongodbdata"
4. cd to news buzz folder and install “npm install -g json-server”
5. cd to crawler_c in news buzz and update cnn.html, inspect 'politics' on cnn.com and copy page source for all containers(See Special notes.)
6. cd to crawler in crawler_c and Run “node cnn.js”
7. Then go to localhost:8081/scrape-> this will output individual crawler files)
8. cd ..(back one folder) then run json-server --watch db.js
9. Server is now running on http://localhost:3000
10. In a new terminal goto “cd newsbuzz/website” 
11. Run npm install
12. Run npm start (Ignore all warning)
13. go to localhost:3002 -> signup -> select politics and verify date and time for each article

 
How to update cnn.html 
The file can.html is used by cnn.js to generate news feed for news buzz website. Due to a limitation in cheerio we need to manually copy paste containers to proper sections in cnn.hmtl. Lets take am example on updating the politics section. 

1. To go http://www.cnn.com/politics .
2. right click on a news headlines and to inspect element.
3. In the source look for zn__containers -> Under that look for a div with column zn__column--idx-3. Note the number can be 0,1,2,3 or anything.
4. Copy the zn__containers element and paste it to replace the zn__containers in the very start of cnn.html. 
5. Now rename zn__column--idx-x to zn__column--idx-3 note the x(may be 1,2,3,0) is rename to 3. cnn.js only looks for articles in zn__column--idx-3.
6. Save cnn.html and continue from step 6

Updating cnn.html is tricky. Read the cnn.js file carefully to see with column—idx is hardcoded for each topic like politics health and tech. And Manually copy those form the can website. 
