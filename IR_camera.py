import time
import gpiozero
from picamera import PiCamera
from time import sleep
import datetime
import boto3
import os
#Camera Vars
camera = PiCamera()
camera.rotation = 180
#GPIO Vars
button=gpiozero.Button(3)
red=gpiozero.LED(15)
#S3 Vars
bucket_name="newdatadaddy"
s3 = boto3.client('s3')

while not False:
    button.wait_for_press()
    camera.start_preview()
    red.on()
    date = datetime.datetime.now().strftime("%Y_%m_%d_%H_%M_%S")
    filename=date+".jpg"
    camera.capture("/home/pi/Desktop/"+ date + ".jpg")
    print ("Image taken")
    s3.upload_file(filename, bucket_name, filename)
    os.remove(filename)
    sleep(1)
    red.off()
    print ("image uploaded")
    camera.stop_preview()


