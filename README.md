# IR Ranger
Wildlife population monitoring system using Raspberry-Pi, AWS Rekognition/Lambda/EC2/S3, MongoDB, NodeJS, AngularJS, and Python

# How it Works
-Take (infrared) photos of animals and people with Raspberry-Pi
-Photo is automatically uploaded to AWS S3 Bucket
-Photo upload triggers a Lambda that executes a python script to detect the number of animals (tallied based on species) using AWS Rekognition
-Animal count data is then sent to MongoDB hosted on EC2 instance
-Website (also hosted on AWS) queries data from MongoDB and displays it in a comprehensive way to the user
