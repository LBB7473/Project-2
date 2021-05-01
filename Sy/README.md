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
    - Adult respondents ages 18+ who were ever diagnosed with heart disease by a doctor
      - Years covered are 2011 to 2012 by zip code. Data taken from the California Health Interview Survey Neighborhood Edition (AskCHIS NE) (http://askchisne.ucla.edu/), downloaded January 2016.
    - Character set: UTF-8
    - Each object in "features" has an "attributes" argument containing the **Variables** discussed below and a "geometry" argument containing a geometric polygon describing the ZIP area in the following format:
```
{
    "type": "FeatureCollection",
    "name": "efbc8d51-b624-4dd5-b626-74839dbbae42202043-1-133wcty.8a3m",
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
    },
    "features": [
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": 1,
                "ZIPCODE": "#####",
                "Zip_code": "#####",
                "PAdHrtDis": 0.0##,
                "PAdHrtDis2": #.#,
                "NAdHrtDis": ####.#,
                "Pop_18olde": #####
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            LONGITUDE1,
                            LATITUDE1
                        ],
                        [
                            LONGITUDE2,
                            LATITUDE2
                        ], ...
                    ]
                ]
            }
        }, ...
    ]
}
```
  - Variables
    - **Object ID** (OBJECTID) - The index or the ordered identifier for a single object in the geoJSON
    - **Zip Code** (ZIPCODE) - The zipcode (as a string) describing the area defined in "geometry"
    - **Zip Code** (Zip_code) - The alternate zipcode (as a string) with nodiscernable difference from **ZIPCODE**
    - **Proportion of Adults with Heart Disease** (PAdHrtDis) - The proportion of adult respondents who were ever diagnosed with heart disease by a doctor; Calculated by (**NAdHrtDis** / **Pop_18olde**)
    - **Percent of Adults with Heart Disease** (PAdHrtDis2) - The percent of adult respondents who were ever diagnosed with heart disease by a doctor; Calculated by (**NAdHrtDis** / **Pop_18olde**) * 100
    - **Number of Adults with Heart Disease** (NAdHrtDis) - The number of adult respondents who were ever diagnosed with heart disease by a doctor, adjusted for **Po_18older**
    - **Population Size** (Pop_18olde) - The population size for that **ZIPCODE**
  - Limitations
    - Discuss any specific limitations of the dataset
2. [Los Angeles Index of Change](https://geohub.lacity.org/datasets/57e9231c3bd34d44ae49b309b0cb440e_1?geometry=-121.025%2C33.622%2C-115.798%2C34.419&selectedAttribute=HH_Incom_2) from The GeoHub, City of Los Angeles

**Disclaimer:** We will largely be using definitions as noted by The GeoHub, City of Los Angeles as to avoid straying from the intended interpretation of the dataset.
  - Description
    - The Los Angeles Index of Neighborhood Change is a tool that allows users to explore the extent to which Los Angeles Zip Codes have undergone demographic change from 2000 to 2014
    - Created in 2015/2016, the data comes from 2000, 2005, 2013, and 2014
    - Each object in "features" has an "attributes" argument containing the **Variables** discussed below and a "geometry" argument containing a geometric polygon describing the ZIP area in the following format:
```
{
    "type": "FeatureCollection",
    "name": "LAINC_2014",
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
    },
    "features": [
        {
            "type": "Feature",
            "properties": {
              "FID": #,
              "zipcode": "#####",
              "Rank": #,
              "Neighborho": "NAME",
              "IRS_Ratio": +/-#.#,
              "HH_Size": #.#,
              "Per_White": #.#,
              "Per_Colleg": #.#,
              "Rent": #.#,
              "Index_Scor": 0.#,
              "IRS_Rati_1": #.#,
              "IRS_Rati_2": #.#,
              "HH_Incom_2": #####,
              "HH_Size_20": #.##,
              "HH_Size_21": #.##,
              "Percent_Wh": #.##,
              "Percent__1": #.##,
              "College_Pe": #.##,
              "College__1": #.##,
              "Gross_Rent": ###,
              "Gross_Re_1": ###,
              "MedInc4": #####.#####,
              "HHChangAdj": #.###########,
              "Population": #####,
              "Populati_1": #####,
              "Populati_2": #.#,
              "Evaluated": "Yes/No",
              "SHAPE_length": 0.#################,
              "SHAPE_Area": 0.####################
            },
            "geometry": {
                "type": "MultiPolygon"
                "coordinates": [
                    [
                        [
                            LONGITUDE1,
                            LATITUDE1
                        ],
                        [
                            LONGITUDE2,
                            LATITUDE2
                        ], ...
                    ]
                ]
            }
        }, ...
    ]
}
```
  - Variables
    - **Object ID** (OBJECTID) - The index or the ordered identifier for a single object in the geoJSON
    - **Zip Code** (zipcode) - The zipcode (as a string) describing the area defined in "geometry"
    - **Rank** (Rank) - The ranking for each zipcode by **Index_Scor**, with the highest Index Scores corresponding to the lowest numeric rank; Rank of 0 is given for an **Evaluated** value "No"
    - **Neighborhood** (Neighborho) - The name of the neighborhood(s) that predominantly corresponds to each **zipcode**
    - **% Change in IRS Ratio** (IRS_Ratio) - Percent change in low/high IRS filer ratio (Comparing 2005 and 2013)
      - For the purposes of this measure, High Income &lt;= $75K Adjust Gross Income tax filer and Low Income &gt;= $25k filers who also received an earned income tax credit
    - **% Change in Median Household Size** (HH_Size) - Percent change in average household size (Years compared for measures **Per_Colleg, Per_White, HHChangAdj, Rent**: 2000 and 2014)
    - **Change in % White Non Hispanic** (Per_White) - Change in percent of White, non-Hispanic/Latino residents
    - **Change in % >=25 with Bachelor's Degrees** (Per_Colleg) - Change in percent of residents 25 years or older with Bachelor's Degrees or a higher measure
    - **% Change in Rent (Inflation Adjusted)** (Rent) - % Change in median gross rent (2000 rent is adjusted to 2013/2014 dollars)
    - **Index Score** (Index_Scor) - This is an aggregate of six demographic measures indicative of gentrification, standardized and combined using weights that reflect the proportion of each measure that is statistically significant
      - The measures used are: **IRS_Ratio, Per_Colleg, Per_White, HHChangAdj, Rent, HH_Size**
    - **High to Low AGI Ratio (2000)** (IRS_Rati_1) - Ratio of adjusted gross income for high to low in 2000
    - **High to Low AGI Ratio (2014)** (IRS_Rati_2) - Ratio of adjusted gross income for high to low in 2014
    - **Median Household Income (2014)** (HH_Incom_2) - Median household income for the year 2014
    - **Median Household Size (2000)** (HH_Size_20) - The median household size for the year 2000
    - **Median Household Size (2013)** (HH_Size_21) - The median household size for the year 2013
    - **% White Non-Hispanic (2000)** (Percent_Wh) - Percent of White, non-Hispanic/Latino residents for the year 2000
    - **% White Non-Hispanic (2014)** (Percent__1) - Percent of White, non-Hispanic/Latino residents for the year 2014
    - **% >=25 w Bachelor's Degree (2000)** (College_Pe) - Percent of residents 25 years or older with Bachelor's Degrees or a higher measure for the year 2000
    - **% >=25 w Bachelor's Degree (2014)** (College__1) - Percent of residents 25 years or older with Bachelor's Degrees or a higher measure for the year 2014
    - **Median Gross Rent (2000 - Inflation Adjusted)** (Gross_Rent) - Median gross rent for the year 2000 (Adjusted for inflation to 2013/2014 dollars)
    - **Median Gross Rent 2014** (Gross_Re_1) - Description
    - **Median Household Income (2000 - Inflation Adjusted)** (MedInc4) - Median household income for the year 2000 (Adjusted to 2014)
    - **% Change in Median Houshold Income (Inflation Adjusted)** (HHChangAdj) - Percent change in median household income (2000 income is adjusted to 2014 dollars)
    - **Population (2000)** (Population) - Population size for the year 2000
    - **Population (2014)** (Populati_1) - Population size for the year 2014
    - **Population Change (2000-2014)** (Populati_2) - % change in population size from the year 2000 to 2014
    - **Evaluated** (Evaluated) - Indicates if **Index_Scor** has been calculated and a corresponding **Rank** has been given for that **zipcode**; Either "Yes" or "No"
    - **Shape Length** (SHAPE_length) - Indicator describing length of the **MultiPolygon** defined by **coordinates** in **geometry**
    - **Shape Area** (SHAPE_Area) - Indicator describing the area of the **MultiPolygon** defined by **coordinates** in **geometry**
  - Limitations
    - Discuss any specific limimations of the dataset
3. [Cigarette and Tobacco Retailers](https://data.ca.gov/dataset/cigarette-and-tobacco-retailers1) from California Open Data Portal, Department of Tax and Fee Administration

**Disclaimer:** We will largely be using definitions as noted by the Bureau of Justice Statistics as to avoid straying from the intended interpretation of the dataset.
  - Description
    - All active Cigarette and Tobacco Licensees in California and their specific locations as of February 26, 2021
    - Each object in "features" has a "properties" argument containing the **Variables** discussed below and a "geometry" argument containing a point with a single "coordinates" field:
```
{
    "type": "FeatureCollection",
    "name": "Cigarette_and_Tobacco_Retailers",
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
    },
    "features": [
        {
            "type": "Feature",
            "properties": {
                "OBJECTID": #,
                "STREET": "STREETADDRESS",
                "CITY": "CITY_NAME",
                "STATE": "CA",
                "ZIPCODE": #########,
                "Type": "Retailer"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    LONGITUDE,
                    LATITUDE
               ]
            }
        }, ...
    ]
}
```
  - Variables
    - **Object ID** (OBJECTID) - The index or the ordered identifier for a single object in the geoJSON
    - **Common Name of Variable** (STREET) - The street address attached to the point specified in "geometry"
    - **Common Name of Variable** (CITY) - The city attached to the point specified in "geometry"
    - **Common Name of Variable** (STATE) - The state attached to the point specified in "geometry"
    - **Common Name of Variable** (ZIPCODE) - The zipcode (as an integer) attached to the point specified in "geometry"
    - **Common Name of Variable** (Type) - The type of licensee (commercial entity)
      - For this dataset, every object has the **Type**: "Retailer"
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