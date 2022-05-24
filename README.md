## Run the app
For running the backend code you can use docker-compose and use the script `docker-compose up -d --build` for the first time and then run `docker-compose up -d` for the later usages.
You can use the command `docker ps -a` to find the processes running by docker and for backend logs you can use the _container id_ and use the code `docker logs -f <container_id>`


### Project Description:
This is only part of the whole project, If you can see other files is that I have extracted the parts that you can place an order except the part that the order automatically can extract the user info out of the token they send to the backend and all the info is gathered automatically they just needed to send the order detail they wanted to send which was an array of objects which the structure was a contract between frontend devs and backend devs

I offer to take a look at the Order files and folders and take a look at the domain logic how it is done!

### Project Architecture:
The project is a monolithic app that is build around DDD and Hexagonal architecture so that each adapter, port and domain logic can be easily extrated out and be used in a separate container and as an independent service if needed!
The whole project is Dockerized so just use docker to run the project! make sure to have the .env if you're running the project which you only need the mongodb connection URI and a port to run it!

- This project uses APIs to call each service but it can be replaced with lambda functions as Hexagonal is really easy to replace files with other file(s).