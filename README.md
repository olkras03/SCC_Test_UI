# SCC_Test_UI
Exploratory (hacky) implementation of new SCC idea

## Getting Started
1. clone the repo to your machine
2. ensure you have docker running
3. at the root of the repo, run the following command: `./launchPoc.sh`
4. Using a browser, navigate to the following local host address to access the services indivually

### Individual Services
1. scc-cms: localhost:8000
  A management portal allowing non-developers to define and edit website content without interacting with code.
2. scc-api: localhost: 5000
  Backend API to manage journey state via a link with mongo database
3. scc-journey: to be launched
  The customer facing user interface

### Premise
Product teams define or edit website styling and content through a defined application (scc-cms). Upon saving their desired changes, the new configuration as dispatched to the API (scc-api) and save in the database. The customer facing user interface (scc-journey) reads it's content directly from the database (via scc-api) in order to determine what to render to the user - i.e.. the content defined in the first step.

### Stack
1. docker: All services run in dockerised containers defined in dockerfiles (except for mongo database which runs from an image), and orchestrated via docker-compose at the root of the repo.
2. mongo database run from the following official image: https://hub.docker.com/_/mongo. Recomend connection via Mongo Compass client which can be downloaded here: https://www.mongodb.com/try/download/compass if required. Development instance can be accessed using the following connection string: "mongodb://scc:comparethemarket@localhost:27017/admin".
3. SCC-CMS: Web component project. See Readme for that project: https://github.com/JSLittler/SCC_Test_UI/blob/main/scc-cms/README.md
4: SCC-API: Simple backend service to manage mongo database, written in dotnet 5.

### Please note
The code in this repository is not production ready.
The project is explicitly constructed for the purposes of exploring possible technical approaches to solving the issue of allowing website changes to be made and deployed by non-developers. Whilst it may serve as a signpost for future direction, it has never been intended for production deployment in this form.
