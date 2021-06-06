# README

This is the project for plataforma 5 bootcamp workshops.

### What is this repository for?

-   To use it to implement the excercises propose during the classes.

### How do i started locally?

-   This repo is used by docker and docker-compose, even if that will be seen in a detail way in another module the easiest way to start everything to test and implement is:

To start mysqsl and test schema

```bash
docker-compose up -d mysql
```

To start api project

```bash
docker-compose up local
```

### How do i run and implement tests?

The tests structure is already implemented even if some tests are not.

Unit tests are being implemented along the sources, in a complement file called _.controller.test.js or _.service.test.js.

To run unit tests

```bash
docker-compose up test
```

Integration tests are being implemented in the "tests" folder.
This is defined in the jest config.

To run integration tests

```bash
docker-compose up integration-test
```

```down
docker-compose down
```
