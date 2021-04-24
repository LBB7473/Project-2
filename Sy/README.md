# Project-2

*Collaborators: Sy Flores, Maddie Sachtler, Benjamin Wankmuller*

---
## **Table of Contents**
- [Abstract](#abstract)
- [Repository](#repository)
- [Body](#body)
  - [Data](#data)
  - [Methodology](#methodology)
  - [Analysis](#analysis)
  - [Results](#results)
- [Conclusion](#conclusion)
- [Sources](#sources)
---
## Abstract
Why are we doing what we're doing and what is it that we are attempting to do.

## Repository
This section serves as a means to navigate the project/repository.
- **Folder Name**
  - File1 in Folder
    - Description1 of File1
    - Description2 of File1
  - File2 in Folder
    - Description1 of File2
    - Description2 of File2
- File Name
  - Description1 of File
  - Description2 of File
- .gitattributes
  - This file specifies which large file types we are able to upload and download
  - We currently have XXX files specified in order to upload and download the 'NAME.XXX' file
- .gitignore
  - We currently have XXX files specified in the case that we may want to obscure CERTAIN INFORMATION
- README.md
  - This .md file details most documentation needed in order to interpret the project

## Body

### Data 
1. [Heart Disease (18 & Over) 2011-2012](https://geohub.lacity.org/datasets/26ebd4d3d7e6423587ed10be04c201d8_0?geometry=-121.138%2C33.660%2C-115.911%2C34.456) from The GeoHub, City of Los Angeles

**Disclaimer:** We will largely be using definitions as noted by The GeoHub, City of Los Angeles as to avoid straying from the intended interpretation of the dataset.
  - Description
    - Adult respondents ages 18+ who were ever diagnosed with heart disease by a doctor. Years covered are 2011 to 2012 by zip code. Data taken from the California Health Interview Survey Neighborhood Edition (AskCHIS NE) (http://askchisne.ucla.edu/), downloaded January 2016.
    - Each object in "features" has an "attributes" argument containing the **Variables** discussed below and a "geometry" argument containing a geometric polygon describing the ZIP area in the following format:
```
"geometry": {
        "rings": [
            [
                [
                    LONGITUDE1,
                    LATITUDE1
                ],
                [
                    LONGITUDE2,
                    LATITUDE2
                ]
            ] ] }
```
  - Variables
    - **Object ID** (OBJECTID) - The index or the ordered identifier for a single object in the geoJSON
    - **Zip Code** (ZIPCODE) - The zipcode describing the 
    - **Common Name of Variable** (HARDCODED NAME of VARIABLE) - Description of variable
    - **Common Name of Variable** (HARDCODED NAME of VARIABLE) - Description of variable
  - Limitations
    - Discuss any specific limimations of the dataset
2. [Los Angelese Index of Change](https://geohub.lacity.org/datasets/57e9231c3bd34d44ae49b309b0cb440e_1?geometry=-121.025%2C33.622%2C-115.798%2C34.419&selectedAttribute=HH_Incom_2) from The GeoHub, City of Los Angeles

**Disclaimer:** We will largely be using definitions as noted by the Bureau of Justice Statistics as to avoid straying from the intended interpretation of the dataset.
  - Description
    - Generic description of the data
  - Variables
    - **Common Name of Variable** (HARDCODED NAME of VARIABLE) - Description of variable
    - **Common Name of Variable** (HARDCODED NAME of VARIABLE) - Description of variable
    - **Common Name of Variable** (HARDCODED NAME of VARIABLE) - Description of variable
    - **Common Name of Variable** (HARDCODED NAME of VARIABLE) - Description of variable
  - Limitations
    - Discuss any specific limimations of the dataset
3. [Cigarette and Tobacco Retailers](https://data.ca.gov/dataset/cigarette-and-tobacco-retailers1) from California Open Data Portal, Department of Tax and Fee Administration

**Disclaimer:** We will largely be using definitions as noted by the Bureau of Justice Statistics as to avoid straying from the intended interpretation of the dataset.
  - Description
    - Generic description of the data
  - Variables
    - **Common Name of Variable** (HARDCODED NAME of VARIABLE) - Description of variable
    - **Common Name of Variable** (HARDCODED NAME of VARIABLE) - Description of variable
    - **Common Name of Variable** (HARDCODED NAME of VARIABLE) - Description of variable
    - **Common Name of Variable** (HARDCODED NAME of VARIABLE) - Description of variable
  - Limitations
    - Discuss any specific limimations of the dataset
**Reliability**
Discuss the reliability of the datasets here.

### Methodology
1. Step by step on how we approach this problem

### Analysis
Research Questions include:
1. Question1
2. Question2
3. Question3

### Results
**Research results and further research development:**
What did we find and what can we do in the future...

## Conclusion
List out our major conclusions from the project:
1. Conclusion1
2. Conclusion2
Closing statement.

---

## Sources
1. [Heart Disease (18 & Over) 2011-2012](https://geohub.lacity.org/datasets/26ebd4d3d7e6423587ed10be04c201d8_0?geometry=-121.138%2C33.660%2C-115.911%2C34.456)
2. [Los Angelese Index of Change](https://geohub.lacity.org/datasets/57e9231c3bd34d44ae49b309b0cb440e_1?geometry=-121.025%2C33.622%2C-115.798%2C34.419&selectedAttribute=HH_Incom_2)
3. [Cigarette and Tobacco Retailers](https://data.ca.gov/dataset/cigarette-and-tobacco-retailers1)