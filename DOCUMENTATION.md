### Setting local environment variable

Please place all your environment variables in an .env file. You have to define two variables:
1. CESIUM_ACCESS_TOKEN=YOURACCESSTOKEN
2. CESIUM_BASE_URL=http://localhost:8080

### Environment variable in Heroku

You will need to make sure that the Cesium access token environment variable is available to Heroku. To check, do:

```
$heroku config -a appname
```
If Cesium access token environment variable is not there, then do:

```
$ heroku config:set CESIUM_ACCESS_TOKEN=YOURACCESSTOKEN
```
You may need to define the Cesium base url:
```
$ heroku config:set CESIUM_BASE_URL=http://localhost:8080
```

### Deployment to Heroku

Instead of using heroku.yml file to define your Heroku app, you can just directly build and deploy you docker images to Heroku, as long as you already have Docker installed. 

This is the most straightforward and less error prone method, provided if you have already successfully tested the Docker deployment on your local machine.

While in the repo's root directory, first you log in to container registry:
```
$ heroku container:login
```

Create your heroku app and specify the chosen app name:
```
$ heroku create appname
```

Build the docker image and push to registry:
```
$ heroku container:push web --app appname
```

Once the docker image has been pushed, the terminal will notify you that you may now release the image to your app:

```
$ heroku container:release web --app appname
```
Finally, you may open the app in the browser:
```
$ heroku open -a appname
```